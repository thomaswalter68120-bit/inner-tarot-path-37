import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-subtle texture-overlay">
      <div className="container max-w-md mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-gradient-mystical rounded-full mx-auto mb-6 flex items-center justify-center shadow-gold">
            <div className="text-4xl">🌙</div>
          </div>
          <h1 className="text-3xl font-playfair font-bold text-mystical mb-3">
            Le Tarot de Marseille
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Un voyage d'introspection et de sagesse intérieure
          </p>
        </div>

        {/* Welcome Card */}
        <Card className="card-premium mb-8 transition-smooth">
          <CardContent className="p-6">
            <h2 className="text-xl font-playfair font-semibold text-mystical mb-4">
              Bienvenue dans votre voyage intérieur
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Découvrez des éclairages à travers la sagesse ancestrale du Tarot de Marseille. 
              Il ne s'agit pas de voyance, mais d'un guide bienveillant pour l'introspection 
              et le développement personnel.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Chaque tirage offre des perspectives psychologiques et des conseils thérapeutiques 
              pour accompagner votre chemin vers la connaissance de soi.
            </p>
          </CardContent>
        </Card>

        {/* Start Reading Button */}
        <Button 
          onClick={() => navigate('/draw')}
          className="w-full h-14 text-lg font-medium bg-gradient-mystical hover:opacity-90 transition-smooth shadow-card"
        >
          Commencer votre tirage
        </Button>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-xs text-muted-foreground/70">
            Prenez un moment pour vous centrer avant de commencer
          </p>
        </div>
      </div>
    </div>
  );
}