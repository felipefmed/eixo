// Importa as bibliotecas necessárias do Google Cloud.
// Firestore para interagir com o banco de dados NoSQL.
// VertexAI para usar os modelos de IA, como o Gemini.
const { Firestore } = require('@google-cloud/firestore');
const { VertexAI } = require('@google-cloud/vertexai');

// --- Configuração e Inicialização ---
// Inicializa o cliente do Firestore para acessar a coleção 'faqs_eixo'.
const db = new Firestore({
    projectId: "eixohiv"
});

// Inicializa o cliente do Vertex AI, especificando o projeto e a localização.
const vertex_ai = new VertexAI({
    project: "eixohiv",
    location: "us-central1"
});

// Obtém uma instância do modelo Gemini Flash para geração de conteúdo.
const generativeModel = vertex_ai.getGenerativeModel({
    model: 'gemini-2.0-flash-001',
    //generationConfig: { temperature: 0.7, maxOutputTokens: 1024 }, // Configurações opcionais da IA
});

// --- Função Principal da Cloud Function: askFAQ ---
/**
 * Esta é a função principal que será executada na Cloud Function.
 * Ela lida com requisições HTTP do frontend para o chat ou FAQ.
 * @param {object} req - Objeto de requisição HTTP.
 * @param {object} res - Objeto de resposta HTTP.
 */
