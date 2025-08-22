import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Share2, Home, RotateCcw, Sparkles } from "lucide-react";
import { TarotCard as TarotCardType } from "@/data/enhancedTarotCards";
import { generateTarotInterpretation } from "@/utils/tarotInterpretation";
import { toast } from "sonner";

interface ResultsState {
  cards: TarotCardType[];
  drawType: string;
  userName: string;
}

export function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSharing, setIsSharing] = useState(false);
  const [interpretation, setInterpretation] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [showApiKeyInput, setShowApiKeyInput] = useState(false);
  
  const state = location.state as ResultsState;
  
  useEffect(() => {
    if (!state?.cards || !state?.userName) {
      navigate('/draw');
      return;
    }
    
    // Generate interpretation automatically
    generateInterpretation();
  }, [state, navigate]);

  const generateInterpretation = async (customApiKey?: string) => {
    if (!state?.cards || !state?.userName) return;
    
    setIsGenerating(true);
    try {
      const result = await generateTarotInterpretation(
        state.cards, 
        state.drawType, 
        state.userName,
        customApiKey || apiKey
      );
      setInterpretation(result);
    } catch (error) {
      console.error('Error generating interpretation:', error);
      toast.error("Erreur lors de la génération de l'interprétation");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleApiKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey.trim()) {
      setShowApiKeyInput(false);
      generateInterpretation(apiKey);
    }
  };

  if (!state?.cards || !state?.userName) {
    return null;
  }

  const { cards, drawType, userName } = state;

  const generateReading = () => {
    return `LE TAROT DE MARSEILLE - Tirage personnalisé pour ${userName}

Tirage: ${drawType}
Date: ${new Date().toLocaleDateString('fr-FR')}
Cartes: ${cards.map(card => card.name).join(', ')}

---

INTERPRÉTATION PERSONNALISÉE:

${interpretation}

---

Rappel: Cette lecture est un miroir de votre sagesse intérieure, ${userName}. Faites confiance à ce qui résonne et utilisez ces éclairages comme une guidance bienveillante sur votre chemin de découverte de soi et de croissance.`;
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
    <div className="min-h-screen bg-gradient-lounge p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-playfair font-bold text-mystical">
            Votre tirage, {userName}
          </h1>
          <p className="text-candlelight/80">
            {drawType} • {new Date().toLocaleDateString('fr-FR')}
          </p>
        </div>

        {/* Cards Overview */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {cards.map((card, index) => (
            <div key={card.id} className="text-center">
              <div className="w-24 h-36 rounded-lg overflow-hidden mb-2 shadow-card">
                <img 
                  src={card.image} 
                  alt={card.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {cards.length > 1 && (
                <p className="text-xs text-candlelight/70 font-playfair font-medium">
                  {getPositionLabel(index)}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* AI-Generated Interpretation */}
        <Card className="bg-gradient-card border-gold/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-mystical text-center font-playfair flex items-center justify-center gap-2">
              <Sparkles className="w-6 h-6 text-gold" />
              Votre interprétation personnalisée
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {isGenerating ? (
              <div className="text-center py-8">
                <div className="animate-spin w-8 h-8 border-2 border-gold border-t-transparent rounded-full mx-auto mb-4"></div>
                <p className="text-muted-foreground font-playfair">
                  Génération de votre interprétation personnalisée...
                </p>
              </div>
            ) : interpretation ? (
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed text-lg font-light">
                  {interpretation}
                </p>
              </div>
            ) : (
              <div className="text-center py-6">
                <p className="text-muted-foreground mb-4 font-playfair">
                  Pour une interprétation personnalisée générée par IA, ajoutez votre clé API OpenAI
                </p>
                <Button
                  onClick={() => setShowApiKeyInput(true)}
                  variant="outline"
                  className="border-gold/30 hover:bg-gold/10 text-mystical font-playfair"
                >
                  Ajouter clé API pour interprétation IA
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* API Key Input */}
        {showApiKeyInput && (
          <Card className="bg-gradient-card border-gold/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg text-mystical font-playfair">
                Clé API OpenAI
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleApiKeySubmit} className="space-y-4">
                <div>
                  <Label htmlFor="apiKey" className="text-mystical font-playfair">
                    Votre clé API OpenAI
                  </Label>
                  <Input
                    id="apiKey"
                    type="password"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="sk-..."
                    className="mt-2 bg-card/50 border-gold/30 focus:border-gold text-mystical"
                    required
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Votre clé ne sera pas stockée et reste privée
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button 
                    type="submit"
                    className="bg-gradient-mystical hover:opacity-90 text-candlelight font-playfair"
                  >
                    Générer l'interprétation
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowApiKeyInput(false)}
                    className="border-gold/30 hover:bg-gold/10 text-mystical font-playfair"
                  >
                    Annuler
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleShare}
            disabled={isSharing}
            className="bg-gradient-mystical hover:opacity-90 text-candlelight font-playfair"
          >
            <Share2 className="w-4 h-4 mr-2" />
            {isSharing ? "Partage..." : "Partager le tirage"}
          </Button>
          
          <Button
            onClick={() => navigate('/draw')}
            variant="outline"
            className="border-gold/30 hover:bg-gold/10 text-mystical font-playfair"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Nouveau tirage
          </Button>
          
          <Button
            onClick={() => navigate('/')}
            variant="outline"
            className="border-gold/30 hover:bg-gold/10 text-mystical font-playfair"
          >
            <Home className="w-4 h-4 mr-2" />
            Accueil
          </Button>
        </div>
      </div>
    </div>
  );
}