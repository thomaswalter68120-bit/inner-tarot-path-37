import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Briefcase, Lightbulb, Flower2 } from "lucide-react";

interface DomainSelectorProps {
  onSelect: (domain: string) => void;
  selectedDomain?: string;
}

const domains = [
  {
    id: "amour",
    name: "Amour & Relations",
    icon: Heart,
    description: "Relations amoureuses, famille, amitiés",
    color: "rose"
  },
  {
    id: "carriere",
    name: "Carrière & Finances",
    icon: Briefcase,
    description: "Travail, projets professionnels, argent",
    color: "emerald"
  },
  {
    id: "projets",
    name: "Projets & Créativité",
    icon: Lightbulb,
    description: "Nouveaux projets, créativité, apprentissage",
    color: "blue"
  },
  {
    id: "bienetre",
    name: "Bien-être & Spiritualité",
    icon: Flower2,
    description: "Santé, équilibre, développement personnel",
    color: "purple"
  }
];

export function DomainSelector({ onSelect, selectedDomain }: DomainSelectorProps) {
  return (
    <Card className="bg-gradient-card border-mystical/20 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-xl text-mystical font-playfair text-center">
          Choisissez votre domaine de consultation
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {domains.map((domain) => {
            const Icon = domain.icon;
            const isSelected = selectedDomain === domain.id;
            
            return (
              <Button
                key={domain.id}
                onClick={() => onSelect(domain.id)}
                variant={isSelected ? "default" : "outline"}
                className={`h-auto p-4 flex flex-col gap-2 text-left ${
                  isSelected 
                    ? "bg-mystical text-primary-foreground" 
                    : "border-mystical/30 hover:bg-mystical/10"
                }`}
              >
                <div className="flex items-center gap-2 w-full">
                  <Icon className={`w-5 h-5 ${isSelected ? "text-candlelight" : "text-mystical"}`} />
                  <span className={`font-semibold font-playfair ${isSelected ? "text-candlelight" : "text-mystical"}`}>
                    {domain.name}
                  </span>
                </div>
                <p className={`text-sm ${isSelected ? "text-candlelight/80" : "text-muted-foreground"}`}>
                  {domain.description}
                </p>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}