export interface TarotCard {
  id: number;
  name: string;
  arcana: 'major' | 'minor';
  suit?: 'cups' | 'wands' | 'swords' | 'pentacles';
  psychologicalMeaning: string;
  keywords: string[];
  personalGrowth: string;
}

export const majorArcana: TarotCard[] = [
  {
    id: 0,
    name: "The Fool",
    arcana: "major",
    psychologicalMeaning: "Represents new beginnings, innocence, and the courage to embark on life's journey. Psychologically, it symbolizes your willingness to take risks and embrace the unknown aspects of yourself.",
    keywords: ["New beginnings", "Spontaneity", "Innocent trust", "Adventure"],
    personalGrowth: "Trust your instincts and be open to new experiences. This is a time for authentic self-expression and embracing your true nature."
  },
  {
    id: 1,
    name: "The Magician",
    arcana: "major",
    psychologicalMeaning: "Symbolizes personal power, manifestation, and the ability to transform thoughts into reality. It represents your capacity to channel your will and resources effectively.",
    keywords: ["Personal power", "Focus", "Manifestation", "Skill"],
    personalGrowth: "You have all the tools you need within you. Focus your energy and intentions to create the change you wish to see in your life."
  },
  {
    id: 2,
    name: "The High Priestess",
    arcana: "major",
    psychologicalMeaning: "Represents intuition, inner wisdom, and the unconscious mind. She encourages you to listen to your inner voice and trust your psychic abilities.",
    keywords: ["Intuition", "Inner wisdom", "Mystery", "Subconscious"],
    personalGrowth: "Take time for introspection and meditation. Your answers lie within, not in external validation or advice."
  },
  {
    id: 3,
    name: "The Empress",
    arcana: "major",
    psychologicalMeaning: "Embodies nurturing, creativity, and abundance. Psychologically, it represents your connection to the feminine principle and your capacity for care and creation.",
    keywords: ["Nurturing", "Creativity", "Abundance", "Fertility"],
    personalGrowth: "Embrace your creative side and nurture yourself and others. Allow your natural abundance and generosity to flow freely."
  },
  {
    id: 4,
    name: "The Emperor",
    arcana: "major",
    psychologicalMeaning: "Represents authority, structure, and the masculine principle. It signifies your ability to create order and take responsibility for your life.",
    keywords: ["Authority", "Structure", "Leadership", "Stability"],
    personalGrowth: "Take charge of your life with confidence. Create healthy boundaries and structures that support your goals and well-being."
  },
  {
    id: 5,
    name: "The Hierophant",
    arcana: "major",
    psychologicalMeaning: "Symbolizes tradition, spiritual guidance, and learning from established wisdom. It represents your relationship with mentors and traditional values.",
    keywords: ["Tradition", "Spiritual guidance", "Conformity", "Education"],
    personalGrowth: "Seek wisdom from teachers and established traditions, but remember to integrate this knowledge in your own unique way."
  },
  {
    id: 6,
    name: "The Lovers",
    arcana: "major",
    psychologicalMeaning: "Represents choices, relationships, and the integration of opposites within yourself. It's about finding harmony between different aspects of your personality.",
    keywords: ["Choices", "Harmony", "Relationships", "Integration"],
    personalGrowth: "Make choices that align with your values. Seek balance between different aspects of yourself and your relationships."
  },
  {
    id: 7,
    name: "The Chariot",
    arcana: "major",
    psychologicalMeaning: "Symbolizes willpower, determination, and the ability to overcome obstacles through focus and self-discipline. It represents mastery over conflicting forces.",
    keywords: ["Willpower", "Determination", "Control", "Victory"],
    personalGrowth: "Harness your inner strength and determination. Stay focused on your goals despite obstacles and conflicting desires."
  },
  {
    id: 8,
    name: "Strength",
    arcana: "major",
    psychologicalMeaning: "Represents inner strength, courage, and the power of gentleness over force. It symbolizes mastery over your instincts and emotions through compassion.",
    keywords: ["Inner strength", "Courage", "Compassion", "Self-control"],
    personalGrowth: "Face challenges with courage and compassion. Your true strength lies in gentleness and understanding, not in force or aggression."
  },
  {
    id: 9,
    name: "The Hermit",
    arcana: "major",
    psychologicalMeaning: "Symbolizes introspection, soul searching, and seeking inner truth. It represents a period of self-reflection and spiritual seeking.",
    keywords: ["Introspection", "Inner guidance", "Solitude", "Wisdom"],
    personalGrowth: "Take time for solitude and self-reflection. The answers you seek can only be found through honest self-examination and inner work."
  },
  {
    id: 10,
    name: "Wheel of Fortune",
    arcana: "major",
    psychologicalMeaning: "Represents cycles, change, and the understanding that life has natural ups and downs. It encourages acceptance of life's inevitable changes.",
    keywords: ["Cycles", "Change", "Destiny", "Acceptance"],
    personalGrowth: "Embrace change as a natural part of life. What goes down will come up again. Focus on what you can control and accept what you cannot."
  },
  {
    id: 11,
    name: "Justice",
    arcana: "major",
    psychologicalMeaning: "Represents fairness, truth, and the law of cause and effect. It symbolizes taking responsibility for your actions and seeking balance in all things.",
    keywords: ["Fairness", "Truth", "Balance", "Accountability"],
    personalGrowth: "Take responsibility for your actions and their consequences. Seek truth and fairness in your dealings with others and yourself."
  },
  {
    id: 12,
    name: "The Hanged Man",
    arcana: "major",
    psychologicalMeaning: "Represents surrender, new perspectives, and the wisdom found in stillness. It suggests letting go of control to gain new insights.",
    keywords: ["Surrender", "New perspective", "Sacrifice", "Enlightenment"],
    personalGrowth: "Sometimes progress requires letting go and seeing things from a new angle. Surrender control and allow new perspectives to emerge."
  },
  {
    id: 13,
    name: "Death",
    arcana: "major",
    psychologicalMeaning: "Symbolizes transformation, endings, and new beginnings. It represents the psychological process of letting go of what no longer serves you.",
    keywords: ["Transformation", "Endings", "Renewal", "Release"],
    personalGrowth: "Embrace necessary endings in your life. What needs to die within you so that something new can be born? Transformation requires release."
  },
  {
    id: 14,
    name: "Temperance",
    arcana: "major",
    psychologicalMeaning: "Represents moderation, patience, and the art of blending opposites. It symbolizes finding middle ground and healing through integration.",
    keywords: ["Moderation", "Patience", "Balance", "Healing"],
    personalGrowth: "Practice patience and moderation. Healing comes through finding balance and integrating all aspects of yourself harmoniously."
  },
  {
    id: 15,
    name: "The Devil",
    arcana: "major",
    psychologicalMeaning: "Represents bondage, temptation, and the shadow aspects of personality. It highlights areas where you may feel trapped by your own choices or addictions.",
    keywords: ["Bondage", "Shadow", "Temptation", "Materialism"],
    personalGrowth: "Examine what enslaves you - whether habits, thoughts, or relationships. Recognize that you have the power to free yourself from self-imposed limitations."
  },
  {
    id: 16,
    name: "The Tower",
    arcana: "major",
    psychologicalMeaning: "Represents sudden change, revelation, and the breakdown of false structures. It symbolizes necessary destruction that leads to liberation.",
    keywords: ["Sudden change", "Revelation", "Breakthrough", "Liberation"],
    personalGrowth: "Sometimes structures in your life need to crumble for growth to occur. Embrace sudden insights and changes as opportunities for liberation."
  },
  {
    id: 17,
    name: "The Star",
    arcana: "major",
    psychologicalMeaning: "Symbolizes hope, inspiration, and spiritual guidance. It represents renewal after difficult times and connection to your higher purpose.",
    keywords: ["Hope", "Inspiration", "Guidance", "Renewal"],
    personalGrowth: "Trust in your inner guidance and maintain hope for the future. You are being guided toward your highest good and spiritual purpose."
  },
  {
    id: 18,
    name: "The Moon",
    arcana: "major",
    psychologicalMeaning: "Represents illusion, intuition, and the unconscious mind. It highlights the need to trust your instincts while being aware of deception or self-deception.",
    keywords: ["Illusion", "Intuition", "Dreams", "Uncertainty"],
    personalGrowth: "Trust your intuition but be aware of illusions and self-deception. Pay attention to your dreams and unconscious messages."
  },
  {
    id: 19,
    name: "The Sun",
    arcana: "major",
    psychologicalMeaning: "Symbolizes joy, success, and vitality. It represents the achievement of personal fulfillment and the expression of your true self.",
    keywords: ["Joy", "Success", "Vitality", "Authenticity"],
    personalGrowth: "Embrace joy and celebrate your achievements. Let your authentic self shine brightly and share your positive energy with others."
  },
  {
    id: 20,
    name: "Judgement",
    arcana: "major",
    psychologicalMeaning: "Represents rebirth, inner calling, and spiritual awakening. It symbolizes answering a higher calling and embracing your true purpose.",
    keywords: ["Rebirth", "Calling", "Awakening", "Forgiveness"],
    personalGrowth: "Listen to your inner calling and embrace spiritual awakening. Forgive yourself and others as you step into a new phase of life."
  },
  {
    id: 21,
    name: "The World",
    arcana: "major",
    psychologicalMeaning: "Represents completion, fulfillment, and the achievement of wholeness. It symbolizes the successful integration of all aspects of yourself.",
    keywords: ["Completion", "Fulfillment", "Wholeness", "Achievement"],
    personalGrowth: "Celebrate your achievements and the completion of important cycles. You have integrated various aspects of yourself into wholeness."
  }
];

export function getRandomCards(count: 1 | 3 | 5): TarotCard[] {
  const shuffled = [...majorArcana].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}