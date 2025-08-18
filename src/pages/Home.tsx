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
            The Marseille Tarot
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A journey of self-reflection and inner wisdom
          </p>
        </div>

        {/* Welcome Card */}
        <Card className="card-premium mb-8 transition-smooth">
          <CardContent className="p-6">
            <h2 className="text-xl font-playfair font-semibold text-mystical mb-4">
              Welcome to Your Inner Journey
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Discover insights through the ancient wisdom of the Marseille Tarot. 
              This is not fortune-telling, but a gentle guide for self-reflection 
              and personal growth.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Each reading offers psychological insights and therapeutic guidance 
              to support your journey of self-understanding.
            </p>
          </CardContent>
        </Card>

        {/* Start Reading Button */}
        <Button 
          onClick={() => navigate('/draw')}
          className="w-full h-14 text-lg font-medium bg-gradient-mystical hover:opacity-90 transition-smooth shadow-card"
        >
          Begin Your Reading
        </Button>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-xs text-muted-foreground/70">
            Take a moment to center yourself before you begin
          </p>
        </div>
      </div>
    </div>
  );
}