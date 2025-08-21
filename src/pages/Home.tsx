import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-lounge texture-overlay">
      <div className="container max-w-2xl mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-28 h-28 bg-gradient-mystical rounded-full mx-auto mb-8 flex items-center justify-center shadow-candle">
            <div className="text-5xl">☉</div>
          </div>
          <h1 className="text-4xl font-playfair font-bold text-mystical mb-6 leading-tight">
            Le Tarot de Marseille
          </h1>
          <p className="text-2xl font-playfair text-candlelight mb-4 italic">
            Un voyage au cœur des symboles et de l'âme
          </p>
        </div>

        {/* Main Content Card */}
        <Card className="card-premium mb-8 transition-smooth bg-gradient-card border-gold/20">
          <CardContent className="p-8">
            <h2 className="text-2xl font-playfair font-semibold text-mystical mb-6 text-center">
              Entrez dans le cercle des arcanes
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Chaque carte du Tarot de Marseille est une porte ouverte vers un monde ancien de symboles, 
                un miroir de vos forces, de vos doutes et de vos possibles. Plus qu'un tirage, c'est une 
                rencontre avec vous-même, un dialogue silencieux entre l'inconscient et la lumière de votre conscience.
              </p>
              
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent my-6"></div>
              
              <p className="text-lg">
                Laissez les images ancestrales guider votre chemin : elles offrent des clés de compréhension, 
                des invitations à la réflexion et des éclats de sagesse intemporelle. Ici, point de prédictions 
                toutes faites, mais un espace de découverte intérieure, où chaque carte devient un guide, 
                une alliée sur votre route.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Start Reading Button */}
        <Button 
          onClick={() => navigate('/draw')}
          className="w-full h-16 text-xl font-playfair font-medium bg-gradient-mystical hover:opacity-90 transition-smooth shadow-candle text-candlelight"
        >
          Commencer votre tirage
        </Button>

        {/* Footer */}
        <div className="text-center mt-10">
          <p className="text-sm text-candlelight/60 font-playfair italic">
            Prenez un moment pour vous centrer avant de commencer
          </p>
        </div>
      </div>
    </div>
  );
}