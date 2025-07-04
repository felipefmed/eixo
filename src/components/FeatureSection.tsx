import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom'; // Note: Este é 'react-router-dom'
import { AspectRatio } from '@/components/ui/aspect-ratio';

type FeatureSectionProps = {
  title: string;
  description: string;
  imageSrc: string;
  buttonText: string;
  buttonLink: string;
  imagePosition?: 'left' | 'right';
};

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  description,
  imageSrc,
  buttonText,
  buttonLink,
  imagePosition = 'left'
}) => {
  const [imageError, setImageError] = useState(false);

  // Mantenha os fallbacks, mas lembre-se que o problema é no carregamento da imagem original
  const fallbackImages = [
    "https://i0.wp.com/espaferro.com.br/wp-content/uploads/2024/06/placeholder.png?ssl=1",
    "https://i0.wp.com/espaferro.com.br/wp-content/uploads/2024/06/placeholder.png?ssl=1",
    "https://i0.wp.com/espaferro.com.br/wp-content/uploads/2024/06/placeholder.png?ssl=1",
    "https://plus.unsplash.com/premium_photo-1670984940113-f3aa1cd1309a?q=80&w=580&auto=format&fit=crop&fm=png"
  ];

  const getRandomFallbackImage = () => {
    const randomIndex = Math.floor(Math.random() * fallbackImages.length);
    return fallbackImages[randomIndex];
  };

  const getImageSource = () => {
    if (imageError) {
      return getRandomFallbackImage();
    }
    return imageSrc;
  };

  return (
    <div className="section-padding py-16 px-6">
      <div className="container mx-auto">
        <div className={cn(
          "flex flex-col md:flex-row items-center gap-8 md:gap-16",
          imagePosition === 'right' && "md:flex-row-reverse"
        )}>
          <div className="w-full md:w-1/2">
            <div className="rounded-lg overflow-hidden mx-auto max-w-lg">
              <AspectRatio ratio={16 / 9} className="rounded-lg overflow-hidden">
                {/* Corrigido: Usando a tag <img> padrão com classes Tailwind */}
                <img
                  src={getImageSource()}
                  alt={title}
                  className="w-full h-full object-contain" // Classes Tailwind para controle de tamanho e ajuste da imagem
                  onError={() => setImageError(true)}
                />
              </AspectRatio>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 uppercase">{title}</h2>
            <p className="mb-6 text-gray-700">{description}</p>
            {/* Mantido o Link do react-router-dom */}
            <Link to={buttonLink} className="btn btn-yellow">
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;