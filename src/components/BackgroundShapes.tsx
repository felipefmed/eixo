import React, { useEffect, useRef } from "react";

// Defina uma interface para tipar os objetos SHAPE de forma mais clara
interface ShapeConfig {
  style: React.CSSProperties; // Estilos CSS da forma
  parallaxFactorY?: number; // Fator de movimento vertical (opcional, padrão será usado se não definido)
  parallaxFactorX?: number; // Fator de movimento horizontal (opcional)
  lerpFactor?: number;      // Fator de suavização do lerp (opcional, padrão será usado)
}

// Paleta de cores orgânicas que combinam com o site
const SHAPES: ShapeConfig[] = [ // Usamos a interface ShapeConfig
  {
    style: {
      top: "8%",
      left: "-6%",
      width: "370px",
      height: "260px",
      background: "linear-gradient(135deg, #B19AFF99 55%, #E0D9FF55 100%)",
      filter: "blur(36px)",
      opacity: 0.7,
      zIndex: 0,
      borderRadius: "58% 42% 59% 41% / 42% 58% 42% 58%",
      animationDelay: "0s",
    },
    parallaxFactorY: 0.99, // Mais lento
    parallaxFactorX: -0.35, // Movimento sutil para a esquerda
    lerpFactor: 0.2, // Um pouco mais responsivo
  },
  {
    style: {
      top: "65%",
      left: "70vw",
      width: "320px",
      height: "220px",
      background: "linear-gradient(135deg, #5EE2A099 40%, #C3FFE055 100%)",
      filter: "blur(30px)",
      opacity: 0.6,
      zIndex: 0,
      borderRadius: "51% 49% 61% 39% / 61% 49% 51% 39%",
      animationDelay: ".4s",
    },
    parallaxFactorY: -0.88, // Um pouco mais rápido
    parallaxFactorX: 0.08, // Movimento sutil para a direita
    lerpFactor: 0.2, // Mais suave
  },
  {
    style: {
      top: "30%",
      left: "90vw",
      width: "280px",
      height: "190px",
      background: "linear-gradient(135deg,rgba(228, 24, 194, 0.6) 40%,rgba(99, 23, 65, 0.33) 100%)",
      filter: "blur(50px)",
      opacity: 0.6,
      zIndex: 0,
      borderRadius: "51% 49% 61% 39% / 61% 49% 51% 39%",
      animationDelay: ".4s",
    },
    parallaxFactorY: 0.45, // Muito lento (parece mais distante)
    parallaxFactorX: -0.02, // Quase estático horizontalmente
    lerpFactor: 0.2, // Bem responsivo
  },
  {
    style: {
      top: "58%",
      left: "10vw",
      width: "270px",
      height: "180px",
      background: "linear-gradient(120deg,rgba(214, 226, 45, 0.71) 30%,rgba(226, 180, 40, 0.27) 100%)",
      filter: "blur(32px)",
      opacity: 0.5,
      zIndex: 0,
      borderRadius: "71% 29% 59% 41% / 52% 78% 22% 48%",
      animationDelay: ".2s",
    },
    parallaxFactorY: -0.85, // Velocidade intermediária
    parallaxFactorX: 0.03, // Movimento sutil
    lerpFactor: 0.2, // Padrão
  },
];

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const BackgroundShapes: React.FC = () => {
  const refs = useRef<Array<HTMLDivElement | null>>([]);
  const initialLeftPositions = useRef<number[]>([]); // Para guardar as posições left iniciais

  // Guardar as posições left iniciais no primeiro render
  useEffect(() => {
    if (initialLeftPositions.current.length === 0) {
      refs.current.forEach((el, i) => {
        if (el) {
          // Extrai o valor numérico de 'left' de shape.style
          const leftValue = SHAPES[i].style.left as string;
          if (leftValue.endsWith('vw')) {
            initialLeftPositions.current[i] = parseFloat(leftValue) * window.innerWidth / 100;
          } else if (leftValue.endsWith('%')) {
            initialLeftPositions.current[i] = parseFloat(leftValue) * window.innerWidth / 100;
          } else if (leftValue.endsWith('px')) {
            initialLeftPositions.current[i] = parseFloat(leftValue);
          } else {
            // Default para 0 se o formato for desconhecido
            initialLeftPositions.current[i] = 0;
          }
        }
      });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      refs.current.forEach((el, i) => {
        if (!el || initialLeftPositions.current[i] === undefined) return;

        // Fatores de parallax personalizados para Y e X
        const currentShape = SHAPES[i];
        const parallaxFactorY = currentShape.parallaxFactorY !== undefined ? currentShape.parallaxFactorY : ((i + 1) * 0.12);
        const parallaxFactorX = currentShape.parallaxFactorX !== undefined ? currentShape.parallaxFactorX : 0; // Padrão 0 para X se não definido
        const lerpFactor = currentShape.lerpFactor !== undefined ? currentShape.lerpFactor : 0.65; // Padrão 0.65

        // Calcula o novo translateY
        const translateY = lerp(0, y * parallaxFactorY, lerpFactor);

        // Calcula o novo translateX (movimento horizontal baseado no scroll Y)
        const translateX = lerp(0, y * parallaxFactorX, lerpFactor);

        // Aplica a transformação
        el.style.transform = `translateY(${translateY}px) translateX(${translateX}px) scale(1.01)`;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 w-full h-full z-[-1]"
      style={{ overflow: "visible" }}
    >
      {SHAPES.map((shape, idx) => (
        <div
          key={idx}
          ref={el => (refs.current[idx] = el)}
          style={{
            position: "absolute",
            ...shape.style,
            transition: "transform .5s cubic-bezier(.65,.3,.23,.96)", // Mantém a transição suave
            willChange: "transform", // Otimização para animações
            pointerEvents: "none",
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundShapes;