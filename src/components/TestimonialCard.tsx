
import React from 'react';
import { cn } from '@/lib/utils';

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
  return (
    <div className="person-card">
      <div className={cn("person-quote", bgColor)}>
        <p className="text-eixo-black">{quote}</p>
      </div>
      
      <div className="person-info">
        <div className="person-avatar">
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover"
          />
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
