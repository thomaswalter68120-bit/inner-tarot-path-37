import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TarotCard } from "./TarotCard";
import { getRandomCards, TarotCard as TarotCardType } from "@/data/tarotCards";

const drawOptions = [
  { count: 1 as const, title: "Single Card", description: "Focus on your current situation" },
  { count: 3 as const, title: "Three Cards", description: "Past, Present, Future insight" },
  { count: 5 as const, title: "Five Cards", description: "Comprehensive life guidance" }
];

export function CardDraw() {
  const [drawnCards, setDrawnCards] = useState<TarotCardType[]>([]);
  const [revealedCards, setRevealedCards] = useState<number[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);

  const drawCards = async (count: 1 | 3 | 5) => {
    setIsDrawing(true);
    setRevealedCards([]);
    
    // Simulate card shuffling delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const cards = getRandomCards(count);
    setDrawnCards(cards);
    setIsDrawing(false);
  };

  const revealCard = (index: number) => {
    setRevealedCards(prev => [...prev, index]);
  };

  return (
    <div className="space-y-8">
      <Card className="bg-card/50 backdrop-blur-sm border-mystical/20">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-mystical">Choose Your Draw</CardTitle>
          <p className="text-muted-foreground">
            Select the number of cards for your psychological insight session
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {drawOptions.map((option) => (
              <Button
                key={option.count}
                variant="outline"
                className="h-24 flex-col space-y-2 border-mystical/30 hover:bg-mystical/10 hover:border-mystical/50"
                onClick={() => drawCards(option.count)}
                disabled={isDrawing}
              >
                <span className="text-lg font-semibold text-mystical">{option.title}</span>
                <span className="text-sm text-muted-foreground">{option.description}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {isDrawing && (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-mystical mb-4"></div>
          <p className="text-mystical">Shuffling the cards...</p>
        </div>
      )}

      {drawnCards.length > 0 && !isDrawing && (
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-mystical mb-2">Your Reading</h3>
            <p className="text-muted-foreground">
              Click each card to reveal its psychological meaning
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {drawnCards.map((card, index) => (
              <TarotCard
                key={`${card.id}-${index}`}
                card={card}
                isRevealed={revealedCards.includes(index)}
                onReveal={() => revealCard(index)}
                delay={index * 200}
              />
            ))}
          </div>

          {drawnCards.length === 3 && revealedCards.length > 0 && (
            <div className="text-center space-y-2">
              <div className="flex justify-center gap-8 text-sm text-muted-foreground">
                <span>Past</span>
                <span>Present</span>
                <span>Future</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}