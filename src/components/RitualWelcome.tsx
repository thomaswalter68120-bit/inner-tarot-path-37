import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wind, Sparkles } from "lucide-react";

interface RitualWelcomeProps {
  onComplete: () => void;
}

export function RitualWelcome({ onComplete }: RitualWelcomeProps) {
  const [breathStep, setBreathStep] = useState(0);
  const [isBreathing, setIsBreathing] = useState(false);

  const handleBreath = () => {
    setIsBreathing(true);
    
    // Simulate breathing animation
    setTimeout(() => {
      setBreathStep(prev => prev + 1);
      if (breathStep >= 2) {
        setIsBreathing(false);
        setTimeout(onComplete, 1000);
      } else {
        setIsBreathing(false);
      }
    }, 2000);
  };

  const getBreathMessage = () => {
    switch (breathStep) {
      case 0:
        return "Prenez une profonde inspiration et soufflez doucement sur les cartes pour les purifier...";
      case 1:
        return "Encore une fois... Laissez votre énergie se mélanger aux cartes...";
      case 2:
        return "Parfait. Les cartes sont maintenant imprégnées de votre essence...";
      default:
        return "Votre rituel est terminé. Les cartes vous attendent.";
    }
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="bg-gradient-card border-gold/20 backdrop-blur-sm max-w-md w-full">
        <CardHeader>
          <CardTitle className="text-2xl text-mystical font-playfair text-center flex items-center justify-center gap-2">
            <Sparkles className="w-6 h-6 text-gold" />
            Rituel de connexion
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div className="space-y-4">
            <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-mystical flex items-center justify-center transition-all duration-2000 ${
              isBreathing ? 'scale-125 animate-glow' : 'scale-100'
            }`}>
              <Wind className={`w-8 h-8 text-candlelight transition-all duration-2000 ${
                isBreathing ? 'rotate-180' : 'rotate-0'
              }`} />
            </div>
            
            <p className="text-muted-foreground leading-relaxed font-playfair">
              {getBreathMessage()}
            </p>
          </div>

          {breathStep < 3 && (
            <Button
              onClick={handleBreath}
              disabled={isBreathing}
              className="bg-gradient-mystical hover:opacity-90 text-candlelight font-playfair"
            >
              <Wind className="w-4 h-4 mr-2" />
              {isBreathing ? "Souffle en cours..." : "Souffler sur les cartes"}
            </Button>
          )}

          {breathStep >= 3 && (
            <div className="animate-fade-in">
              <p className="text-mystical font-playfair mb-4">
                🌟 Votre connexion avec les cartes est établie
              </p>
              <Button
                onClick={onComplete}
                className="bg-gradient-gold hover:opacity-90 text-primary font-playfair"
              >
                Commencer le tirage
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}