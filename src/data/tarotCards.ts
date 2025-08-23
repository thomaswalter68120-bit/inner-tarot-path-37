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
  image: string;
  shortReading: string;
  deepReading: string;
  narrative: string;
  positiveAspects: string;
  vigilancePoints: string;
  reflectionQuestion: string;
}

// Import card images
import leMat from '../assets/tarot-cards/00-le-mat.jpg';
import leBateleur from '../assets/tarot-cards/01-le-bateleur.jpg';
import laPapesse from '../assets/tarot-cards/02-la-papesse.jpg';
import lImperatrice from '../assets/tarot-cards/03-l-imperatrice.jpg';
import lEmpereur from '../assets/tarot-cards/04-l-empereur.jpg';
import lePape from '../assets/tarot-cards/05-le-pape.jpg';
import lAmoureux from '../assets/tarot-cards/06-l-amoureux.jpg';
import leChariot from '../assets/tarot-cards/07-le-chariot.jpg';
import laForce from '../assets/tarot-cards/08-la-force.jpg';
import lErmite from '../assets/tarot-cards/09-l-ermite.jpg';
import laRoueDeFortune from '../assets/tarot-cards/10-la-roue-de-fortune.jpg';
import laJustice from '../assets/tarot-cards/11-la-justice.jpg';
import lePendu from '../assets/tarot-cards/12-le-pendu.jpg';
import laMort from '../assets/tarot-cards/13-la-mort.jpg';
import temperance from '../assets/tarot-cards/14-temperance.jpg';
import leDiable from '../assets/tarot-cards/15-le-diable.jpg';
import laMaisonDieu from '../assets/tarot-cards/16-la-maison-dieu.jpg';
import lEtoile from '../assets/tarot-cards/17-l-etoile.jpg';
import laLune from '../assets/tarot-cards/18-la-lune.jpg';
import leSoleil from '../assets/tarot-cards/19-le-soleil.jpg';
import leJugement from '../assets/tarot-cards/20-le-jugement.jpg';
import leMonde from '../assets/tarot-cards/21-le-monde.jpg';

