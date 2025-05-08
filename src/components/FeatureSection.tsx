
import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

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
  return (
    <div className="section-padding">
      <div className={cn(
        "flex flex-col md:flex-row items-center gap-8 md:gap-16",
        imagePosition === 'right' && "md:flex-row-reverse"
      )}>
        <div className="w-full md:w-1/2">
          <img 
            src={imageSrc}
            alt={title}
            className="w-full h-auto max-w-md mx-auto"
          />
        </div>
        
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 uppercase">{title}</h2>
          <p className="mb-6 text-gray-700">{description}</p>
          <Link to={buttonLink} className="btn btn-yellow">
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