exports.askFAQ = async (req, res) => {
    // --- Configuração de CORS (Cross-Origin Resource Sharing) ---
    // Essencial para permitir que seu frontend (que roda em um domínio diferente)
    // se comunique com esta Cloud Function.
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Content-Type');

    // Lida com as requisições 'OPTIONS' (pre-flight requests) do CORS.
    if (req.method === 'OPTIONS') {
        res.status(204).send('');
        return;
    }

    // --- Extração de Dados da Requisição ---
    // Obtém a pergunta do usuário e o tipo de interação ('chat_acolhimento' ou 'faq_general').
    const userQuestion = req.body.question;
    const interactionType = req.body.interactionType || 'faq_general';

    // Valida se a pergunta do usuário foi fornecida.
    if (!userQuestion) {
        return res.status(400).send('Por favor, forneça uma pergunta.');
    }

    // --- Definição dos Prompts da IA e Lógica de Contexto ---
    // Variáveis para armazenar o prompt do sistema final e controlar a busca no Firestore.
    let systemPrompt = '';
    let enableContextSearch = true;

    // Define os prompts base para cada tipo de interação da IA.
    // {CONTEXTO_PLACEHOLDER_FAQ} será substituído pelo contexto do Firestore se for FAQ.
    const PROMPT_FAQ_GENERAL = `Você é um assistente acolhedor, simpático, prestativo, sucinto e informativo do Eixo, uma plataforma de apoio para pessoas que receberam recentemente o diagnóstico de HIV.
    
    {CONTEXTO_PLACEHOLDER_FAQ}
    
    Caso o contexto específico não seja encontrado na base de dados do Eixo, use seu conhecimento geral de forma útil e responsável. Sempre priorize a segurança e o encaminhamento para profissionais de saúde em casos de emergência, diagnóstico, tratamento médico pessoal ou aconselhamento profundo. Lembre-se que o Eixo oferece apoio e conexão.
    
    Mantenha a resposta com no máximo dois parágrafos curtos (ou 3 a 5 frases no total). Seja direto(a) e vá ao ponto, focando exclusivamente nas informações mais relevantes. Utilize a interpretação e o uso de Markdown, incluindo negrito (**) para destacar termos importantes. Para listagens envolvendo múltiplos itens, use tópicos com marcadores simples (- ou *). Evite redundâncias, frases prolixas, e firulas em introduções e finalizações.`;

    // Prompt específico para o chat de acolhimento, com foco em empatia e limitações.
    const PROMPT_CHAT_ACOLHIMENTO = `Você é um assistente virtual de acolhimento do projeto Eixo, focado em oferecer apoio empático e informações gerais sobre HIV. Seu objetivo é ser compreensivo, não julgador e fornecer informações claras e acessíveis, agindo como um amigo prestativo.

    Diretrizes Essenciais:
    - **Tom de voz:** Empático, acolhedor, compreensivo e respeitoso. Mantenha um tom conversacional e amigável, como em uma troca de mensagens.
    - **Concisão e Fluidez:** Mantenha as respostas curtas e diretas, idealmente **com no máximo 200 caracteres**. Se a pergunta do usuário pedir por uma **explicação detalhada** sobre um tópico de saúde ou informação complexa, então você pode se estender um pouco mais para garantir clareza e informações completas, ignorando o limite de 200 caracteres apenas nesses casos específicos.
    - **Indagador e Engajador (Ganchos):** Após responder, frequentemente (mas não em todas as respostas) faça uma pergunta aberta, um gancho, ou convide o usuário a continuar a conversa. Isso estimula a interação e demonstra interesse, sem ser invasivo. Exemplos: "Isso te ajuda?", "Algo mais que você gostaria de saber?", "Como você está se sentindo sobre isso?", "Há mais alguma coisa em que posso te apoiar hoje?".
    - **Bem-Estar:** Ocasionalmente, e de forma natural, pergunte sobre o bem-estar do usuário ou como ele(a) está se sentindo em relação a um tópico. Ex: "Como você está se sentindo hoje com tudo isso?", "Essa informação te trouxe alguma tranquilidade?".
    - **Adesão ao Tratamento (Se Relevante):** Se o usuário mencionar ou se a conversa indicar que ele(a) descobriu o HIV recentemente ou está com dúvidas sobre o diagnóstico, de forma sensível e acolhedora, aborde a importância da **adesão ao tratamento** e como isso contribui para uma **qualidade de vida** plena e indetectabilidade. Ofereça informações gerais e reforce que a ciência avançou muito.
    - **Limitações:** Sempre reforce que você não substitui o aconselhamento médico, psicológico, legal ou profissional. Se uma pergunta for muito específica, sugerir gentilmente que procure um profissional de saúde ou os recursos humanos do Eixo. Use frases como: "É importante conversar com um médico sobre isso...", "Não sou um profissional de saúde, mas posso te dar informações gerais...", "Para questões mais profundas, recomendo buscar apoio profissional...".
    - **Não diagnostique/prescreva:** Nunca tente diagnosticar condições médicas, fazer prognósticos ou prescrever tratamentos.
    - **Privacidade:** Não peça ou armazene informações pessoais identificáveis.
    - **Encorajamento:** Encoraje o usuário a buscar apoio profissional ou humano quando apropriado, e sempre valide os sentimentos e desafios expressos.
    - **Idioma:** Responda sempre em Português do Brasil.
    - **Formatação:** Use Markdown (negrito, itálico, listas) para organizar as respostas e torná-las mais legíveis.
    - **Evite Gírias e Linguagem Excessivamente Informal:** Mantenha um padrão de linguagem adequado para um assistente de apoio, evitando gírias que possam ser mal interpretadas ou parecer forçadas.
    - **Use poucos emojis, e se usar, priorize o coração roxo - desde que caiba no contexto.**
    - **Evitar redundâncias de informações e de falas**
    - **Evitar Saudações/Despedidas Repetitivas:** Não inicie cada resposta com "Olá" ou termine com "Até mais". Mantenha a fluidez da conversa.
    `;

    // Define qual prompt e se a busca por contexto no Firestore será ativada,
    // com base no 'interactionType' recebido.
    if (interactionType === 'chat_acolhimento') {
        systemPrompt = PROMPT_CHAT_ACOLHIMENTO;
        enableContextSearch = false; // Chat de acolhimento não precisa de busca de FAQ
    } else { // Para 'faq_general' ou qualquer outro tipo
        systemPrompt = PROMPT_FAQ_GENERAL;
        enableContextSearch = true; // FAQ busca no Firestore
    }

    // --- Busca de Contexto no Firestore (Condicional) ---
    // Inicializa a variável para armazenar o contexto relevante do Firestore.
    let relevantContext = '';
    
    // Executa a busca no Firestore SOMENTE se 'enableContextSearch' for verdadeiro (para FAQs).
    if (enableContextSearch) {
        try {
            const faqsRef = db.collection('faqs_eixo');
            const keywords = userQuestion.toLowerCase().split(/\s+/).filter(word => word.length > 2);

            let querySnapshot;

            if (keywords.length > 0) {
                // Tenta buscar FAQs relevantes por palavras-chave.
                querySnapshot = await faqsRef.where('palavras_chave', 'array-contains-any', keywords).limit(3).get();
            } else {
                // Se não há palavras-chave, busca um FAQ genérico para evitar erro.
                querySnapshot = await faqsRef.limit(1).get();
                console.log('Nenhuma palavra-chave útil. Usando conhecimento geral da IA.');
            }

            // Constrói o 'relevantContext' a partir dos documentos encontrados no Firestore.
            if (!querySnapshot.empty) {
                querySnapshot.forEach(doc => {
                    const data = doc.data();
                    relevantContext += `\n\n### Pergunta: ${data.pergunta}\nResposta: ${data.resposta_completa}`;
                });
            } else {
                console.log('Nenhum FAQ relevante encontrado no Firestore.');
            }
        } catch (firestoreError) {
            console.error('Erro ao buscar no Firestore:', firestoreError);
            // Continua sem contexto relevante se houver um erro no Firestore.
        }
    }

    // --- Geração da Resposta com Gemini ---
    try {
        // Constrói o prompt final para o Gemini.
        // Injeta o contexto do Firestore (se existir e for um FAQ) no prompt base.
        let finalPrompt = systemPrompt;

        if (relevantContext && interactionType === 'faq_general') {
            const contextSection = `Dê prioridade máxima e utilize apenas as informações da base de dados do Eixo para responder à pergunta do usuário. As informações relevantes são:\n\n${relevantContext}\n\n`;
            finalPrompt = finalPrompt.replace('{CONTEXTO_PLACEHOLDER_FAQ}', contextSection);
        } else if (!relevantContext && interactionType === 'faq_general') {
            // Se for FAQ mas não encontrou contexto, adiciona a mensagem de fallback.
            const fallbackSection = `Caso o contexto específico não seja encontrado na base de dados do Eixo, use seu conhecimento geral de forma útil e responsável. Sempre priorize a segurança e o encaminhamento para profissionais de saúde em casos de emergência, diagnóstico, tratamento médico pessoal ou aconselhamento profundo. Lembre-se que o Eixo oferece apoio e conexão.`
            finalPrompt = finalPrompt.replace('{CONTEXTO_PLACEHOLDER_FAQ}', fallbackSection);
        } else {
            // Remove o placeholder se for chat de acolhimento (não relevante).
            finalPrompt = finalPrompt.replace('{CONTEXTO_PLACEHOLDER_FAQ}', '');
        }

        // Adiciona a pergunta real do usuário ao final do prompt.
        finalPrompt += `\n\nPergunta do usuário: "${userQuestion}"\n\nSua resposta:`;

        // Chama a API do Gemini com o prompt final e obtém a resposta.
        const result = await generativeModel.generateContent(finalPrompt);
        const response = await result.response;
        const text = response.candidates[0].content.parts[0].text;

        // Retorna a resposta da IA para o frontend.
        res.status(200).json({ answer: text });

    } catch (error) {
        // --- Tratamento de Erros ---
        // Loga qualquer erro que ocorra durante o processamento da IA ou na construção do prompt.
        console.error('Erro ao processar a pergunta na Cloud Function:', error);
        // Retorna uma mensagem de erro para o frontend.
        res.status(500).json({ error: `Erro interno do servidor: ${error.message || 'Verifique os logs detalhados da função no Google Cloud.'}` });
    }
};