export const majorArcana: TarotCard[] = [
  {
    id: 0,
    name: "Le Mat",
    arcana: "major",
    psychologicalMeaning: "Représente les nouveaux commencements, l'innocence et le courage d'entreprendre le voyage de la vie. Psychologiquement, il symbolise votre volonté de prendre des risques et d'embrasser les aspects inconnus de vous-même.",
    keywords: ["Nouveaux commencements", "Spontanéité", "Confiance innocente", "Aventure"],
    personalGrowth: "Faites confiance à vos instincts et soyez ouvert aux nouvelles expériences. C'est un moment pour l'expression authentique de soi et pour embrasser votre vraie nature.",
    uprightMeaning: "Un nouveau départ vous attend. Embrassez la spontanéité et faites confiance à votre voyage à venir. Votre innocence et votre optimisme sont vos plus grandes forces en ce moment.",
    reversedMeaning: "Vous agissez peut-être de manière imprudente ou évitez les risques nécessaires. Réfléchissez si la peur vous retient ou si vous avez besoin d'une planification plus soigneuse.",
    therapeuticInsight: "Rappelez-vous que la croissance nécessite le courage d'entrer dans l'inconnu. Votre moi authentique émerge - faites confiance à ce processus et soyez doux avec vous-même en explorant de nouveaux territoires de votre identité.",
    image: leMat,
    shortReading: "Le Mat vous invite à un nouveau départ plein de spontanéité et d'innocence.",
    deepReading: "Cette carte majeure symbolise l'appel de l'aventure et la confiance en l'inconnu. Elle vous encourage à écouter votre cœur d'enfant et à oser le premier pas vers l'inconnu, même sans certitudes. Votre intuition guide vos pas sur ce chemin de découverte.",
    narrative: "Il était une fois un voyageur sans bagage, portant seulement une fleur et un baluchon. Son pas léger défie les falaises car il sait que chaque chute peut devenir un envol. Le Mat nous enseigne que l'innocence n'est pas naïveté, mais courage d'être authentique.",
    positiveAspects: "Votre spontanéité et votre optimisme naturel sont des forces précieuses. Vous portez en vous une fraîcheur qui inspire et une capacité d'émerveillement qui ouvre les portes.",
    vigilancePoints: "Attention à ne pas confondre insouciance et imprudence. Votre enthousiasme pourrait vous faire négliger certains aspects pratiques importantes.",
    reflectionQuestion: "Quelle part d'enfant en vous demande à s'exprimer aujourd'hui ? Quel premier pas vers l'inconnu votre cœur vous murmure-t-il ?"
  },
  {
    id: 1,
    name: "Le Bateleur",
    arcana: "major",
    psychologicalMeaning: "Symbolise le pouvoir personnel, la manifestation et la capacité de transformer les pensées en réalité. Il représente votre capacité à canaliser efficacement votre volonté et vos ressources.",
    keywords: ["Pouvoir personnel", "Concentration", "Manifestation", "Compétence"],
    personalGrowth: "Vous avez tous les outils dont vous avez besoin en vous. Concentrez votre énergie et vos intentions pour créer le changement que vous souhaitez voir dans votre vie.",
    uprightMeaning: "Vous possédez le pouvoir de manifester vos désirs. Tous les éléments sont alignés pour le succès. Faites confiance à vos capacités et prenez des mesures décisives.",
    reversedMeaning: "Vous utilisez peut-être mal votre pouvoir ou manquez de concentration. Réfléchissez si vous manipulez les situations ou si le doute de soi bloque votre potentiel.",
    therapeuticInsight: "Vos ressources intérieures sont vastes et puissantes. Comme un thérapeute habile aide les clients à reconnaître leur propre force, vous apprenez à faire confiance à votre capacité à créer un changement positif dans votre vie.",
    image: leBateleur,
    shortReading: "Le Bateleur révèle votre pouvoir de transformation et votre capacité à manifester vos intentions.",
    deepReading: "Cette carte symbolise la maîtrise de vos ressources intérieures. Vous avez entre vos mains tous les éléments nécessaires pour créer la réalité que vous désirez. Votre volonté focalisée devient l'outil de votre transformation.",
    narrative: "Un magicien se tient devant sa table, chaque objet à sa place parfaite. Sa main droite pointe vers le ciel, sa gauche vers la terre. Il nous enseigne que la vraie magie réside dans l'union de l'intention céleste et de l'action terrestre.",
    positiveAspects: "Votre capacité de concentration et votre pouvoir personnel sont à leur apogée. Vous possédez les compétences et la volonté nécessaires pour réussir dans vos entreprises.",
    vigilancePoints: "Attention à ne pas disperser votre énergie ou céder à l'arrogance. Le vrai pouvoir demande humilité et concentration.",
    reflectionQuestion: "Comment pouvez-vous mieux canaliser votre énergie créatrice ? Quels sont les outils intérieurs que vous sous-estimez ?"
  },
  {
    id: 2,
    name: "La Papesse",
    arcana: "major",
    psychologicalMeaning: "Représente l'intuition, la sagesse intérieure et l'esprit inconscient. Elle vous encourage à écouter votre voix intérieure et à faire confiance à vos capacités psychiques.",
    keywords: ["Intuition", "Sagesse intérieure", "Mystère", "Subconscient"],
    personalGrowth: "Prenez du temps pour l'introspection et la méditation. Vos réponses se trouvent à l'intérieur, pas dans la validation ou les conseils externes.",
    uprightMeaning: "Faites confiance à votre intuition par-dessus tout. Les connaissances et la sagesse cachées vous sont accessibles maintenant. Écoutez votre voix intérieure.",
    reversedMeaning: "Vous ignorez peut-être votre intuition ou devenez trop secret. Réfléchissez si vous êtes déconnecté de votre sagesse intérieure ou évitez des vérités plus profondes.",
    therapeuticInsight: "Votre esprit inconscient détient une sagesse profonde. Comme accéder aux couches plus profondes de la psyché en thérapie, accordez-vous des moments calmes pour vous connecter à votre connaissance intérieure et faire confiance à ce qui émerge.",
    image: laPapesse,
    shortReading: "La Papesse vous guide vers l'écoute de votre sagesse intérieure et de vos intuitions profondes.",
    deepReading: "Gardienne des mystères de l'inconscient, elle vous invite à explorer les territoires secrets de votre âme. Ses voiles cachent des vérités que seul le silence peut révéler. Elle vous enseigne que la vraie connaissance naît dans le recueillement.",
    narrative: "Entre deux colonnes, une femme mystérieuse garde le seuil du temple intérieur. Ses robes bleues ondulent comme les eaux de l'inconscient. Elle tient le livre des secrets non écrits, ceux que seul le cœur sait lire.",
    positiveAspects: "Votre intuition est particulièrement fine et vos capacités de compréhension profonde s'épanouissent. Vous avez accès à une sagesse ancienne qui guide vos pas.",
    vigilancePoints: "Attention à ne pas vous isoler excessivement ou à devenir trop secrète. L'introspection ne doit pas devenir fuite du monde.",
    reflectionQuestion: "Quel message votre intuition tente-t-elle de vous transmettre en ce moment ? Quels mystères de votre être demandent à être explorés ?"
  },
  {
    id: 3,
    name: "L'Impératrice",
    arcana: "major",
    psychologicalMeaning: "Incarne la bienveillance, la créativité et l'abondance. Psychologiquement, elle représente votre connexion au principe féminin et votre capacité de soin et creation.",
    keywords: ["Bienveillance", "Créativité", "Abondance", "Fertilité"],
    personalGrowth: "Embrassez votre côté créatif et prenez soin de vous et des autres. Laissez votre abondance naturelle et votre générosité s'exprimer librement.",
    uprightMeaning: "Une période de créativité, d'abondance et de croissance bienveillante. Votre énergie féminine est forte, apportant nouvelle vie et possibilités.",
    reversedMeaning: "Vous négligez peut-être les soins personnels ou l'expression créative. Réfléchissez si vous donnez trop aux autres ou bloquez votre propre flux créatif.",
    therapeuticInsight: "Prendre soin de vous n'est pas égoïste - c'est essentiel. Comme l'amour inconditionnel d'une mère, apprenez à vous offrir les mêmes soins compatissants que vous donnez aux autres. Votre créativité est un don qui guérit à la fois vous et le monde.",
    image: lImperatrice,
    shortReading: "L'Impératrice révèle votre pouvoir créateur et votre capacité d'abondance naturelle.",
    deepReading: "Souveraine de la création et de l'abondance, elle incarne la force généreuse qui nourrit et fait fleurir. Couronnée d'étoiles, elle rappelle que créer est un acte sacré. Sa présence annonce une période de fertilité créative et de générosité.",
    narrative: "Dans un jardin luxuriant, une reine bienveillante veille sur toute forme de vie. Ses mains caressent la terre fertile, et partout où elle passe, les fleurs s'épanouissent. Elle nous enseigne que l'amour véritable fait croître tout ce qu'il touche.",
    positiveAspects: "Votre créativité s'épanouit et votre capacité à nourrir et à faire croître les projets est remarquable. Vous rayonnez d'une générosité naturelle qui enrichit votre entourage.",
    vigilancePoints: "Veillez à ne pas vous oublier dans votre générosité ou à disperser votre énergie créatrice. L'abondance demande aussi de savoir recevoir.",
    reflectionQuestion: "Comment votre créativité demande-t-elle à s'exprimer ? De quelle manière pouvez-vous mieux nourrir vos propres besoins tout en donnant aux autres ?"
  },
  {
    id: 4,
    name: "L'Empereur",
    arcana: "major",
    psychologicalMeaning: "Représente l'autorité, la structure et le principe masculin. Il signifie votre capacité à créer l'ordre et à prendre la responsabilité de votre vie.",
    keywords: ["Autorité", "Structure", "Leadership", "Stabilité"],
    personalGrowth: "Prenez le contrôle de votre vie avec confiance. Créez des limites et des structures saines qui soutiennent vos objectifs et votre bien-être.",
    uprightMeaning: "Un leadership fort et une structure vous servent bien. Prenez les commandes avec confiance et établissez les fondations dont vous avez besoin pour réussir.",
    reversedMeaning: "Vous êtes peut-être trop contrôlant ou évitez la responsabilité. Réfléchissez si la rigidité bloque la croissance ou si vous devez vous affirmer comme leader.",
    therapeuticInsight: "Des limites saines et l'autodiscipline sont des actes d'amour de soi. Comme un mentor sage, vous apprenez à vous fournir la structure et les conseils nécessaires pour prospérer tout en restant flexible et compatissant.",
    image: lEmpereur,
    shortReading: "L'Empereur vous invite à structurer votre vie et à exercer votre autorité personnelle avec sagesse.",
    deepReading: "Maître de l'ordre et de la stabilité, il incarne la force qui organise et protège. Son sceptre et son trône symbolisent un pouvoir acquis par l'expérience et la responsabilité. Il vous enseigne que la vraie autorité naît de la maîtrise de soi.",
    narrative: "Sur son trône de pierre, un souverain contemple son royaume. Ses décisions façonnent le monde autour de lui, car il a appris que diriger, c'est d'abord se diriger soi-même. Ses mains fermes construisent un avenir stable pour tous.",
    positiveAspects: "Votre sens de l'organisation et votre capacité de leadership naturel vous permettent de créer des bases solides. Vous inspirez confiance et stabilité à votre entourage.",
    vigilancePoints: "Attention à ne pas tomber dans la rigidité excessive ou le besoin de tout contrôler. La vraie force sait s'adapter aux circonstances.",
    reflectionQuestion: "Dans quels domaines de votre vie avez-vous besoin de plus de structure et de discipline ? Comment pouvez-vous exercer votre autorité avec plus de bienveillance ?"
  },
  {
    id: 5,
    name: "Le Pape",
    arcana: "major",
    psychologicalMeaning: "Symbolise la tradition, la guidance spirituelle et l'apprentissage de la sagesse établie. Il représente votre relation avec les mentors et les valeurs traditionnelles.",
    keywords: ["Tradition", "Guidance spirituelle", "Conformité", "Éducation"],
    personalGrowth: "Cherchez la sagesse auprès des enseignants et des traditions établies, mais n'oubliez pas d'intégrer cette connaissance à votre manière unique.",
    uprightMeaning: "La sagesse traditionnelle et la guidance spirituelle illuminent votre chemin. Cherchez le mentorat et honorez les leçons de ceux qui vous ont précédé.",
    reversedMeaning: "Vous êtes peut-être trop rigide en suivant les traditions ou vous rebellez contre des conseils utiles. Trouvez l'équilibre entre le respect de la sagesse et l'authenticité personnelle.",
    therapeuticInsight: "Apprendre de la sagesse des autres tout en honorant votre chemin unique est un équilibre délicat. Comme la thérapie elle-même, la croissance vient de l'intégration des conseils externes avec votre vérité intérieure et votre expérience personnelle.",
    image: lePape,
    shortReading: "Le Pape vous guide vers la sagesse traditionnelle et l'apprentissage spirituel.",
    deepReading: "Gardien des enseignements sacrés et des traditions ancestrales, il représente la transmission de la sagesse à travers les âges. Ses clés ouvrent les portes de la connaissance spirituelle, vous invitant à recevoir et à transmettre à votre tour.",
    narrative: "Dans le temple de la connaissance, un maître bienveillant partage les secrets accumulés par les générations. Ses disciples écoutent avec respect, sachant que la vraie sagesse se transmet de cœur à cœur, dans l'humilité et l'amour.",
    positiveAspects: "Vous bénéficiez de la guidance de mentors ou de traditions qui enrichissent votre parcours. Votre respect pour la sagesse établie vous ouvre des portes d'apprentissage.",
    vigilancePoints: "Attention à ne pas vous conformer aveuglément ou à rejeter votre propre intuition au profit des autres. La tradition doit nourrir, non étouffer, votre authenticité.",
    reflectionQuestion: "Quels enseignements ou mentors peuvent éclairer votre chemin actuel ? Comment pouvez-vous honorer la tradition tout en restant fidèle à votre vérité personnelle ?"
  },
  {
    id: 6,
    name: "L'Amoureux",
    arcana: "major",
    psychologicalMeaning: "Représente les choix, les relations et l'intégration des opposés en vous-même. Il s'agit de trouver l'harmonie entre différents aspects de votre personnalité.",
    keywords: ["Choix", "Harmonie", "Relations", "Intégration"],
    personalGrowth: "Faites des choix qui s'alignent avec vos valeurs. Cherchez l'équilibre entre les différents aspects de vous-même et de vos relations.",
    uprightMeaning: "Un choix ou une relation significative apporte harmonie et croissance. Faites confiance à votre cœur et choisissez l'amour plutôt que la peur.",
    reversedMeaning: "Vous évitez peut-être des décisions importantes ou vivez des discordes relationnelles. Réfléchissez aux valeurs qui guident vraiment vos choix.",
    therapeuticInsight: "Chaque relation reflète des aspects de vous-même. Comme intégrer différentes parties de votre personnalité en thérapie, vous apprenez à embrasser toutes les facettes de qui vous êtes avec amour et acceptation.",
    image: lAmoureux,
    shortReading: "L'Amoureux vous place face à des choix importants et à l'harmonie des contraires.",
    deepReading: "Au carrefour des possibles, cette carte révèle la beauté et la complexité des choix humains. Sous l'œil bienveillant de l'ange, elle vous enseigne que tout choix authentique naît de l'union du cœur et de la raison.",
    narrative: "Sous le soleil radieux, deux êtres se tiennent côte à côte, chacun représentant une facette de l'âme humaine. Un ange les bénit, rappelant que l'amour véritable réconcilie tous les opposés et guide vers l'unité.",
    positiveAspects: "Vos relations s'épanouissent dans l'harmonie et vos choix sont guidés par l'amour et la sagesse. Vous savez concilier différents aspects de votre personnalité.",
    vigilancePoints: "Attention aux choix impulsifs ou à la tendance à éviter les décisions difficiles. L'harmonie demande parfois du courage et de la clarté.",
    reflectionQuestion: "Quel choix important votre cœur vous demande-t-il de faire ? Comment pouvez-vous mieux équilibrer les différentes facettes de votre être ?"
  },
  {
    id: 7,
    name: "Le Chariot",
    arcana: "major",
    psychologicalMeaning: "Symbolise la volonté, la détermination et la capacité de surmonter les obstacles par la concentration et l'autodiscipline. Il représente la maîtrise des forces conflictuelles.",
    keywords: ["Volonté", "Détermination", "Contrôle", "Victoire"],
    personalGrowth: "Exploitez votre force intérieure et votre détermination. Restez concentré sur vos objectifs malgré les obstacles et les désirs conflictuels.",
    uprightMeaning: "Victoire par la détermination et la volonté concentrée. Vous avez la force de surmonter tout obstacle et d'atteindre votre destination.",
    reversedMeaning: "Vous luttez peut-être avec la direction ou manquez de maîtrise de soi. Réfléchissez aux conflits internes qui ont besoin de résolution avant d'avancer.",
    therapeuticInsight: "La vraie force vient de l'intégration des forces opposées en vous-même. Comme équilibrer différentes approches thérapeutiques, vous apprenez à exploiter tous les aspects de votre personnalité pour avancer avec but et grâce.",
    image: leChariot,
    shortReading: "Le Chariot symbolise votre volonté triomphante et votre capacité à surmonter tous les obstacles.",
    deepReading: "Conducteur de son destin, le conquérant maîtrise les forces opposées qui tirent son char. Sa couronne d'étoiles révèle qu'il a unifié ses contradictions intérieures. Il vous enseigne que la vraie victoire est celle remportée sur soi-même.",
    narrative: "Dans l'arène de la vie, un guerrier spirituel dirige son char tiré par deux sphinx. L'un noir, l'autre blanc, ils représentent les forces opposées que seule la volonté pure peut harmoniser. Sa détermination transforme l'obstacle en tremplin.",
    positiveAspects: "Votre détermination et votre volonté focalisée vous permettent de surmonter les défis avec brio. Vous savez canaliser vos énergies vers vos objectifs.",
    vigilancePoints: "Attention à l'autoritarisme excessif ou à la tendance à forcer les situations. La vraie maîtrise inclut la souplesse et l'adaptation.",
    reflectionQuestion: "Quelles forces opposées en vous demandent à être harmonisées ? Comment votre volonté peut-elle vous mener vers votre vraie destination ?"
  },
  {
    id: 8,
    name: "La Force",
    arcana: "major",
    psychologicalMeaning: "Représente la force intérieure, le courage et le pouvoir de la douceur sur la force. Elle symbolise la maîtrise de vos instincts et émotions par la compassion.",
    keywords: ["Force intérieure", "Courage", "Compassion", "Maîtrise de soi"],
    personalGrowth: "Affrontez les défis avec courage et compassion. Votre vraie force réside dans la douceur et la compréhension, pas dans la force ou l'agression.",
    uprightMeaning: "La force douce et le courage compatissant vous guident. Domptez vos peurs et instincts par l'amour, pas par la force.",
    reversedMeaning: "Vous utilisez peut-être la force là où la douceur est nécessaire, ou doutez de votre force intérieure. Faites confiance à votre capacité de gérer les défis avec grâce.",
    therapeuticInsight: "La guérison la plus profonde se produit par un amour doux et persistant. Comme les meilleures relations thérapeutiques, votre plus grande force réside dans l'approche de vous-même et des autres avec compassion et patience.",
    image: laForce,
    shortReading: "La Force révèle votre courage intérieur et votre capacité à dompter par la douceur.",
    deepReading: "Plus puissante que toute violence, la force véritable émane du cœur. Cette femme apaise le lion par sa seule présence aimante, révélant que l'amour transforme là où la contrainte échoue. Elle vous enseigne la patience et la persévérance.",
    narrative: "Au cœur de la forêt sauvage, une femme à la beauté sereine caresse la crinière d'un lion. Sa douceur apaise la bête en lui, révélant que l'amour authentique possède un pouvoir que nulle force brute ne peut égaler.",
    positiveAspects: "Votre force intérieure et votre compassion naturelle vous permettent de surmonter les défis avec grâce. Vous inspirez et apaisez par votre seule présence.",
    vigilancePoints: "Attention à minimiser votre propre force ou à accepter l'inacceptable par excès de tolérance. La douceur doit s'allier à la fermeté.",
    reflectionQuestion: "Comment votre douceur peut-elle transformer les situations difficiles ? Quelle part sauvage en vous demande à être apprivoisée avec amour ?"
  },
  {
    id: 9,
    name: "L'Ermite",
    arcana: "major",
    psychologicalMeaning: "Symbolise l'introspection, la recherche de l'âme et la quête de vérité intérieure. Il représente une période d'auto-réflexion et de recherche spirituelle.",
    keywords: ["Introspection", "Guidance intérieure", "Solitude", "Sagesse"],
    personalGrowth: "Prenez du temps pour la solitude et l'auto-réflexion. Les réponses que vous cherchez ne peuvent être trouvées que par un auto-examen honnête et un travail intérieur.",
    uprightMeaning: "Une période de réflexion intérieure et de recherche de l'âme illumine votre chemin. Faites confiance à votre guidance intérieure et embrassez la solitude pour la sagesse.",
    reversedMeaning: "Vous vous isolez peut-être inutilement ou évitez le travail intérieur. Réfléchissez si vous avez besoin de plus d'introspection ou de plus de connexion avec les autres.",
    therapeuticInsight: "Parfois les insights les plus profonds viennent dans des moments calmes seul avec vous-même. Comme le travail profond de la thérapie, cette période introspective vous prépare à faire briller votre lumière plus brillamment dans le monde.",
    image: lErmite,
    shortReading: "L'Ermite vous guide vers la sagesse intérieure à travers l'introspection et la solitude éclairée.",
    deepReading: "Porteur de la lanterne de la sagesse, il éclaire le chemin vers la vérité intérieure. Sa retraite du monde n'est pas fuite, mais quête d'authenticité. Il vous enseigne que parfois il faut se perdre pour mieux se retrouver.",
    narrative: "Sur le sommet de la montagne de la conscience, un sage contemple les étoiles. Sa lanterne éclaire non le monde extérieur, mais les territoires infinis de l'âme. Il sait que la vraie richesse se trouve dans le silence du cœur.",
    positiveAspects: "Votre capacité d'introspection et votre quête de sagesse personnelle s'approfondissent. Vous développez une guidance intérieure solide et authentique.",
    vigilancePoints: "Attention à l'isolement excessif ou à la tendance à fuir les responsabilités sociales. La sagesse acquise doit servir aussi aux autres.",
    reflectionQuestion: "Quelle vérité profonde votre âme cherche-t-elle à vous révéler ? Comment cette période de réflexion peut-elle nourrir votre chemin futur ?"
  },
  {
    id: 10,
    name: "La Roue de Fortune",
    arcana: "major",
    psychologicalMeaning: "Représente les cycles, le changement et la compréhension que la vie a des hauts et des bas naturels. Elle encourage l'acceptation des changements inévitables de la vie.",
    keywords: ["Cycles", "Changement", "Destin", "Acceptation"],
    personalGrowth: "Embrassez le changement comme une partie naturelle de la vie. Ce qui descend remontera. Concentrez-vous sur ce que vous pouvez contrôler et acceptez ce que vous ne pouvez pas.",
    uprightMeaning: "Des changements positifs et la bonne fortune tournent en votre faveur. Faites confiance aux cycles naturels de la vie et embrassez les opportunités à venir.",
    reversedMeaning: "Vous résistez peut-être au changement nécessaire ou vous sentez coincé dans des cycles négatifs. Réfléchissez aux schémas qui doivent être brisés pour que la croissance se produise.",
    therapeuticInsight: "Les hauts et les bas de la vie sont des rythmes naturels, pas des jugements sur votre valeur. Comme la nature cyclique de la guérison, faites confiance que chaque expérience - joyeuse ou difficile - contribue à votre croissance et sagesse.",
    image: laRoueDeFortune,
    shortReading: "La Roue de Fortune annonce des changements cycliques et l'évolution naturelle de votre destin.",
    deepReading: "Symbole éternel des cycles de l'existence, elle révèle que tout dans la vie connaît des phases de montée et de descente. Sa rotation perpétuelle vous enseigne l'acceptation sereine du changement et la confiance en la sagesse de l'univers.",
    narrative: "Au centre du cosmos, une roue mystérieuse tourne sans fin, portant les créatures de l'existence dans sa danse éternelle. Certaines montent vers la lumière, d'autres redescendent vers l'ombre, mais toutes participent au grand mouvement de la vie.",
    positiveAspects: "Vous êtes en harmonie avec les cycles naturels de l'existence et savez accueillir les changements avec confiance. Votre adaptabilité est une force précieuse.",
    vigilancePoints: "Attention à la passivité excessive ou à la tendance à tout attribuer au hasard. Votre action consciente peut influencer positivement les cycles.",
    reflectionQuestion: "Quel cycle de votre vie arrive à son terme ? Comment pouvez-vous accueillir les changements à venir avec plus de confiance ?"
  },
  {
    id: 11,
    name: "La Justice",
    arcana: "major",
    psychologicalMeaning: "Représente l'équité, la vérité et la loi de cause à effet. Elle symbolise la prise de responsabilité pour vos actions et la recherche d'équilibre en toutes choses.",
    keywords: ["Équité", "Vérité", "Équilibre", "Responsabilité"],
    personalGrowth: "Prenez la responsabilité de vos actions et de leurs conséquences. Cherchez la vérité et l'équité dans vos relations avec les autres et vous-même.",
    uprightMeaning: "La justice et l'équilibre sont rétablis. La vérité prévaudra, et des résultats équitables sont assurés par une action honnête.",
    reversedMeaning: "Vous évitez peut-être la responsabilité ou êtes trop dur dans le jugement. Réfléchissez où plus d'équilibre et de compassion sont nécessaires.",
    therapeuticInsight: "La vraie justice inclut la compassion pour vous-même. Comme un juge juste et sage, apprenez à vous tenir responsable tout en maintenant la compréhension pour vos imperfections humaines et le voyage de croissance.",
    image: laJustice,
    shortReading: "La Justice vous appelle à l'équité, la responsabilité et la recherche de la vérité authentique.",
    deepReading: "Garante de l'équilibre cosmique, elle pèse chaque action avec une précision divine. Son épée tranche dans le mensonge pour révéler la vérité, tandis que sa balance mesure la justesse de chaque intention. Elle vous enseigne la responsabilité consciente.",
    narrative: "Dans le temple de la vérité, une juge impartiale tient les instruments de la justesse. Ses yeux voient au-delà des apparences, son cœur bat au rythme de l'équité. Elle nous rappelle que chaque action porte en elle sa propre conséquence.",
    positiveAspects: "Votre sens de l'équité et votre intégrité vous guident vers des décisions justes. Vous savez prendre vos responsabilités avec maturité et discernement.",
    vigilancePoints: "Attention à la rigidité excessive ou au jugement trop sévère envers vous-même et les autres. La justice doit s'accompagner de compassion.",
    reflectionQuestion: "Dans quelle situation devez-vous rétablir l'équilibre ou prendre vos responsabilités ? Comment pouvez-vous être plus juste envers vous-même ?"
  },
  {
    id: 12,
    name: "Le Pendu",
    arcana: "major",
    psychologicalMeaning: "Représente l'abandon, les nouvelles perspectives et la sagesse trouvée dans l'immobilité. Il suggère de lâcher prise du contrôle pour gagner de nouveaux insights.",
    keywords: ["Abandon", "Nouvelle perspective", "Sacrifice", "Illumination"],
    personalGrowth: "Parfois le progrès nécessite de lâcher prise et de voir les choses sous un nouvel angle. Abandonnez le contrôle et permettez à de nouvelles perspectives d'émerger.",
    uprightMeaning: "L'abandon et l'immobilité apportent de nouveaux insights. Ce qui semble être une pause est en fait une période de croissance intérieure et de sagesse profondes.",
    reversedMeaning: "Vous luttez peut-être contre l'abandon nécessaire ou faites des sacrifices inutiles. Réfléchissez à ce qui mérite vraiment votre énergie et vos efforts.",
    therapeuticInsight: "Parfois l'action la plus puissante est l'inaction consciente. Comme la patience requise dans le travail thérapeutique profond, faites confiance que cette période de suspension réorganise votre monde intérieur de belles manières.",
    image: lePendu,
    shortReading: "Le Pendu vous enseigne la sagesse de l'attente et la révélation qui naît du lâcher-prise.",
    deepReading: "Suspendu entre ciel et terre, il découvre que l'immobilité apparente cache une transformation profonde. Son sacrifice volontaire révèle de nouvelles perspectives et une sagesse que seule l'acceptation peut dévoiler.",
    narrative: "Attaché à l'Arbre de Vie, un homme sourit paisiblement. Sa position inversée lui révèle un monde nouveau, où les valeurs terrestres s'effacent pour laisser place à une compréhension plus haute. Il nous enseigne que parfois, ne rien faire est faire beaucoup.",
    positiveAspects: "Votre capacité d'acceptation et votre ouverture aux nouvelles perspectives vous enrichissent. Cette période d'attente révèle des vérités précieuses.",
    vigilancePoints: "Attention à la passivité excessive ou à la complaisance dans l'inaction. L'abandon doit mener à l'illumination, non à la résignation.",
    reflectionQuestion: "À quoi devez-vous renoncer pour découvrir une perspective nouvelle ? Quelle sagesse cette période d'attente vous révèle-t-elle ?"
  },
  {
    id: 13,
    name: "La Mort",
    arcana: "major",
    psychologicalMeaning: "Symbolise la transformation, les fins et les nouveaux commencements. Elle représente le processus psychologique de lâcher prise de ce qui ne vous sert plus.",
    keywords: ["Transformation", "Fins", "Renouveau", "Libération"],
    personalGrowth: "Embrassez les fins nécessaires dans votre vie. Qu'est-ce qui doit mourir en vous pour que quelque chose de nouveau puisse naître ? La transformation nécessite la libération.",
    uprightMeaning: "Une transformation profonde est en cours. Libérez ce qui ne vous sert plus pour faire place à une nouvelle croissance et possibilités.",
    reversedMeaning: "Vous résistez peut-être au changement nécessaire ou vous accrochez à ce qui doit être libéré. Faites confiance que les fins créent l'espace pour de nouveaux commencements.",
    therapeuticInsight: "Chaque fin contient la graine d'un nouveau commencement. Comme le processus naturel de la thérapie où les anciens schémas doivent se dissoudre pour faire place à la guérison, faites confiance que ce qui se termine fait place à quelque chose de plus aligné avec qui vous devenez.",
    image: laMort,
    shortReading: "La Mort annonce une transformation profonde et la libération nécessaire pour renaître.",
    deepReading: "Faucheuse des illusions et des attachements dépassés, elle n'apporte pas la fin mais la métamorphose. Son passage libère l'âme de ses anciens liens pour permettre une renaissance authentique. Elle vous enseigne que mourir à l'ancien ouvre les portes du nouveau.",
    narrative: "À travers les champs de l'existence, une figure mystérieuse avance avec douceur. Là où elle passe, les formes anciennes se dissolvent pour laisser place à de nouvelles possibilités. Elle nous rappelle que la mort n'est qu'une transformation, un passage vers plus de vie.",
    positiveAspects: "Votre capacité de transformation et votre courage face au changement vous permettent de renaître continuellement. Vous savez lâcher prise de ce qui ne vous sert plus.",
    vigilancePoints: "Attention à la résistance excessive au changement ou à l'attachement destructeur au passé. Certaines fins sont nécessaires à votre évolution.",
    reflectionQuestion: "Qu'est-ce qui doit mourir en vous pour permettre votre renaissance ? Comment pouvez-vous accueillir cette transformation avec plus de confiance ?"
  },
  {
    id: 14,
    name: "Tempérance",
    arcana: "major",
    psychologicalMeaning: "Représente la modération, la patience et l'art de mélanger les opposés. Elle symbolise trouver le juste milieu et guérir par l'intégration.",
    keywords: ["Modération", "Patience", "Équilibre", "Guérison"],
    personalGrowth: "Pratiquez la patience et la modération. La guérison vient en trouvant l'équilibre et en intégrant tous les aspects de vous-même harmonieusement.",
    uprightMeaning: "La patience et la modération créent l'harmonie et la guérison. Mélangez les forces opposées dans votre vie pour trouver l'équilibre parfait.",
    reversedMeaning: "Vous manquez peut-être de patience ou allez aux extrêmes. Réfléchissez où plus d'équilibre et de progrès graduel vous serviraient mieux.",
    therapeuticInsight: "La guérison est souvent un processus doux et graduel d'intégration. Comme mélanger des couleurs pour créer de nouvelles teintes, vous apprenez à combiner tous les aspects de vous-même en un tout harmonieux et authentique.",
    image: temperance,
    shortReading: "Tempérance vous guide vers l'équilibre et l'art de mélanger harmonieusement les opposés.",
    deepReading: "Alchimiste de l'âme, l'ange de Tempérance mélange les eaux de la vie pour créer l'élixir de la guérison. Ses gestes patients révèlent que la transformation véritable naît de la douceur et de la persévérance, non de la violence.",
    narrative: "Au bord de l'étang de la conscience, un ange aux ailes dorées verse délicatement l'essence d'un calice à l'autre. Chaque geste crée une nouvelle harmonie, révélant que la vraie alchimie transforme les contraires en unité parfaite.",
    positiveAspects: "Votre patience et votre sens de la mesure créent l'harmonie autour de vous. Vous savez intégrer les opposés avec sagesse et créer des équilibres durables.",
    vigilancePoints: "Attention à l'excès de prudence ou à la lenteur paralysante. L'équilibre ne doit pas devenir stagnation ou évitement de l'action nécessaire.",
    reflectionQuestion: "Quels opposés en vous demandent à être réconciliés ? Comment votre patience peut-elle créer une transformation durable ?"
  },
  {
    id: 15,
    name: "Le Diable",
    arcana: "major",
    psychologicalMeaning: "Représente l'esclavage, la tentation et les aspects d'ombre de la personnalité. Il met en évidence les domaines où vous pourriez vous sentir piégé par vos propres choix ou addictions.",
    keywords: ["Esclavage", "Ombre", "Tentation", "Matérialisme"],
    personalGrowth: "Examinez ce qui vous asservit - que ce soient des habitudes, des pensées ou des relations. Reconnaissez que vous avez le pouvoir de vous libérer des limitations auto-imposées.",
    uprightMeaning: "Examinez ce qui vous lie et reconnaissez votre pouvoir de vous libérer. Les désirs matériels ou les schémas malsains peuvent limiter votre croissance.",
    reversedMeaning: "Vous commencez à vous libérer des croyances limitantes ou des schémas addictifs. Continuez ce voyage vers la libération et l'expression authentique de soi.",
    therapeuticInsight: "Affronter votre ombre avec compassion est le chemin vers la liberté. Comme le courage requis pour examiner les schémas difficiles en thérapie, reconnaissez ce qui vous lie sans jugement, sachant que vous avez le pouvoir de choisir différemment.",
    image: leDiable,
    shortReading: "Le Diable révèle vos chaînes invisibles et votre pouvoir de libération authentique.",
    deepReading: "Gardien des illusions et des attachements trompeurs, il révèle les chaînes que nous nous forgeons nous-mêmes. Son apparence terrifiante cache une vérité libératrice : ces liens ne tiennent que par notre croyance en leur pouvoir.",
    narrative: "Dans les cavernes de l'inconscient, une figure imposante règne sur les désirs et les peurs. Mais regardez bien : les chaînes qu'il impose sont assez lâches pour être ôtées. Il nous enseigne que nous sommes souvent nos propres geôliers.",
    positiveAspects: "Votre lucidité face à vos propres limitations vous donne le pouvoir de vous en libérer. Vous développez une conscience claire de vos mécanismes inconscients.",
    vigilancePoints: "Attention aux addictions, aux dépendances excessives ou aux comportements destructeurs. Certaines chaînes sont plus réelles que d'autres et demandent une action concrète.",
    reflectionQuestion: "Quelles chaînes invisibles limitent votre liberté ? Comment pouvez-vous reconnaître et transformer vos mécanismes d'auto-sabotage ?"
  },
  {
    id: 16,
    name: "La Maison Dieu",
    arcana: "major",
    psychologicalMeaning: "Représente le changement soudain, la révélation et l'effondrement de fausses structures. Elle symbolise la destruction nécessaire qui mène à la libération.",
    keywords: ["Changement soudain", "Révélation", "Percée", "Libération"],
    personalGrowth: "Parfois les structures de votre vie doivent s'effondrer pour que la croissance se produise. Embrassez les insights soudains et les changements comme des opportunités de libération.",
    uprightMeaning: "Des révélations soudaines et des moments de percée brisent les illusions. Ce qui semble destructeur libère en fait l'espace pour la vérité authentique.",
    reversedMeaning: "Vous évitez peut-être les changements nécessaires ou vous accrochez à des structures qui s'effondrent. Parfois la destruction est requise pour reconstruire sur des fondations plus solides.",
    therapeuticInsight: "Parfois les moments de percée viennent déguisés en effondrements. Comme ces moments pivots en thérapie quand les fausses croyances s'effondrent, faites confiance que ce qui tombe n'était jamais destiné à contenir votre vrai moi.",
    image: laMaisonDieu,
    shortReading: "La Maison Dieu annonce des révélations soudaines et l'effondrement nécessaire des illusions.",
    deepReading: "Tour orgueilleuse dressée vers les cieux, elle s'effondre sous l'éclair de la vérité divine. Sa chute libère les âmes emprisonnées dans les dogmes et les fausses certitudes. Elle vous enseigne que parfois, il faut tout perdre pour tout retrouver.",
    narrative: "Dans un fracas de tonnerre, la tour de l'orgueil s'effrite sous la foudre céleste. Ceux qui y étaient enfermés tombent vers la terre, mais leur chute devient libération. Ils découvrent que la destruction des illusions ouvre la voie à la vérité.",
    positiveAspects: "Votre courage face aux révélations et votre capacité de remettre en question les structures obsolètes vous libèrent. Vous accueillez les changements soudains avec résilience.",
    vigilancePoints: "Attention aux bouleversements destructeurs ou aux révélations qui blessent inutilement. Toute vérité n'a pas besoin d'être dite brutalement.",
    reflectionQuestion: "Quelles fausses certitudes s'effondrent dans votre vie ? Comment cette destruction peut-elle ouvrir la voie à une reconstruction authentique ?"
  },
  {
    id: 17,
    name: "L'Étoile",
    arcana: "major",
    psychologicalMeaning: "Symbolise l'espoir, l'inspiration et la guidance spirituelle. Elle représente le renouveau après des moments difficiles et la connexion à votre but supérieur.",
    keywords: ["Espoir", "Inspiration", "Guidance", "Renouveau"],
    personalGrowth: "Faites confiance à votre guidance intérieure et maintenez l'espoir pour l'avenir. Vous êtes guidé vers votre plus grand bien et votre but spirituel.",
    uprightMeaning: "L'espoir et l'inspiration illuminent votre chemin vers l'avant. Faites confiance à la guidance divine et à votre propre lumière intérieure pour vous mener vers la guérison et le renouveau.",
    reversedMeaning: "Vous perdez peut-être espoir ou vous sentez déconnecté de votre but. Rappelez-vous que même dans l'obscurité, votre lumière intérieure continue de briller.",
    therapeuticInsight: "Après chaque nuit noire de l'âme vient une aube d'espoir renouvelé. Comme la confiance qui se développe dans une relation thérapeutique guérissante, vous apprenez à faire confiance aux forces plus grandes qui soutiennent votre croissance et bien-être.",
    image: lEtoile,
    shortReading: "L'Étoile illumine votre chemin d'espoir et renouvelle votre foi en l'avenir.",
    deepReading: "Après la tempête de la tour, elle verse les eaux de la guérison sur la terre assoiffée. Sa nudité révèle la pureté retrouvée, ses gestes nourrissent la renaissance. Elle vous enseigne que l'espoir véritable naît après les plus grandes épreuves.",
    narrative: "Sous le voile étoilé de la nuit, une femme d'une beauté pure puise l'eau de la vie pour régénérer le monde. Chaque goutte qu'elle verse rallume l'espoir et fait renaître la foi. Elle nous rappelle que la lumière brille toujours, même dans l'obscurité.",
    positiveAspects: "Votre foi et votre optimisme naturel inspirent votre entourage. Vous savez puiser dans les sources profondes de l'espoir et de la régénération spirituelle.",
    vigilancePoints: "Attention à l'idéalisme excessif ou aux attentes irréalistes. L'espoir doit s'enraciner dans la réalité pour porter ses fruits.",
    reflectionQuestion: "Quelle source d'inspiration nourrit votre espoir ? Comment votre lumière intérieure peut-elle guider et inspirer votre entourage ?"
  },
  {
    id: 18,
    name: "La Lune",
    arcana: "major",
    psychologicalMeaning: "Représente l'illusion, l'intuition et l'esprit inconscient. Elle met en évidence le besoin de faire confiance à vos instincts tout en étant conscient de la tromperie ou l'auto-tromperie.",
    keywords: ["Illusion", "Intuition", "Rêves", "Incertitude"],
    personalGrowth: "Faites confiance à votre intuition mais soyez conscient des illusions et de l'auto-tromperie. Portez attention à vos rêves et messages inconscients.",
    uprightMeaning: "Faites confiance à votre intuition pour naviguer à travers les illusions et incertitudes. Votre esprit inconscient révèle des vérités importantes à travers les rêves et symboles.",
    reversedMeaning: "Les illusions se dissipent et la vérité est révélée. Vous vous dirigez de la confusion vers la clarté et la compréhension authentique.",
    therapeuticInsight: "L'inconscient parle à travers les symboles, rêves et intuition. Comme apprendre à comprendre le langage de la psyché en thérapie, faites confiance à votre connaissance intérieure même quand le chemin semble incertain.",
    image: laLune,
    shortReading: "La Lune révèle les mystères de l'inconscient et vous guide dans le brouillard des illusions.",
    deepReading: "Astre nocturne aux reflets trompeurs, elle règne sur le royaume des rêves et des illusions. Son éclat argenté révèle autant qu'il cache, vous invitant à naviguer dans les eaux troubles de l'inconscient avec prudence et intuition.",
    narrative: "Dans la pénombre lunaire, deux chiens hurlent vers l'astre mystérieux tandis qu'une écrevisse émerge des profondeurs. Ce paysage onirique nous enseigne que la vérité se cache parfois derrière les apparences et que l'intuition guide mieux que la raison.",
    positiveAspects: "Votre intuition et votre connection au monde des rêves s'approfondissent. Vous développez une sensibilité accrue aux messages subtils de l'inconscient.",
    vigilancePoints: "Attention aux illusions, aux peurs irrationnelles ou à la confusion entre imagination et réalité. Tous les mirages ne sont pas des visions.",
    reflectionQuestion: "Quelles vérités vos rêves et votre intuition tentent-ils de vous révéler ? Comment distinguer les illusions des véritables insights ?"
  },
  {
    id: 19,
    name: "Le Soleil",
    arcana: "major",
    psychologicalMeaning: "Symbolise la joie, le succès et la vitalité. Il représente l'accomplissement personnel et l'expression de votre vrai moi.",
    keywords: ["Joie", "Succès", "Vitalité", "Authenticité"],
    personalGrowth: "Embrassez la joie et célébrez vos accomplissements. Laissez votre moi authentique briller et partagez votre énergie positive avec les autres.",
    uprightMeaning: "Pure joie, succès et vitalité rayonnent de vous. Votre moi authentique brille, apportant chaleur et bonheur à tous autour de vous.",
    reversedMeaning: "La joie peut sembler temporaire ou voilée par le doute. Rappelez-vous que votre lumière est constante - ce qui est nécessaire est de dégager ce qui l'obscurcit.",
    therapeuticInsight: "Votre joie authentique est un cadeau au monde. Comme la chaleur d'une présence thérapeutique authentique, votre lumière quand librement exprimée crée la guérison et le bonheur non seulement pour vous, mais pour tous ceux que vous rencontrez.",
    image: leSoleil,
    shortReading: "Le Soleil illumine votre vie de joie pure et révèle votre authenticité rayonnante.",
    deepReading: "Astre de vie et de vérité, il dissipe toutes les ombres pour révéler la beauté du monde dans sa simplicité parfaite. Son éclat réchauffe les cœurs et fait danser l'enfant de la joie. Il vous enseigne que bonheur et simplicité sont synonymes.",
    narrative: "Dans un jardin baigné de lumière dorée, un enfant chevauche librement son cheval blanc. Derrière eux, les tournesols se tournent vers l'astre bienfaisant qui nourrit toute vie. Cette image nous rappelle que la joie véritable jaillit de l'innocence retrouvée.",
    positiveAspects: "Votre joie de vivre et votre authenticité rayonnent naturellement. Vous créez la lumière et la chaleur partout où vous passez, inspirant les autres par votre simple présence.",
    vigilancePoints: "Attention à l'excès d'optimisme ou à la naïveté face aux réalités difficiles. La joie authentique intègre aussi l'ombre sans s'y perdre.",
    reflectionQuestion: "Comment votre joie authentique peut-elle illuminer votre quotidien ? Qu'est-ce qui vous empêche encore de briller pleinement ?"
  },
  {
    id: 20,
    name: "Le Jugement",
    arcana: "major",
    psychologicalMeaning: "Représente la renaissance, l'appel intérieur et l'éveil spirituel. Il symbolise répondre à un appel supérieur et embrasser votre vrai but.",
    keywords: ["Renaissance", "Appel", "Éveil", "Pardon"],
    personalGrowth: "Écoutez votre appel intérieur et embrassez l'éveil spirituel. Pardonnez-vous et aux autres en entrant dans une nouvelle phase de vie.",
    uprightMeaning: "Un appel supérieur vous éveille à votre vrai but. Les expériences passées s'intègrent en sagesse en entrant dans une nouvelle phase de croissance spirituelle.",
    reversedMeaning: "Vous évitez peut-être votre appel ou êtes trop dur dans l'auto-jugement. Pratiquez le pardon et faites confiance à votre capacité de renouveau et croissance.",
    therapeuticInsight: "Le vrai éveil inclut l'intégration compatissante de toutes vos expériences. Comme l'achèvement du travail thérapeutique profond, vous êtes prêt à embrasser votre moi authentique complet et votre but avec amour et sagesse.",
    image: leJugement,
    shortReading: "Le Jugement sonne l'heure de votre renaissance et de l'éveil à votre véritable mission.",
    deepReading: "L'ange du renouveau sonne la trompette de la résurrection spirituelle. Son appel réveille les âmes endormies pour les mener vers une existence plus élevée. Il vous enseigne que chaque fin contient les germes d'un commencement plus authentique.",
    narrative: "Du ciel empourpré, l'archange Gabriel lance son appel divin. En bas, les morts se lèvent de leurs tombeaux, non pour revivre l'ancien, mais pour embrasser une vie nouvelle et plus vraie. C'est l'heure du grand réveil de la conscience.",
    positiveAspects: "Votre capacité de renouvellement et votre ouverture aux appels supérieurs vous permettent d'évoluer constamment. Vous intégrez vos expériences passées avec sagesse.",
    vigilancePoints: "Attention aux jugements trop sévères envers votre passé ou aux attentes irréalistes de perfection. Le pardon envers soi-même est essentiel à la renaissance.",
    reflectionQuestion: "Quel appel profond résonne en vous actuellement ? Comment pouvez-vous honorer votre évolution tout en pardonnant vos erreurs passées ?"
  },
  {
    id: 21,
    name: "Le Monde",
    arcana: "major",
    psychologicalMeaning: "Représente l'achèvement, l'accomplissement et l'atteinte de la complétude. Il symbolise l'intégration réussie de tous les aspects de vous-même.",
    keywords: ["Achèvement", "Accomplissement", "Complétude", "Réussite"],
    personalGrowth: "Célébrez vos accomplissements et l'achèvement de cycles importants. Vous avez intégré divers aspects de vous-même en complétude.",
    uprightMeaning: "L'accomplissement complet et la complétude sont atteints. Vous avez intégré avec succès tous les aspects de votre voyage en sagesse et expression authentique de soi.",
    reversedMeaning: "L'achèvement peut sembler retardé ou incomplet. Faites confiance que vous intégrez encore des leçons importantes et que la complétude est un processus continu.",
    therapeuticInsight: "Vous avez fait le tour complet dans votre voyage de compréhension de soi. Comme l'achèvement réussi du travail thérapeutique, vous portez maintenant en vous la sagesse et les outils pour continuer à grandir avec confiance et auto-compassion.",
    image: leMonde,
    shortReading: "Le Monde couronne votre parcours d'accomplissement et révèle votre complétude retrouvée.",
    deepReading: "Dans la couronne lauréate de l'accomplissement, la danseuse cosmique célèbre l'achèvement du grand œuvre. Entourée des symboles des quatre éléments, elle incarne l'harmonie parfaite de tous les aspects de l'être. C'est la réalisation de votre potentiel total.",
    narrative: "Au centre de l'univers symbolique, une figure gracieuse danse dans l'éternité. Les quatre créatures sacrées la contemplent avec respect, reconnaissant en elle l'accomplissement de tous leurs mystères. Elle nous enseigne que la vraie complétude unit tous les contraires.",
    positiveAspects: "Votre accomplissement personnel et votre capacité d'intégration vous placent dans une position d'harmonie et de plénitude. Vous inspirez par votre exemple d'accomplissement authentique.",
    vigilancePoints: "Attention à la complaisance ou à l'orgueil de l'accomplissement. La vraie sagesse reste humble et continue d'apprendre même dans la réussite.",
    reflectionQuestion: "Quels aspects de votre être avez-vous réussi à harmoniser ? Comment votre accomplissement peut-il servir et inspirer le monde autour de vous ?"
  }
];

export function getRandomCards(count: 1 | 3 | 5): TarotCard[] {
  const shuffled = [...majorArcana].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}