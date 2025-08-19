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
        ? ["Passé", "Présent", "Futur"][index]
        : cards.length === 5 
        ? ["Fondation", "Défi", "Passé Lointain", "Passé Récent", "Résultat"][index]
        : "Votre Carte";
      
      return `${position}: ${card.name}
${card.uprightMeaning}

Éclairage Psychologique: ${card.psychologicalMeaning}

Développement Personnel: ${card.personalGrowth}`;
    }).join('\n\n---\n\n');

    const overallInsight = cards.length === 1 
      ? cards[0].therapeuticInsight
      : `Votre tirage ${drawType} révèle un magnifique parcours de croissance et de découverte de soi. Chaque carte parle à différents aspects de votre expérience actuelle, offrant des conseils bienveillants pour votre chemin à venir. Faites confiance à votre sagesse intérieure et rappelez-vous que chaque expérience - qu'elle soit difficile ou joyeuse - contribue à votre évolution. Vous avez toutes les ressources en vous pour naviguer ce voyage avec grâce et authenticité.`;

    return `LE TAROT DE MARSEILLE - Votre tirage ${drawType}

${cardDescriptions}

---

Réflexion Thérapeutique:
${overallInsight}

Rappel: Cette lecture est un miroir de votre sagesse intérieure. Faites confiance à ce qui résonne et utilisez ces éclairages comme une guidance bienveillante sur votre chemin de découverte de soi et de croissance.`;
  };

  const handleShare = async () => {
    setIsSharing(true);
    const readingText = generateReading();
    
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Mon tirage de Tarot',
          text: readingText,
        });
      } else {
        await navigator.clipboard.writeText(readingText);
        toast.success("Lecture copiée dans le presse-papiers !");
      }
    } catch (error) {
      console.error('Error sharing:', error);
      toast.error("Impossible de partager la lecture");
    } finally {
      setIsSharing(false);
    }
  };

  const getPositionLabel = (index: number) => {
    if (cards.length === 3) {
      return ["Passé", "Présent", "Futur"][index];
    } else if (cards.length === 5) {
      return ["Fondation", "Défi", "Passé Lointain", "Passé Récent", "Résultat"][index];
    }
    return "";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/20 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-mystical">Votre tirage</h1>
          <p className="text-muted-foreground">
            {drawType} • {new Date().toLocaleDateString('fr-FR')}
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
                  <h4 className="font-semibold text-mystical mb-2">Signification de la carte</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {card.uprightMeaning}
                  </p>
                </div>
                
                <Separator className="bg-mystical/20" />
                
                <div>
                  <h4 className="font-semibold text-mystical mb-2">Éclairage psychologique</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {card.psychologicalMeaning}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-mystical mb-2">Développement personnel</h4>
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
              Réflexion thérapeutique
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed text-center">
              {cards.length === 1 
                ? cards[0].therapeuticInsight
                : `Votre tirage ${drawType} révèle un magnifique parcours de croissance et de découverte de soi. Chaque carte parle à différents aspects de votre expérience actuelle, offrant des conseils bienveillants pour votre chemin à venir. Faites confiance à votre sagesse intérieure et rappelez-vous que chaque expérience - qu'elle soit difficile ou joyeuse - contribue à votre évolution. Vous avez toutes les ressources en vous pour naviguer ce voyage avec grâce et authenticité.`
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
            {isSharing ? "Partage..." : "Partager le tirage"}
          </Button>
          
          <Button
            onClick={() => navigate('/draw')}
            variant="outline"
            className="border-mystical/30 hover:bg-mystical/10"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Nouveau tirage
          </Button>
          
          <Button
            onClick={() => navigate('/')}
            variant="outline"
            className="border-mystical/30 hover:bg-mystical/10"
          >
            <Home className="w-4 h-4 mr-2" />
            Accueil
          </Button>
        </div>
      </div>
    </div>
  );
}