import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { majorArcana, TarotCard as TarotCardType } from "@/data/tarotCards";
import tarotCardBack from "@/assets/tarot-card-back.jpg";

const drawOptions = [
  { count: 1 as const, title: "Tirage à une carte", description: "Une guidance pour l'instant présent" },
  { count: 3 as const, title: "Tirage à trois cartes", description: "Passé • Présent • Futur" },
  { count: 5 as const, title: "Tirage en croix", description: "Une lecture complète de votre situation" },
];

export function ManualCardDraw() {
  const navigate = useNavigate();
  const [selectedDrawType, setSelectedDrawType] = useState<1 | 3 | 5 | null>(null);
  const [shuffledCards, setShuffledCards] = useState<TarotCardType[]>([]);
  const [selectedCards, setSelectedCards] = useState<TarotCardType[]>([]);
  const [revealedCards, setRevealedCards] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    // Shuffle cards when component mounts
    const shuffled = [...majorArcana].sort(() => Math.random() - 0.5);
    setShuffledCards(shuffled);
  }, []);

  const handleDrawTypeSelect = (count: 1 | 3 | 5) => {
    setSelectedDrawType(count);
    setSelectedCards([]);
    setRevealedCards([]);
    setIsCompleted(false);
  };

  const handleCardSelect = (card: TarotCardType) => {
    if (selectedCards.length < (selectedDrawType || 0) && !selectedCards.find(c => c.id === card.id)) {
      const newSelected = [...selectedCards, card];
      setSelectedCards(newSelected);
      
      if (newSelected.length === selectedDrawType) {
        // Auto-reveal all cards after selection
        setTimeout(() => {
          setRevealedCards(Array.from({ length: selectedDrawType }, (_, i) => i));
          setIsCompleted(true);
        }, 500);
      }
    }
  };

  const handleComplete = () => {
    const drawTypeLabels = {
      1: "à une carte",
      3: "à trois cartes", 
      5: "en croix"
    };
    
    navigate('/results', {
      state: {
        cards: selectedCards,
        drawType: drawTypeLabels[selectedDrawType!]
      }
    });
  };

  if (!selectedDrawType) {
    return (
      <div className="min-h-screen bg-gradient-lounge texture-overlay">
        <div className="container max-w-2xl mx-auto py-8 px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-playfair font-bold text-mystical mb-4">
              Choisissez votre tirage
            </h1>
            <p className="text-muted-foreground text-lg">
              Quel type de guidance recherchez-vous aujourd'hui ?
            </p>
          </div>

          <div className="space-y-4">
            {drawOptions.map((option) => (
              <Card 
                key={option.count}
                className="card-premium cursor-pointer transition-all hover:scale-[1.02]"
                onClick={() => handleDrawTypeSelect(option.count)}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-semibold text-mystical mb-2">
                    {option.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {option.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-lounge texture-overlay">
      <div className="container max-w-4xl mx-auto py-8 px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-playfair font-bold text-mystical mb-4">
            Sélectionnez {selectedDrawType} carte{selectedDrawType > 1 ? 's' : ''}
          </h1>
          <p className="text-muted-foreground">
            Laissez votre intuition vous guider • {selectedCards.length}/{selectedDrawType} sélectionnée{selectedCards.length > 1 ? 's' : ''}
          </p>
        </div>

        {/* Selected Cards Display */}
        {selectedCards.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-playfair text-mystical text-center mb-4">
              Vos cartes sélectionnées
            </h2>
            <div className="flex justify-center gap-4 flex-wrap">
              {selectedCards.map((card, index) => (
                <div key={card.id} className="text-center">
                  <Card className="w-32 h-48 overflow-hidden bg-card/80 backdrop-blur-sm border-gold/20">
                    <CardContent className="p-0 h-full">
                      {revealedCards.includes(index) ? (
                        <img 
                          src={card.image} 
                          alt={card.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <img 
                          src={tarotCardBack} 
                          alt="Card back" 
                          className="w-full h-full object-cover"
                        />
                      )}
                    </CardContent>
                  </Card>
                  {revealedCards.includes(index) && (
                    <p className="text-sm text-mystical font-playfair mt-2">
                      {card.name}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Complete Button */}
        {isCompleted && (
          <div className="text-center mb-8">
            <Button 
              onClick={handleComplete}
              className="bg-gradient-mystical hover:opacity-90 text-candlelight px-8 py-3 text-lg font-playfair"
            >
              Découvrir votre lecture complète
            </Button>
          </div>
        )}

        {/* Card Grid */}
        {!isCompleted && (
          <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-11 gap-2">
            {shuffledCards.map((card) => {
              const isSelected = selectedCards.find(c => c.id === card.id);
              return (
                <Card 
                  key={card.id}
                  className={`
                    aspect-[2/3] cursor-pointer transition-all hover:scale-105 
                    ${isSelected ? 'opacity-30 scale-95' : 'opacity-100'}
                    ${selectedCards.length >= selectedDrawType ? 'cursor-not-allowed' : 'cursor-pointer'}
                  `}
                  onClick={() => handleCardSelect(card)}
                >
                  <CardContent className="p-0 h-full overflow-hidden">
                    <img 
                      src={tarotCardBack} 
                      alt="Tarot card back" 
                      className="w-full h-full object-cover"
                    />
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}