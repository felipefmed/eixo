
import React, { useEffect, useRef } from "react";

// Paleta de cores orgânicas que combinam com o site
const SHAPES = [
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
    }
  },
  {
    style: {
      top: "65%",
      left: "60vw",
      width: "320px",
      height: "220px",
      background: "linear-gradient(135deg, #5EE2A099 40%, #C3FFE055 100%)",
      filter: "blur(30px)",
      opacity: 0.6,
      zIndex: 0,
      borderRadius: "51% 49% 61% 39% / 61% 49% 51% 39%",
      animationDelay: ".4s",
    }
  },
  {
    style: {
      top: "58%",
      left: "-10vw",
      width: "270px",
      height: "180px",
      background: "linear-gradient(120deg, #FFD87588 30%, #FFF2CC44 100%)",
      filter: "blur(32px)",
      opacity: 0.5,
      zIndex: 0,
      borderRadius: "71% 29% 59% 41% / 52% 78% 22% 48%",
      animationDelay: ".2s",
    }
  },
];

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const BackgroundShapes: React.FC = () => {
  const refs = useRef<Array<HTMLDivElement | null>>([]);

  // Efeito paralax leve no scroll
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      refs.current.forEach((el, i) => {
        if (!el) return;
        const parallax = (i + 1) * 0.12;
        el.style.transform = `translateY(${lerp(0, y * parallax, 0.65)}px) scale(1.01)`;
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
            transition: "transform .5s cubic-bezier(.65,.3,.23,.96)",
            willChange: "transform",
            pointerEvents: "none",
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundShapes;
