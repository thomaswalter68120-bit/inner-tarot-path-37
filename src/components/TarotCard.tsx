import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TarotCard as TarotCardType } from "@/data/tarotCards";
import tarotCardBack from "@/assets/tarot-card-back.jpg";

interface TarotCardProps {
  card: TarotCardType;
  isRevealed?: boolean;
  onReveal?: () => void;
  delay?: number;
}

export function TarotCard({ card, isRevealed = false, onReveal, delay = 0 }: TarotCardProps) {
  const [revealed, setRevealed] = useState(isRevealed);

  const handleCardClick = () => {
    if (!revealed && onReveal) {
      setTimeout(() => {
        setRevealed(true);
        onReveal();
      }, delay);
    }
  };

  return (
    <div className="animate-fade-in" style={{ animationDelay: `${delay}ms` }}>
      <Card 
        className={`
          w-48 h-72 cursor-pointer transition-all duration-500 hover:scale-105 
          ${revealed ? 'bg-card shadow-[var(--shadow-card)]' : 'bg-mystical'}
          ${!revealed ? 'animate-card-flip' : ''}
        `}
        onClick={handleCardClick}
      >
        <CardContent className="p-0 h-full relative overflow-hidden">
          {!revealed ? (
            <div className="w-full h-full relative">
              <img 
                src={tarotCardBack} 
                alt="Card back" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-mystical/20 to-mystical/60 flex items-center justify-center">
                <p className="text-gold font-medium text-center px-4">
                  Click to reveal
                </p>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col">
              <div className="w-full h-2/3 overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 h-1/3 flex flex-col justify-center">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-mystical mb-2">{card.name}</h3>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {card.keywords.slice(0, 2).map((keyword, index) => (
                      <span 
                        key={index}
                        className="text-xs bg-gold/20 text-gold px-2 py-1 rounded-full"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}