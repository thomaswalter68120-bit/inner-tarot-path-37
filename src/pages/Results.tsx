import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Share2, Home, RotateCcw } from "lucide-react";
import { TarotCard as TarotCardType } from "@/data/tarotCards";
import { toast } from "sonner";

interface ResultsState {
  cards: TarotCardType[];
  drawType: string;
}

export function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSharing, setIsSharing] = useState(false);
  
  const state = location.state as ResultsState;
  
  useEffect(() => {
    if (!state?.cards) {
      navigate('/draw');
    }
  }, [state, navigate]);

  if (!state?.cards) {
    return null;
  }

  const { cards, drawType } = state;

  const generateReading = () => {
    const cardDescriptions = cards.map((card, index) => {
      const position = cards.length === 3 
        ? ["Past", "Present", "Future"][index]
        : cards.length === 5 
        ? ["Foundation", "Challenge", "Distant Past", "Recent Past", "Outcome"][index]
        : "Your Card";
      
      return `${position}: ${card.name}
${card.uprightMeaning}

Psychological Insight: ${card.psychologicalMeaning}

Personal Growth: ${card.personalGrowth}`;
    }).join('\n\n---\n\n');

    const overallInsight = cards.length === 1 
      ? cards[0].therapeuticInsight
      : `Your ${drawType} reading reveals a beautiful journey of growth and self-discovery. Each card speaks to different aspects of your current experience, offering gentle guidance for your path forward. Trust in your inner wisdom and remember that every experience - whether challenging or joyful - contributes to your evolution. You have all the resources within you to navigate this journey with grace and authenticity.`;

    return `THE MARSEILLE TAROT - Your ${drawType} Reading

${cardDescriptions}

---

Therapeutic Reflection:
${overallInsight}

Remember: This reading is a mirror for your inner wisdom. Trust what resonates and use these insights as gentle guidance on your journey of self-discovery and growth.`;
  };

  const handleShare = async () => {
    setIsSharing(true);
    const readingText = generateReading();
    
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'My Tarot Reading',
          text: readingText,
        });
      } else {
        await navigator.clipboard.writeText(readingText);
        toast.success("Reading copied to clipboard!");
      }
    } catch (error) {
      console.error('Error sharing:', error);
      toast.error("Could not share reading");
    } finally {
      setIsSharing(false);
    }
  };

  const getPositionLabel = (index: number) => {
    if (cards.length === 3) {
      return ["Past", "Present", "Future"][index];
    } else if (cards.length === 5) {
      return ["Foundation", "Challenge", "Distant Past", "Recent Past", "Outcome"][index];
    }
    return "";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/20 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-mystical">Your Reading</h1>
          <p className="text-muted-foreground">
            {drawType} • {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Cards Overview */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {cards.map((card, index) => (
            <div key={card.id} className="text-center">
              <div className="w-20 h-28 bg-mystical/20 rounded-lg mb-2 flex items-center justify-center">
                <span className="text-2xl">{card.name.charAt(0)}</span>
              </div>
              {cards.length > 1 && (
                <p className="text-xs text-muted-foreground font-medium">
                  {getPositionLabel(index)}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Detailed Reading */}
        <div className="space-y-6">
          {cards.map((card, index) => (
            <Card key={card.id} className="bg-card/80 backdrop-blur-sm border-mystical/20">
              <CardHeader>
                <CardTitle className="text-xl text-mystical flex items-center gap-2">
                  {cards.length > 1 && (
                    <span className="text-sm bg-mystical/20 text-mystical px-2 py-1 rounded-full">
                      {getPositionLabel(index)}
                    </span>
                  )}
                  {card.name}
                </CardTitle>
                <div className="flex flex-wrap gap-1">
                  {card.keywords.slice(0, 4).map((keyword, idx) => (
                    <span key={idx} className="text-xs bg-gold/20 text-gold px-2 py-1 rounded-full">
                      {keyword}
                    </span>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-mystical mb-2">Card Meaning</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {card.uprightMeaning}
                  </p>
                </div>
                
                <Separator className="bg-mystical/20" />
                
                <div>
                  <h4 className="font-semibold text-mystical mb-2">Psychological Insight</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {card.psychologicalMeaning}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-mystical mb-2">Personal Growth</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {card.personalGrowth}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall Insight */}
        <Card className="bg-gradient-to-r from-mystical/10 via-accent/10 to-gold/10 border-mystical/30">
          <CardHeader>
            <CardTitle className="text-xl text-mystical text-center">
              Therapeutic Reflection
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed text-center">
              {cards.length === 1 
                ? cards[0].therapeuticInsight
                : `Your ${drawType} reading reveals a beautiful journey of growth and self-discovery. Each card speaks to different aspects of your current experience, offering gentle guidance for your path forward. Trust in your inner wisdom and remember that every experience - whether challenging or joyful - contributes to your evolution. You have all the resources within you to navigate this journey with grace and authenticity.`
              }
            </p>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleShare}
            disabled={isSharing}
            className="bg-mystical hover:bg-mystical/90 text-white"
          >
            <Share2 className="w-4 h-4 mr-2" />
            {isSharing ? "Sharing..." : "Share Reading"}
          </Button>
          
          <Button
            onClick={() => navigate('/draw')}
            variant="outline"
            className="border-mystical/30 hover:bg-mystical/10"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            New Reading
          </Button>
          
          <Button
            onClick={() => navigate('/')}
            variant="outline"
            className="border-mystical/30 hover:bg-mystical/10"
          >
            <Home className="w-4 h-4 mr-2" />
            Home
          </Button>
        </div>
      </div>
    </div>
  );
}