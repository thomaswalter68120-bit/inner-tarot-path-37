import { useState } from "react";
import { TarotCard } from "@/data/enhancedTarotCards";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, Sparkles, AlertTriangle, HelpCircle } from "lucide-react";

interface CardDetailsProps {
  card: TarotCard;
}

export function CardDetails({ card }: CardDetailsProps) {
  const [showDeepReading, setShowDeepReading] = useState(false);
  const [showNarrative, setShowNarrative] = useState(false);

  return (
    <Card className="bg-gradient-card border-gold/20 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl text-mystical font-playfair flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-gold" />
            {card.name}
          </CardTitle>
          <Badge variant="secondary" className="bg-mystical/20 text-mystical">
            {card.arcana === 'major' ? 'Arcane Majeur' : 'Arcane Mineur'}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Card Image */}
        <div className="flex justify-center">
          <div className="w-40 h-60 rounded-lg overflow-hidden shadow-card">
            <img 
              src={card.image} 
              alt={card.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Keywords */}
        <div className="flex flex-wrap gap-2 justify-center">
          {card.keywords.map((keyword, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="border-gold/30 text-candlelight bg-gold/10"
            >
              {keyword}
            </Badge>
          ))}
        </div>

        {/* Analysis Structure */}
        <div className="space-y-4">
          {/* Main Message */}
          <div className="bg-mystical/10 rounded-lg p-4 border border-mystical/20">
            <h3 className="text-lg font-semibold text-mystical mb-2 flex items-center gap-2 font-playfair">
              🌟 Message principal
            </h3>
            <p className="text-foreground leading-relaxed">
              {card.shortReading}
            </p>
          </div>

          {/* Positive Points */}
          <div className="bg-emerald-500/10 rounded-lg p-4 border border-emerald-500/20">
            <h3 className="text-lg font-semibold text-emerald-400 mb-2 flex items-center gap-2 font-playfair">
              ⚖️ Points positifs
            </h3>
            <p className="text-foreground leading-relaxed">
              {card.positiveAspects}
            </p>
          </div>

          {/* Vigilance Points */}
          <div className="bg-orange-500/10 rounded-lg p-4 border border-orange-500/20">
            <h3 className="text-lg font-semibold text-orange-400 mb-2 flex items-center gap-2 font-playfair">
              <AlertTriangle className="w-5 h-5" />
              Points de vigilance
            </h3>
            <p className="text-foreground leading-relaxed">
              {card.vigilancePoints}
            </p>
          </div>

          {/* Reflection Question */}
          <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20">
            <h3 className="text-lg font-semibold text-blue-400 mb-2 flex items-center gap-2 font-playfair">
              <HelpCircle className="w-5 h-5" />
              Question de réflexion
            </h3>
            <p className="text-foreground leading-relaxed">
              {card.reflectionQuestion}
            </p>
          </div>
        </div>

        {/* Deep Reading Toggle */}
        <div className="space-y-3">
          <Button
            onClick={() => setShowDeepReading(!showDeepReading)}
            variant="outline"
            className="w-full border-mystical/30 hover:bg-mystical/10 text-mystical font-playfair"
          >
            {showDeepReading ? <ChevronUp className="w-4 h-4 mr-2" /> : <ChevronDown className="w-4 h-4 mr-2" />}
            Interprétation approfondie
          </Button>
          
          {showDeepReading && (
            <div className="bg-card/50 rounded-lg p-4 border border-mystical/20 animate-fade-in">
              <p className="text-muted-foreground leading-relaxed">
                {card.deepReading}
              </p>
            </div>
          )}
        </div>

        {/* Narrative Toggle */}
        <div className="space-y-3">
          <Button
            onClick={() => setShowNarrative(!showNarrative)}
            variant="outline"
            className="w-full border-gold/30 hover:bg-gold/10 text-gold font-playfair"
          >
            {showNarrative ? <ChevronUp className="w-4 h-4 mr-2" /> : <ChevronDown className="w-4 h-4 mr-2" />}
            Histoire & Symbolisme
          </Button>
          
          {showNarrative && (
            <div className="bg-gold/10 rounded-lg p-4 border border-gold/20 animate-fade-in">
              <p className="text-candlelight leading-relaxed font-light">
                {card.narrative}
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}