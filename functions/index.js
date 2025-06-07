// Importa as bibliotecas necessárias
const { Firestore } = require('@google-cloud/firestore');
// ADICIONE a linha abaixo para usar o Vertex AI SDK:
const { VertexAI } = require('@google-cloud/vertexai');

// Inicializa o Firestore
const db = new Firestore({
    projectId: "eixohiv" // Agora, o Firestore receberá "eixohiv" diretamente
});

// ADICIONE a inicialização do Vertex AI
const vertex_ai = new VertexAI({
    project: "eixohiv", // Força o ID do projeto diretamente
    location: "us-central1" // Força a região diretamente
});

// Instancia o modelo Gemini Flash via Vertex AI
const generativeModel = vertex_ai.getGenerativeModel({
    model: 'gemini-2.0-flash-001',
    // Opcional: Você pode adicionar configurações de geração aqui se precisar
    // Por exemplo:
    // generationConfig: {
    //     temperature: 0.7, // Controla a criatividade da IA (0.0 a 1.0)
    //     maxOutputTokens: 1024, // Limite o tamanho da resposta
    // },
});


/**
 * Função Cloud que responde a perguntas de FAQ usando Gemini e Firestore.
 * Recebe uma requisição HTTP do frontend.
 */
exports.askFAQ = async (req, res) => {
    // Habilita CORS para que seu frontend possa chamar esta função
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Adicione OPTIONS para pré-voo CORS
    res.set('Access-Control-Allow-Headers', 'Content-Type'); // Permite cabeçalho Content-Type

    // Para lidar com requisições OPTIONS (pré-voo CORS)
    if (req.method === 'OPTIONS') {
        res.status(204).send('');
        return;
    }

    const userQuestion = req.body.question;

    if (!userQuestion) {
        return res.status(400).send('Por favor, forneça uma pergunta.');
    }

    let relevantContext = '';
    try {
        // 1. Buscar Contexto na Despensa (Firestore)
        const faqsRef = db.collection('faqs_eixo'); // Use o nome exato da sua coleção no Firestore
        const keywords = userQuestion.toLowerCase().split(/\s+/).filter(word => word.length > 2); // Filtra palavras curtas

        let querySnapshot;

        if (keywords.length > 0) {
            // Tenta buscar documentos que contenham qualquer uma das palavras-chave relevantes
            querySnapshot = await faqsRef.where('palavras_chave', 'array-contains-any', keywords).limit(3).get();
        } else {
            // Se não houver palavras-chave úteis, pode pegar um FAQ padrão ou uma resposta mais genérica
            // Ou simplesmente não adicionar contexto específico, deixando o Gemini usar seu conhecimento geral.
            // Para evitar erro no Firestore, vou pegar apenas 1 documento qualquer se keywords for vazio
            querySnapshot = await faqsRef.limit(1).get();
            console.log('Nenhuma palavra-chave útil na pergunta do usuário. Buscando um FAQ genérico ou contando apenas com o conhecimento da IA.');
        }


        if (!querySnapshot.empty) {
            querySnapshot.forEach(doc => {
                const data = doc.data();
                // Correção de sintaxe na interpolação e formatação para o prompt
                relevantContext += `\n\n### Pergunta: ${data.pergunta}\nResposta: ${data.resposta_completa}`;
            });
        } else {
            console.log('Nenhum FAQ relevante encontrado no Firestore.');
        }


        // 2. Construir o Prompt para o Chef (Gemini)
        // Ajustei o prompt para ser mais robusto com a ausência de contexto específico
        const prompt = `Você é um assistente acolhedor, simpático, prestativo, sucinto e informativo do Eixo, uma plataforma de apoio para pessoas que receberam recentemente o diagnóstico de HIV.

${relevantContext ? `Dê prioridade máxima e utilize apenas as informações da base de dados do Eixo para responder à pergunta do usuário. As informações relevantes são:\n\n${relevantContext}\n\n` : ''}

${relevantContext ? `Se a resposta não estiver explicitamente nas informações fornecidas, ou se a pergunta for sobre emergência, aconselhamento legal/psicológico profundo, diagnóstico ou tratamento médico pessoal, ou qualquer tópico que exija consulta a um profissional, diga com um tom acolhedor que esta ajuda ou apoio está além da sua alçada. Nesses casos, sugira que o usuário procure um profissional da área relacionada (infectologista, terapeuta, advogado, etc) ou acesse a área de "Encontre apoio" da plataforma.` : `Caso o contexto específico não seja encontrado na base de dados do Eixo, use seu conhecimento geral de forma útil e responsável. Sempre priorize a segurança e o encaminhamento para profissionais de saúde em casos de emergência, diagnóstico, tratamento médico pessoal ou aconselhamento profundo. Lembre-se que o Eixo oferece apoio e conexão.`}

Mantenha a resposta com no máximo dois parágrafos curtos (ou 3 a 5 frases no total). Seja direto(a) e vá ao ponto, focando exclusivamente nas informações mais relevantes. Utilize a interpretação e o uso de Markdown, incluindo negrito (**) para destacar termos importantes. Para listagens envolvendo múltiplos itens, use tópicos com marcadores simples (- ou *). Evite redundâncias, frases prolixas, e firulas em introduções e finalizações.

Pergunta do usuário: "${userQuestion}"

Sua resposta:`;

        // 3. Chamar a Gemini API via Vertex AI SDK
        const result = await generativeModel.generateContent(prompt);
        const response = await result.response;
        // CORREÇÃO APLICADA AQUI:
        const text = response.candidates[0].content.parts[0].text; 

        // 4. Retornar a Resposta
        res.status(200).json({ answer: text });

    } catch (error) {
        console.error('Erro ao processar a pergunta na Cloud Function:', error);
        // Retorna um JSON com a mensagem de erro para o frontend
        res.status(500).json({ error: `Erro interno do servidor: ${error.message || 'Verifique os logs detalhados da função no Google Cloud.'}` });
    }
};