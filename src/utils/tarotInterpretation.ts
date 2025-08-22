import OpenAI from 'openai';
import { TarotCard } from '@/data/enhancedTarotCards';

// Note: In a production app, you should use environment variables for the API key
// For now, we'll create a placeholder that instructs users to add their key
export async function generateTarotInterpretation(
  cards: TarotCard[], 
  drawType: string, 
  userName: string,
  apiKey?: string
): Promise<string> {
  if (!apiKey) {
    // Fallback interpretation when no API key is provided
    return generateFallbackInterpretation(cards, drawType, userName);
  }

  try {
    const openai = new OpenAI({
      apiKey: apiKey,
      dangerouslyAllowBrowser: true // Note: In production, API calls should be made from backend
    });

    const cardNames = cards.map(card => card.name).join(', ');
    const cardMeanings = cards.map(card => 
      `${card.name}: ${card.psychologicalMeaning}`
    ).join('\n');

    const prompt = `Tu es un expert en Tarot de Marseille avec une approche psychologique et thérapeutique. Génère une interprétation personnalisée et structurée en français pour ${userName}.

Cartes tirées: ${cardNames}
Type de tirage: ${drawType}

Significations des cartes:
${cardMeanings}

Structure requise de l'interprétation:
🌟 MESSAGE PRINCIPAL: L'idée forte du tirage (2-3 phrases)
⚖️ POINTS POSITIFS: Forces, opportunités, atouts de la situation (2-3 phrases)
⚠️ POINTS DE VIGILANCE: Risques, excès ou pièges à éviter (2-3 phrases)
❓ QUESTION DE RÉFLEXION: Pistes de réflexion personnelles pour ${userName} (1-2 questions ouvertes)

Consignes:
- Utilise le prénom ${userName} plusieurs fois dans l'interprétation
- Crée un texte fluide et narratif qui connecte toutes les cartes ensemble
- Adopte un ton mystique, poétique et introspectif mais compréhensible
- Évite les clichés de voyance ou les exagérations de diseuse de bonne aventure
- Connecte le symbolisme des cartes au voyage personnel de ${userName}
- L'interprétation ne doit pas être uniquement positive, inclure des points d'attention
- Utilise "tu" pour t'adresser à ${userName}
- Respecte exactement la structure avec les émojis demandés

Commence par "${userName}, ton tirage révèle..." pour le message principal.`;

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'Tu es un expert en Tarot de Marseille avec une approche psychologique et bienveillante. Tu crées des interprétations poétiques et personnalisées en français.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      max_tokens: 300,
      temperature: 0.7
    });

    return response.choices[0]?.message?.content || generateFallbackInterpretation(cards, drawType, userName);
  } catch (error) {
    console.error('Error generating interpretation:', error);
    return generateFallbackInterpretation(cards, drawType, userName);
  }
}

function generateFallbackInterpretation(cards: TarotCard[], drawType: string, userName: string): string {
  const cardNames = cards.map(card => card.name);
  
  if (cards.length === 1) {
    const card = cards[0];
    return `${userName}, ton tirage révèle une invitation profonde à explorer ${card.name.toLowerCase()}. Cette carte t'accompagne dans un moment de transition intérieure, où les symboles ancestraux du Tarot de Marseille éclairent ton chemin. Les énergies de cette arcane suggèrent que tu portes en toi les ressources nécessaires pour naviguer cette période avec sagesse et authenticité. Laisse ton intuition te guider vers la compréhension de ce que cette carte éveille en toi.`;
  }
  
  if (cards.length === 3) {
    return `${userName}, ton tirage passé-présent-futur dessine un magnifique parcours de transformation. ${cardNames[0]} éclaire les fondations sur lesquelles tu t'appuies, tandis que ${cardNames[1]} révèle les énergies qui traversent ton présent. ${cardNames[2]} t'invite à embrasser les possibilités qui s'ouvrent devant toi. Ensemble, ces arcanes tissent une histoire de croissance où chaque étape nourrit la suivante. ${userName}, fais confiance à cette sagesse intérieure qui connaît déjà le chemin.`;
  }
  
  return `${userName}, ton tirage en croix révèle un kaléidoscope d'énergies qui dialoguent entre elles. ${cardNames[0]} pose les fondations de ta réflexion, ${cardNames[1]} t'invite à regarder les défis comme des opportunités de croissance. Les influences du passé et du présent, représentées par ${cardNames[2]} et ${cardNames[3]}, convergent vers ${cardNames[4]}, qui illumine les potentialités qui t'attendent. ${userName}, cette constellation d'arcanes te rappelle que tu es l'architecte de ton propre parcours de découverte.`;
}