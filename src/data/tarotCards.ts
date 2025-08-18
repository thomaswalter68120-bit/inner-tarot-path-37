export interface TarotCard {
  id: number;
  name: string;
  arcana: 'major' | 'minor';
  suit?: 'cups' | 'wands' | 'swords' | 'pentacles';
  psychologicalMeaning: string;
  keywords: string[];
  personalGrowth: string;
  uprightMeaning: string;
  reversedMeaning: string;
  therapeuticInsight: string;
}

export const majorArcana: TarotCard[] = [
  {
    id: 0,
    name: "The Fool",
    arcana: "major",
    psychologicalMeaning: "Represents new beginnings, innocence, and the courage to embark on life's journey. Psychologically, it symbolizes your willingness to take risks and embrace the unknown aspects of yourself.",
    keywords: ["New beginnings", "Spontaneity", "Innocent trust", "Adventure"],
    personalGrowth: "Trust your instincts and be open to new experiences. This is a time for authentic self-expression and embracing your true nature.",
    uprightMeaning: "A fresh start awaits you. Embrace spontaneity and trust in your journey ahead. Your innocence and optimism are your greatest strengths right now.",
    reversedMeaning: "You may be acting recklessly or avoiding necessary risks. Consider whether fear is holding you back from growth, or if you need more careful planning.",
    therapeuticInsight: "Remember that growth requires courage to step into the unknown. Your authentic self is emerging - trust this process and be gentle with yourself as you explore new territories of your identity."
  },
  {
    id: 1,
    name: "The Magician",
    arcana: "major",
    psychologicalMeaning: "Symbolizes personal power, manifestation, and the ability to transform thoughts into reality. It represents your capacity to channel your will and resources effectively.",
    keywords: ["Personal power", "Focus", "Manifestation", "Skill"],
    personalGrowth: "You have all the tools you need within you. Focus your energy and intentions to create the change you wish to see in your life.",
    uprightMeaning: "You possess the power to manifest your desires. All elements are aligned for success. Trust in your abilities and take decisive action.",
    reversedMeaning: "You may be misusing your power or lacking focus. Reflect on whether you're manipulating situations or if self-doubt is blocking your potential.",
    therapeuticInsight: "Your inner resources are vast and powerful. Like a skilled therapist helps clients recognize their own strength, you're learning to trust your ability to create positive change in your life."
  },
  {
    id: 2,
    name: "The High Priestess",
    arcana: "major",
    psychologicalMeaning: "Represents intuition, inner wisdom, and the unconscious mind. She encourages you to listen to your inner voice and trust your psychic abilities.",
    keywords: ["Intuition", "Inner wisdom", "Mystery", "Subconscious"],
    personalGrowth: "Take time for introspection and meditation. Your answers lie within, not in external validation or advice.",
    uprightMeaning: "Trust your intuition above all else. Hidden knowledge and wisdom are accessible to you now. Listen to your inner voice.",
    reversedMeaning: "You may be ignoring your intuition or becoming too secretive. Consider whether you're disconnected from your inner wisdom or avoiding deeper truths.",
    therapeuticInsight: "Your unconscious mind holds profound wisdom. Like accessing the deeper layers of the psyche in therapy, allow yourself quiet moments to connect with your inner knowing and trust what emerges."
  },
  {
    id: 3,
    name: "The Empress",
    arcana: "major",
    psychologicalMeaning: "Embodies nurturing, creativity, and abundance. Psychologically, it represents your connection to the feminine principle and your capacity for care and creation.",
    keywords: ["Nurturing", "Creativity", "Abundance", "Fertility"],
    personalGrowth: "Embrace your creative side and nurture yourself and others. Allow your natural abundance and generosity to flow freely.",
    uprightMeaning: "A time of creativity, abundance, and nurturing growth. Your feminine energy is strong, bringing forth new life and possibilities.",
    reversedMeaning: "You may be neglecting self-care or creative expression. Consider if you're giving too much to others or blocking your own creative flow.",
    therapeuticInsight: "Nurturing yourself is not selfish - it's essential. Like a mother's unconditional love, learn to offer yourself the same compassionate care you give others. Your creativity is a gift that heals both you and the world."
  },
  {
    id: 4,
    name: "The Emperor",
    arcana: "major",
    psychologicalMeaning: "Represents authority, structure, and the masculine principle. It signifies your ability to create order and take responsibility for your life.",
    keywords: ["Authority", "Structure", "Leadership", "Stability"],
    personalGrowth: "Take charge of your life with confidence. Create healthy boundaries and structures that support your goals and well-being.",
    uprightMeaning: "Strong leadership and structure serve you well. Take charge with confidence and establish the foundations you need for success.",
    reversedMeaning: "You may be too controlling or avoiding responsibility. Reflect on whether rigidity is blocking growth or if you need to step up as a leader.",
    therapeuticInsight: "Healthy boundaries and self-discipline are acts of self-love. Like a wise mentor, you're learning to provide yourself with the structure and guidance needed to thrive while remaining flexible and compassionate."
  },
  {
    id: 5,
    name: "The Hierophant",
    arcana: "major",
    psychologicalMeaning: "Symbolizes tradition, spiritual guidance, and learning from established wisdom. It represents your relationship with mentors and traditional values.",
    keywords: ["Tradition", "Spiritual guidance", "Conformity", "Education"],
    personalGrowth: "Seek wisdom from teachers and established traditions, but remember to integrate this knowledge in your own unique way.",
    uprightMeaning: "Traditional wisdom and spiritual guidance illuminate your path. Seek mentorship and honor the lessons of those who came before you.",
    reversedMeaning: "You may be too rigid in following traditions or rebelling against helpful guidance. Find balance between respect for wisdom and personal authenticity.",
    therapeuticInsight: "Learning from others' wisdom while honoring your unique path is a delicate balance. Like therapy itself, growth comes from integrating external guidance with your inner truth and personal experience."
  },
  {
    id: 6,
    name: "The Lovers",
    arcana: "major",
    psychologicalMeaning: "Represents choices, relationships, and the integration of opposites within yourself. It's about finding harmony between different aspects of your personality.",
    keywords: ["Choices", "Harmony", "Relationships", "Integration"],
    personalGrowth: "Make choices that align with your values. Seek balance between different aspects of yourself and your relationships.",
    uprightMeaning: "A significant choice or relationship is bringing harmony and growth. Trust your heart and choose love over fear.",
    reversedMeaning: "You may be avoiding important decisions or experiencing discord in relationships. Consider what values truly guide your choices.",
    therapeuticInsight: "Every relationship mirrors aspects of yourself. Like integrating different parts of your personality in therapy, you're learning to embrace all facets of who you are with love and acceptance."
  },
  {
    id: 7,
    name: "The Chariot",
    arcana: "major",
    psychologicalMeaning: "Symbolizes willpower, determination, and the ability to overcome obstacles through focus and self-discipline. It represents mastery over conflicting forces.",
    keywords: ["Willpower", "Determination", "Control", "Victory"],
    personalGrowth: "Harness your inner strength and determination. Stay focused on your goals despite obstacles and conflicting desires.",
    uprightMeaning: "Victory through determination and focused will. You have the strength to overcome any obstacle and reach your destination.",
    reversedMeaning: "You may be struggling with direction or lacking self-control. Consider what internal conflicts need resolution before moving forward.",
    therapeuticInsight: "True strength comes from integrating opposing forces within yourself. Like balancing different therapeutic approaches, you're learning to harness all aspects of your personality to move forward with purpose and grace."
  },
  {
    id: 8,
    name: "Strength",
    arcana: "major",
    psychologicalMeaning: "Represents inner strength, courage, and the power of gentleness over force. It symbolizes mastery over your instincts and emotions through compassion.",
    keywords: ["Inner strength", "Courage", "Compassion", "Self-control"],
    personalGrowth: "Face challenges with courage and compassion. Your true strength lies in gentleness and understanding, not in force or aggression.",
    uprightMeaning: "Gentle strength and compassionate courage guide you. Tame your fears and instincts through love, not force.",
    reversedMeaning: "You may be using force where gentleness is needed, or doubting your inner strength. Trust in your ability to handle challenges with grace.",
    therapeuticInsight: "The most profound healing happens through gentle, persistent love. Like the best therapeutic relationships, your greatest strength lies in approaching yourself and others with compassion and patience."
  },
  {
    id: 9,
    name: "The Hermit",
    arcana: "major",
    psychologicalMeaning: "Symbolizes introspection, soul searching, and seeking inner truth. It represents a period of self-reflection and spiritual seeking.",
    keywords: ["Introspection", "Inner guidance", "Solitude", "Wisdom"],
    personalGrowth: "Take time for solitude and self-reflection. The answers you seek can only be found through honest self-examination and inner work.",
    uprightMeaning: "A period of inner reflection and soul searching illuminates your path. Trust your inner guidance and embrace solitude for wisdom.",
    reversedMeaning: "You may be isolating yourself unnecessarily or avoiding inner work. Consider whether you need more introspection or more connection with others.",
    therapeuticInsight: "Sometimes the most profound insights come in quiet moments alone with yourself. Like the deep work of therapy, this introspective period is preparing you to shine your light more brightly in the world."
  },
  {
    id: 10,
    name: "Wheel of Fortune",
    arcana: "major",
    psychologicalMeaning: "Represents cycles, change, and the understanding that life has natural ups and downs. It encourages acceptance of life's inevitable changes.",
    keywords: ["Cycles", "Change", "Destiny", "Acceptance"],
    personalGrowth: "Embrace change as a natural part of life. What goes down will come up again. Focus on what you can control and accept what you cannot.",
    uprightMeaning: "Positive changes and good fortune are turning in your favor. Trust in life's natural cycles and embrace the opportunities ahead.",
    reversedMeaning: "You may be resisting necessary change or feeling stuck in negative cycles. Consider what patterns need to be broken for growth to occur.",
    therapeuticInsight: "Life's ups and downs are natural rhythms, not judgments on your worth. Like the cyclical nature of healing, trust that every experience - both joyful and challenging - contributes to your growth and wisdom."
  },
  {
    id: 11,
    name: "Justice",
    arcana: "major",
    psychologicalMeaning: "Represents fairness, truth, and the law of cause and effect. It symbolizes taking responsibility for your actions and seeking balance in all things.",
    keywords: ["Fairness", "Truth", "Balance", "Accountability"],
    personalGrowth: "Take responsibility for your actions and their consequences. Seek truth and fairness in your dealings with others and yourself.",
    uprightMeaning: "Justice and balance are being restored. Truth will prevail, and fair outcomes are assured through honest action.",
    reversedMeaning: "You may be avoiding accountability or being too harsh in judgment. Consider where more balance and compassion are needed.",
    therapeuticInsight: "True justice includes compassion for yourself. Like a fair and wise judge, learn to hold yourself accountable while maintaining understanding for your human imperfections and the journey of growth."
  },
  {
    id: 12,
    name: "The Hanged Man",
    arcana: "major",
    psychologicalMeaning: "Represents surrender, new perspectives, and the wisdom found in stillness. It suggests letting go of control to gain new insights.",
    keywords: ["Surrender", "New perspective", "Sacrifice", "Enlightenment"],
    personalGrowth: "Sometimes progress requires letting go and seeing things from a new angle. Surrender control and allow new perspectives to emerge.",
    uprightMeaning: "Surrender and stillness bring new insights. What seems like a pause is actually a period of profound inner growth and wisdom.",
    reversedMeaning: "You may be struggling against necessary surrender or making unnecessary sacrifices. Consider what truly deserves your energy and effort.",
    therapeuticInsight: "Sometimes the most powerful action is conscious inaction. Like the patience required in deep therapeutic work, trust that this period of suspension is reorganizing your inner world in beautiful ways."
  },
  {
    id: 13,
    name: "Death",
    arcana: "major",
    psychologicalMeaning: "Symbolizes transformation, endings, and new beginnings. It represents the psychological process of letting go of what no longer serves you.",
    keywords: ["Transformation", "Endings", "Renewal", "Release"],
    personalGrowth: "Embrace necessary endings in your life. What needs to die within you so that something new can be born? Transformation requires release.",
    uprightMeaning: "A profound transformation is underway. Release what no longer serves you to make space for new growth and possibilities.",
    reversedMeaning: "You may be resisting necessary change or clinging to what needs to be released. Trust that endings create space for new beginnings.",
    therapeuticInsight: "Every ending contains the seed of a new beginning. Like the natural process of therapy where old patterns must dissolve to make room for healing, trust that what's ending is making space for something more aligned with who you're becoming."
  },
  {
    id: 14,
    name: "Temperance",
    arcana: "major",
    psychologicalMeaning: "Represents moderation, patience, and the art of blending opposites. It symbolizes finding middle ground and healing through integration.",
    keywords: ["Moderation", "Patience", "Balance", "Healing"],
    personalGrowth: "Practice patience and moderation. Healing comes through finding balance and integrating all aspects of yourself harmoniously.",
    uprightMeaning: "Patience and moderation create harmony and healing. Blend opposing forces in your life to find the perfect balance.",
    reversedMeaning: "You may be lacking patience or going to extremes. Consider where more balance and gradual progress would serve you better.",
    therapeuticInsight: "Healing is often a gentle, gradual process of integration. Like mixing colors to create new hues, you're learning to blend all aspects of yourself into a harmonious, authentic whole."
  },
  {
    id: 15,
    name: "The Devil",
    arcana: "major",
    psychologicalMeaning: "Represents bondage, temptation, and the shadow aspects of personality. It highlights areas where you may feel trapped by your own choices or addictions.",
    keywords: ["Bondage", "Shadow", "Temptation", "Materialism"],
    personalGrowth: "Examine what enslaves you - whether habits, thoughts, or relationships. Recognize that you have the power to free yourself from self-imposed limitations.",
    uprightMeaning: "Examine what binds you and recognize your power to break free. Material desires or unhealthy patterns may be limiting your growth.",
    reversedMeaning: "You're beginning to break free from limiting beliefs or addictive patterns. Continue this journey toward liberation and authentic self-expression.",
    therapeuticInsight: "Facing your shadow with compassion is the path to freedom. Like the courage required to examine difficult patterns in therapy, acknowledge what binds you without judgment, knowing you have the power to choose differently."
  },
  {
    id: 16,
    name: "The Tower",
    arcana: "major",
    psychologicalMeaning: "Represents sudden change, revelation, and the breakdown of false structures. It symbolizes necessary destruction that leads to liberation.",
    keywords: ["Sudden change", "Revelation", "Breakthrough", "Liberation"],
    personalGrowth: "Sometimes structures in your life need to crumble for growth to occur. Embrace sudden insights and changes as opportunities for liberation.",
    uprightMeaning: "Sudden revelations and breakthrough moments shatter illusions. What seems destructive is actually clearing space for authentic truth.",
    reversedMeaning: "You may be avoiding necessary changes or clinging to crumbling structures. Sometimes destruction is required for rebuilding on stronger foundations.",
    therapeuticInsight: "Sometimes breakthrough moments come disguised as breakdowns. Like those pivotal moments in therapy when false beliefs crumble, trust that what's falling away was never meant to contain your true self."
  },
  {
    id: 17,
    name: "The Star",
    arcana: "major",
    psychologicalMeaning: "Symbolizes hope, inspiration, and spiritual guidance. It represents renewal after difficult times and connection to your higher purpose.",
    keywords: ["Hope", "Inspiration", "Guidance", "Renewal"],
    personalGrowth: "Trust in your inner guidance and maintain hope for the future. You are being guided toward your highest good and spiritual purpose.",
    uprightMeaning: "Hope and inspiration illuminate your path forward. Trust in divine guidance and your own inner light to lead you to healing and renewal.",
    reversedMeaning: "You may be losing hope or feeling disconnected from your purpose. Remember that even in darkness, your inner light continues to shine.",
    therapeuticInsight: "After every dark night of the soul comes a dawn of renewed hope. Like the trust that develops in a healing therapeutic relationship, you're learning to trust in the larger forces supporting your growth and well-being."
  },
  {
    id: 18,
    name: "The Moon",
    arcana: "major",
    psychologicalMeaning: "Represents illusion, intuition, and the unconscious mind. It highlights the need to trust your instincts while being aware of deception or self-deception.",
    keywords: ["Illusion", "Intuition", "Dreams", "Uncertainty"],
    personalGrowth: "Trust your intuition but be aware of illusions and self-deception. Pay attention to your dreams and unconscious messages.",
    uprightMeaning: "Trust your intuition to navigate through illusions and uncertainties. Your unconscious mind is revealing important truths through dreams and symbols.",
    reversedMeaning: "Illusions are clearing and truth is being revealed. You're moving from confusion toward clarity and authentic understanding.",
    therapeuticInsight: "The unconscious speaks through symbols, dreams, and intuition. Like learning to understand the language of the psyche in therapy, trust your inner knowing even when the path seems unclear."
  },
  {
    id: 19,
    name: "The Sun",
    arcana: "major",
    psychologicalMeaning: "Symbolizes joy, success, and vitality. It represents the achievement of personal fulfillment and the expression of your true self.",
    keywords: ["Joy", "Success", "Vitality", "Authenticity"],
    personalGrowth: "Embrace joy and celebrate your achievements. Let your authentic self shine brightly and share your positive energy with others.",
    uprightMeaning: "Pure joy, success, and vitality radiate from you. Your authentic self shines brightly, bringing warmth and happiness to all around you.",
    reversedMeaning: "Joy may feel temporary or clouded by doubt. Remember that your light is constant - what's needed is to clear away what obscures it.",
    therapeuticInsight: "Your authentic joy is a gift to the world. Like the warmth of genuine therapeutic presence, your light when freely expressed creates healing and happiness not just for you, but for everyone you encounter."
  },
  {
    id: 20,
    name: "Judgement",
    arcana: "major",
    psychologicalMeaning: "Represents rebirth, inner calling, and spiritual awakening. It symbolizes answering a higher calling and embracing your true purpose.",
    keywords: ["Rebirth", "Calling", "Awakening", "Forgiveness"],
    personalGrowth: "Listen to your inner calling and embrace spiritual awakening. Forgive yourself and others as you step into a new phase of life.",
    uprightMeaning: "A higher calling awakens you to your true purpose. Past experiences integrate into wisdom as you step into a new phase of spiritual growth.",
    reversedMeaning: "You may be avoiding your calling or being too harsh in self-judgment. Practice forgiveness and trust in your capacity for renewal and growth.",
    therapeuticInsight: "True awakening includes compassionate integration of all your experiences. Like the completion of deep therapeutic work, you're ready to embrace your full authentic self and purpose with love and wisdom."
  },
  {
    id: 21,
    name: "The World",
    arcana: "major",
    psychologicalMeaning: "Represents completion, fulfillment, and the achievement of wholeness. It symbolizes the successful integration of all aspects of yourself.",
    keywords: ["Completion", "Fulfillment", "Wholeness", "Achievement"],
    personalGrowth: "Celebrate your achievements and the completion of important cycles. You have integrated various aspects of yourself into wholeness.",
    uprightMeaning: "Complete fulfillment and wholeness are achieved. You have successfully integrated all aspects of your journey into wisdom and authentic self-expression.",
    reversedMeaning: "Completion may feel delayed or incomplete. Trust that you're still integrating important lessons and that wholeness is an ongoing process.",
    therapeuticInsight: "You have come full circle in your journey of self-understanding. Like the successful completion of therapeutic work, you now carry within you the wisdom and tools to continue growing with confidence and self-compassion."
  }
];

export function getRandomCards(count: 1 | 3 | 5): TarotCard[] {
  const shuffled = [...majorArcana].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}