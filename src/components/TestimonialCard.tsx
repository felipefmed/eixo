
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
  imageUrl: string;
  bgColor: string;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  name, 
  role, 
  imageUrl, 
  bgColor 
}) => {
  const [imageError, setImageError] = useState(false);
  
  // Extrair iniciais do nome para o fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  // URL de fallback confiável baseada no nome
  const fallbackImageUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&color=fff`;

  return (
    <div className="person-card">
      <div className={cn("person-quote", bgColor)}>
        <p className="text-eixo-black">{quote}</p>
      </div>
      
      <div className="person-info">
        <div className="person-avatar">
          <Avatar className="w-full h-full">
            {!imageError ? (
              <AvatarImage 
                src={imageUrl} 
                alt={name}
                onError={() => setImageError(true)}
              />
            ) : (
              <AvatarImage 
                src={fallbackImageUrl} 
                alt={name}
              />
            )}
            <AvatarFallback className="bg-eixo-purple text-white">
              {getInitials(name)}
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="person-meta">
          <h4 className="font-bold">{name}</h4>
          <p className="text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
