import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

type TestimonialCardProps = {
  id: string;
  quote: string;
  name: string;
  role: string;
  imageUrl: string;
  bgColor: string;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  id,
  quote, 
  name, 
  role, 
  imageUrl, 
  bgColor 
}) => {
  const [imageError, setImageError] = useState(false);
  
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  const fallbackImageUrl = imageUrl.endsWith('.svg') 
    ? `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&color=fff&format=png`
    : imageUrl;

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
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&color=fff&format=png`}
                alt={name}
              />
            )}
            <AvatarFallback className="bg-eixo-purple text-white">
              {getInitials(name)}
            </AvatarFallback>
          </Avatar>
        </div>
        
        <div className="person-meta flex flex-col items-start">
          <h4 className="font-bold">{name}</h4>
          <p className="text-gray-600">{role}</p>
          <Link to={`/historias/${id}`} className="mt-2 group">
            <Button 
              variant="ghost" 
              size="sm" 
              className={cn(
                "p-0 h-auto hover:bg-transparent",
                bgColor.replace('bg-', 'text-'), // Converte 'bg-cor' para 'text-cor'
                `hover:${bgColor.replace('bg-', 'text-')}/80` // Hover um pouco mais escuro da mesma cor
              )}
            >
              Conheça mais <ArrowRight size={14} className="ml-1" />
            </Button>
            {/* Opcional: Se desejar a linha animada, descomente a linha abaixo e ajuste conforme necessário */}
            {/* <div className={cn("h-0.5 mt-0.5", bgColor, "w-0 group-hover:w-full transition-all duration-300")}></div> */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;