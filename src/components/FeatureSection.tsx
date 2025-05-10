
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { motion, AnimatePresence } from 'framer-motion';

type FeatureSectionProps = {
  title: string;
  description: string;
  imageSrc: string;
  buttonText: string;
  buttonLink: string;
  imagePosition?: 'left' | 'right';
  isAnimated?: boolean;
};

const FeatureSection: React.FC<FeatureSectionProps> = ({ 
  title, 
  description, 
  imageSrc, 
  buttonText, 
  buttonLink,
  imagePosition = 'left',
  isAnimated = false
}) => {
  const [imageError, setImageError] = useState(false);
  
  // Múltiplas opções de imagens de fallback para maior confiabilidade (usando PNGs)
  const fallbackImages = [
    "https://i0.wp.com/espaferro.com.br/wp-content/uploads/2024/06/placeholder.png?ssl=1",
    "https://i0.wp.com/espaferro.com.br/wp-content/uploads/2024/06/placeholder.png?ssl=1",
    "https://i0.wp.com/espaferro.com.br/wp-content/uploads/2024/06/placeholder.png?ssl=1",
    "https://plus.unsplash.com/premium-photo-1670984940113-f3aa1cd1309a?q=80&w=580&auto=format&fit=crop&fm=png"
  ];
  
  // Escolher uma imagem de fallback aleatória para variedade
  const getRandomFallbackImage = () => {
    const randomIndex = Math.floor(Math.random() * fallbackImages.length);
    return fallbackImages[randomIndex];
  };
  
  // Use the original image if it's a PNG, otherwise use a fallback
  const getImageSource = () => {
    if (imageError) {
      return getRandomFallbackImage();
    }
    
    return imageSrc;
  };

  const imageVariants = {
    initial: { 
      x: imagePosition === 'left' ? -100 : 100, 
      y: 20, 
      opacity: 0,
      rotateY: imagePosition === 'left' ? -10 : 10
    },
    animate: { 
      x: 0, 
      y: 0, 
      opacity: 1,
      rotateY: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15,
        duration: 0.8
      }
    },
    exit: { 
      x: imagePosition === 'left' ? -100 : 100, 
      y: -20, 
      opacity: 0,
      rotateY: imagePosition === 'left' ? 10 : -10,
      transition: { duration: 0.5 }
    }
  };

  const contentVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: 0.2,
        duration: 0.6 
      }
    },
    exit: { opacity: 0, y: -30, transition: { duration: 0.4 } }
  };
  
  return (
    <div className="section-padding py-16 px-6">
      <div className="container mx-auto">
        <div className={cn(
          "flex flex-col md:flex-row items-center gap-8 md:gap-16",
          imagePosition === 'right' && "md:flex-row-reverse"
        )}>
          <div className="w-full md:w-1/2">
            {isAnimated ? (
              <AnimatePresence>
                <motion.div 
                  key={title}
                  className="rounded-lg overflow-hidden mx-auto max-w-lg"
                  variants={imageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg overflow-hidden">
                    <img 
                      src={getImageSource()}
                      alt={title}
                      className="w-full h-full object-cover"
                      onError={() => setImageError(true)}
                    />
                  </AspectRatio>
                </motion.div>
              </AnimatePresence>
            ) : (
              <div className="rounded-lg overflow-hidden mx-auto max-w-lg">
                <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg overflow-hidden">
                  <img 
                    src={getImageSource()}
                    alt={title}
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                </AspectRatio>
              </div>
            )}
          </div>
          
          <div className="w-full md:w-1/2">
            {isAnimated ? (
              <AnimatePresence>
                <motion.div
                  key={title}
                  variants={contentVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 uppercase">{title}</h2>
                  <p className="mb-6 text-gray-700">{description}</p>
                  <Link to={buttonLink} className="btn btn-yellow hover:bg-eixo-yellow hover:scale-105 transition-all">
                    {buttonText}
                  </Link>
                </motion.div>
              </AnimatePresence>
            ) : (
              <>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 uppercase">{title}</h2>
                <p className="mb-6 text-gray-700">{description}</p>
                <Link to={buttonLink} className="btn btn-yellow hover:bg-eixo-yellow hover:scale-105 transition-all">
                  {buttonText}
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
