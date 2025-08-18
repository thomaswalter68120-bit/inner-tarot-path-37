import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CardDraw } from "@/components/CardDraw";
import { Journal } from "@/components/Journal";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const Index = () => {
  const [activeTab, setActiveTab] = useState("draw");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div 
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-mystical/70 via-mystical/50 to-background"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
              Tarot de Marseille
            </h1>
            <p className="text-xl md:text-2xl text-gold-light mb-6">
              Psychological Insights for Personal Growth
            </p>
            <p className="text-lg text-primary-foreground/90 max-w-xl mx-auto mb-8">
              Discover deeper understanding of yourself through the ancient wisdom of tarot, 
              interpreted through the lens of psychology and self-development.
            </p>
            <Button 
              onClick={() => setActiveTab("draw")}
              className="bg-gold hover:bg-gold-light text-mystical font-semibold px-8 py-3 text-lg"
            >
              Begin Your Reading
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-card/50 border border-mystical/20">
            <TabsTrigger 
              value="draw" 
              className="data-[state=active]:bg-mystical data-[state=active]:text-primary-foreground"
            >
              Card Reading
            </TabsTrigger>
            <TabsTrigger 
              value="journal"
              className="data-[state=active]:bg-mystical data-[state=active]:text-primary-foreground"
            >
              Personal Journal
            </TabsTrigger>
          </TabsList>

          <TabsContent value="draw" className="space-y-6">
            <CardDraw />
          </TabsContent>

          <TabsContent value="journal" className="space-y-6">
            <Journal />
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-mystical/5 border-t border-mystical/20 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            A tool for self-reflection and personal growth through psychological tarot interpretation.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Remember: You are the author of your own story.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;