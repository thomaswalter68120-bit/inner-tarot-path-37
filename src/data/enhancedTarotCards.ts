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
    shortReading: "Le Bateleur révèle votre pouvoir de manifestation et votre potentiel créateur.",
    deepReading: "Maître des quatre éléments, le Bateleur possède tous les outils nécessaires pour transformer l'intention en réalité. Il vous rappelle que vous avez en vous la capacité de créer votre propre destinée par la concentration de votre volonté et l'usage sage de vos talents.",
    narrative: "Dans son atelier mystique, l'alchimiste arrange ses instruments avec précision. Chaque objet a sa place, chaque geste a son sens. Il connaît le secret de la transformation : point de magie extérieure, mais l'art de canaliser l'énergie vitale qui coule en lui.",
    positiveAspects: "Votre capacité de concentration et votre habileté naturelle vous permettent de concrétiser vos projets. Vous possédez un potentiel créateur remarquable et la détermination nécessaire.",
    vigilancePoints: "Gardez-vous de la tentation de manipulation ou d'utiliser vos talents à des fins purement égoïstes. L'orgueil pourrait vous faire perdre de vue l'essentiel.",
    reflectionQuestion: "Quels talents en vous demandent à être développés ? Comment pouvez-vous mieux canaliser votre énergie créatrice au service de vos aspirations les plus nobles ?"
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
    shortReading: "La Papesse vous invite à écouter la sagesse silencieuse de votre intuition profonde.",
    deepReading: "Gardienne des mystères intérieurs, la Papesse détient les clés de la connaissance intuitive. Assise entre les colonnes de la dualité, elle vous enseigne l'art de l'écoute intérieure et la confiance en cette voix silencieuse qui sait sans expliquer.",
    narrative: "Au cœur du temple, dans le silence sacré, la prêtresse médite. Le voile derrière elle cache et révèle à la fois les mystères de l'âme. Elle sait que la vraie connaissance ne se trouve pas dans les livres, mais dans l'écoute patiente du murmure intérieur.",
    positiveAspects: "Votre intuition est particulièrement aiguisée et votre capacité d'introspection vous révèle des vérités profondes. Vous possédez une sagesse naturelle qui guide vos pas.",
    vigilancePoints: "Attention à ne pas vous isoler excessivement ou à devenir trop secrète. L'introspection ne doit pas devenir fuite du monde réel.",
    reflectionQuestion: "Quelle vérité intérieure cherche à émerger en vous ? Comment pouvez-vous créer plus d'espace pour l'écoute de votre sagesse profonde ?"
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
    shortReading: "L'Impératrice apporte abondance créative et énergie nourricière dans votre vie.",
    deepReading: "Souveraine de la création et de l'abondance, l'Impératrice règne sur les forces de vie et de croissance. Elle vous invite à honorer votre nature créatrice et à cultiver la beauté sous toutes ses formes, en vous rappelant que donner et recevoir sont les deux faces d'un même élan vital.",
    narrative: "Dans son jardin luxuriant, la déesse-mère veille sur chaque bourgeon, chaque fleur. Son amour n'a pas de limite, sa générosité pas de fin. Elle enseigne que la véritable abondance naît de l'amour donné librement et de la confiance en la richesse infinie de la vie.",
    positiveAspects: "Votre générosité naturelle et votre sens esthétique attirent l'abondance. Vous avez un don pour créer la beauté et nourrir ce qui grandit autour de vous.",
    vigilancePoints: "Veillez à ne pas vous épuiser en donnant toujours aux autres. Votre générosité pourrait parfois masquer un besoin de reconnaissance ou de contrôle.",
    reflectionQuestion: "Comment pouvez-vous mieux honorer vos besoins créatifs ? Quelle forme de beauté votre âme aspire-t-elle à faire naître dans le monde ?"
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
    shortReading: "L'Empereur vous appelle à structurer votre vie avec sagesse et autorité bienveillante.",
    deepReading: "Architecte de l'ordre et gardien de la stabilité, l'Empereur incarne la force organisatrice qui transforme le chaos en harmonie. Il vous enseigne l'art du leadership authentique : celui qui protège sans étouffer, qui guide sans contraindre.",
    narrative: "Sur son trône de pierre, le souverain contemple son royaume. Chaque décision est pesée, chaque action mesurée. Il a appris que la vraie force ne se montre pas dans la domination, mais dans la capacité à créer un cadre où la vie peut s'épanouir en sécurité.",
    positiveAspects: "Votre sens de l'organisation et votre capacité de leadership vous permettent de créer des structures solides. Vous inspirez confiance et stabilité à votre entourage.",
    vigilancePoints: "Gardez-vous de la rigidité excessive ou du besoin de tout contrôler. L'autorité véritable laisse place à la souplesse et à l'adaptation.",
    reflectionQuestion: "Dans quels domaines de votre vie avez-vous besoin de plus de structure ? Comment pouvez-vous exercer votre autorité de manière à la fois ferme et bienveillante ?"
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
    shortReading: "Le Pape vous guide vers la sagesse ancestrale et l'enseignement spirituel.",
    deepReading: "Pont entre le terrestre et le divin, le Pape transmet la sagesse des anciens aux générations nouvelles. Il vous invite à honorer les traditions qui ont fait leurs preuves tout en gardant votre discernement personnel pour adapter ces enseignements à votre chemin unique.",
    narrative: "Dans la bibliothèque sacrée, le maître enseigne avec patience. Ses mots portent le poids des siècles, sa présence rayonne la sérénité de celui qui a traversé bien des épreuves. Il rappelle que la sagesse se transmet de cœur à cœur, d'âme à âme.",
    positiveAspects: "Votre respect pour la tradition et votre capacité d'apprentissage vous connectent à une sagesse profonde. Vous savez reconnaître les enseignements utiles et les guides authentiques.",
    vigilancePoints: "Attention à ne pas devenir trop dogmatique ou à accepter aveuglément toute autorité. Votre discernement personnel reste votre meilleur guide.",
    reflectionQuestion: "Quels enseignements ou traditions vous nourrissent vraiment ? Comment pouvez-vous intégrer cette sagesse ancestrale à votre chemin personnel unique ?"
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
    shortReading: "L'Amoureux vous place face à un choix important guidé par les valeurs du cœur.",
    deepReading: "À la croisée des chemins, l'Amoureux doit choisir entre différentes voies qui s'offrent à lui. Cette carte révèle l'importance de l'alignement entre vos valeurs profondes et vos actions, vous rappelant que les vrais choix ne se font pas avec la tête seule, mais avec le cœur unifié.",
    narrative: "Sous l'œil bienveillant de l'ange, deux chemins se dessinent. Le voyageur hésite, non par peur, mais par respect pour la portée de sa décision. Il sait qu'aimer, c'est choisir, et que choisir avec son cœur, c'est s'engager tout entier.",
    positiveAspects: "Votre capacité d'aimer authentiquement et de faire des choix alignés avec vos valeurs attire l'harmonie dans votre vie. Vous savez créer des liens profonds et durables.",
    vigilancePoints: "Évitez l'indécision paralysante ou les choix basés uniquement sur l'attrait superficiel. Prenez le temps de clarifier vos valeurs profondes avant d'agir.",
    reflectionQuestion: "Quel choix important attend votre décision ? Quelles sont les valeurs profondes qui peuvent vous guider dans cette situation ?"
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
    shortReading: "Le Chariot annonce une victoire obtenue par la maîtrise de soi et la détermination.",
    deepReading: "Conducteur de son propre destin, le héros du Chariot maîtrise les forces opposées qui tirent sa monture dans des directions contraires. Il incarne la victoire de la volonté unifiée sur les dispersions intérieures, vous enseignant l'art de canaliser toute votre énergie vers un objectif clair.",
    narrative: "Les chevaux se cabrent, l'un noir, l'autre blanc, symbolisant les forces contraires qui habitent tout être. Mais le conducteur reste imperturbable, ses mains fermes sur les rênes de sa destinée. Il a appris que la vraie maîtrise commence par celle de soi-même.",
    positiveAspects: "Votre détermination et votre capacité de concentration vous permettent de surmonter les obstacles. Vous savez harmoniser vos différentes énergies pour avancer efficacement.",
    vigilancePoints: "Attention à ne pas devenir rigide dans votre approche ou à ignorer les signaux qui vous invitent à ajuster votre direction. La force sans souplesse peut devenir destruction.",
    reflectionQuestion: "Quelles forces opposées en vous demandent à être réconciliées ? Comment pouvez-vous mieux canaliser votre énergie vers vos objectifs les plus importants ?"
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
    shortReading: "La Force révèle le pouvoir de la douceur et de la compassion sur la violence.",
    deepReading: "Dans un geste d'une infinie tendresse, la femme ouvre délicatement la gueule du lion. Elle incarne la force véritable : celle qui transforme la rage en puissance créatrice, qui apprivoise la bestialité par l'amour inconditionnel. Elle vous enseigne que la vraie victoire se gagne par la patience et la compassion.",
    narrative: "Face à la bête féroce, elle ne tremble pas. Ses mains caressent la crinière dorée, son regard apaise l'animal sauvage. Elle connaît le secret : ce qui résiste à la force cède à l'amour, ce qui se rebelle contre la contrainte s'apaise dans la tendresse.",
    positiveAspects: "Votre courage tranquille et votre compassion naturelle vous permettent de transformer les situations difficiles. Vous avez le don d'apaiser et de guérir par votre seule présence.",
    vigilancePoints: "Attention à ne pas confondre douceur et faiblesse, ni à accepter l'inacceptable par compassion mal placée. Votre bonté doit être accompagnée de discernement.",
    reflectionQuestion: "Quelle partie sauvage de vous-même a besoin de votre compassion plutôt que de votre jugement ? Comment pouvez-vous transformer votre force en source de guérison ?"
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
    shortReading: "L'Ermite vous guide vers une période de réflexion et de recherche intérieure.",
    deepReading: "Porteur de la lanterne de la sagesse, l'Ermite éclaire le chemin dans l'obscurité de l'ignorance. Sa retraite volontaire lui a permis de découvrir les trésors cachés de l'âme. Il vous invite à embrasser la solitude créatrice pour y puiser la lumière qui guidera non seulement vos pas, mais aussi ceux d'autrui.",
    narrative: "Au sommet de la montagne, loin du bruit du monde, le sage médite. Sa lanterne brille dans la nuit, phare pour les âmes perdues. Il a compris que parfois, il faut se retirer du monde pour mieux y revenir, enrichi de la sagesse du silence.",
    positiveAspects: "Votre capacité d'introspection et votre quête de vérité vous connectent à une sagesse profonde. Vous savez trouver la guidance dans le silence intérieur.",
    vigilancePoints: "Veillez à ne pas vous isoler excessivement ou à fuir vos responsabilités. La solitude doit être créatrice, non pas une échappatoire.",
    reflectionQuestion: "Quelle vérité importante cherche à émerger dans le silence de votre cœur ? Comment pouvez-vous créer plus d'espace pour l'écoute intérieure dans votre vie ?"
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
    shortReading: "La Roue de Fortune annonce un tournant favorable dans les cycles de votre vie.",
    deepReading: "Dans sa rotation éternelle, la Roue de Fortune nous rappelle que tout est mouvement, que rien n'est figé. Elle enseigne l'art de l'adaptation et la sagesse de l'acceptation, vous invitant à danser avec les changements plutôt que de leur résister.",
    narrative: "La roue tourne, inexorable, portant tantôt vers les sommets, tantôt vers les abîmes. Le sage qui la contemple sourit, car il sait que dans chaque descente se cache une remontée, dans chaque fin un nouveau commencement. Il a appris à surfer sur les vagues du destin.",
    positiveAspects: "Votre capacité d'adaptation et votre compréhension des cycles naturels vous permettent de naviguer les changements avec sérénité. Vous savez saisir les opportunités quand elles se présentent.",
    vigilancePoints: "Attention à ne pas devenir passif face aux événements ou à attribuer tout au hasard. Vous gardez votre libre arbitre même dans les cycles de la destinée.",
    reflectionQuestion: "Quel cycle de votre vie arrive à son terme et demande à être honoré ? Comment pouvez-vous mieux vous préparer aux changements qui s'annoncent ?"
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
    shortReading: "La Justice vous appelle à l'équité, à la vérité et à l'équilibre dans vos actions.",
    deepReading: "Assise sur son trône de vérité, la Justice tient la balance qui pèse les actes et l'épée qui tranche dans le vif des mensonges. Elle incarne l'équité parfaite et vous enseigne que chaque action porte en elle sa conséquence, que la vérité finit toujours par triompher.",
    narrative: "Dans la salle du jugement, elle siège impassible, les yeux bandés pour ne voir que l'essence des choses. Sa balance ne trompe jamais, son épée ne connaît que la justesse. Elle rappelle que l'univers tend naturellement vers l'équilibre et que nos actes nous reviennent toujours.",
    positiveAspects: "Votre sens de l'équité et votre intégrité vous attirent le respect et la confiance. Vous savez prendre vos responsabilités et agir selon vos principes éthiques.",
    vigilancePoints: "Gardez-vous de la rigidité excessive ou du perfectionnisme paralysant. La justice véritable sait tempérer la loi par la compassion.",
    reflectionQuestion: "Dans quelle situation de votre vie avez-vous besoin de plus d'équité ou de vérité ? Comment pouvez-vous mieux assumer vos responsabilités tout en restant bienveillant ?"
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
    shortReading: "Le Pendu vous enseigne la sagesse de l'abandon et de la patience créatrice.",
    deepReading: "Suspendu entre ciel et terre, le Pendu a choisi son sacrifice. Dans cette position inconfortable, il découvre une perspective nouvelle sur le monde et sur lui-même. Il vous enseigne que parfois, lâcher prise est le seul moyen d'avancer, que l'immobilité apparente peut être la plus féconde des actions.",
    narrative: "Tête en bas, il sourit paisiblement. Ce qui semblait être une punition est devenu une révélation. Dans l'abandon de sa volonté personnelle, il a trouvé une volonté plus haute. Il nous montre que parfois, cesser de lutter est le début de la vraie liberté.",
    positiveAspects: "Votre capacité de lâcher-prise et d'accepter les situations d'attente vous apporte une sagesse profonde. Vous savez trouver la paix dans l'incertitude.",
    vigilancePoints: "Attention à ne pas tomber dans la passivité excessive ou le sacrifice de soi inutile. L'abandon doit être conscient et choisi, non subi.",
    reflectionQuestion: "À quoi devez-vous renoncer pour permettre à quelque chose de nouveau d'émerger dans votre vie ? Quelle nouvelle perspective cette période d'attente peut-elle vous révéler ?"
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
    shortReading: "La Mort annonce une transformation profonde et nécessaire dans votre vie.",
    deepReading: "Cavalier inexorable de la transformation, la Mort fauche ce qui a fait son temps pour permettre la renaissance. Elle ne détruit pas, elle libère, elle ne tue pas, elle transforme. Cette carte vous invite à accueillir les fins nécessaires comme des portes vers un renouveau plus authentique.",
    narrative: "Sur son cheval pâle, elle avance sans hâte mais sans repos. Devant elle, rois et mendiants s'inclinent également. Elle ne connaît ni privilège ni exception, car elle sait que tout ce qui naît doit un jour se transformer. Elle porte en elle le secret de l'éternité : rien ne meurt vraiment, tout se métamorphose.",
    positiveAspects: "Votre capacité de transformation et de renouvellement vous permet de renaître de vos cendres. Vous savez honorer les fins pour accueillir les nouveaux commencements.",
    vigilancePoints: "Attention à ne pas provoquer des destructions inutiles ou à fuir toute forme d'engagement par peur de la permanence. Toute transformation n'est pas nécessaire.",
    reflectionQuestion: "Quelle partie de votre vie demande à être transformée ? Qu'êtes-vous prêt à laisser mourir en vous pour permettre votre renaissance ?"
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
    shortReading: "Tempérance vous guide vers l'équilibre et l'harmonie par la modération.",
    deepReading: "L'ange alchimiste mélange les eaux de la vie avec une patience infinie. D'une coupe à l'autre, il fait circuler l'énergie, créant l'harmonie parfaite entre les opposés. Il vous enseigne l'art délicat de l'équilibre et la sagesse de la mesure en toutes choses.",
    narrative: "Dans le jardin de l'éternité, l'ange aux ailes dorées accomplit le miracle quotidien de l'équilibre. Ni trop chaud ni trop froid, ni trop rapide ni trop lent, il trouve la juste mesure qui permet à la vie de s'épanouir dans toute sa beauté.",
    positiveAspects: "Votre sens de la mesure et votre patience naturelle vous permettent de créer l'harmonie dans votre vie. Vous savez intégrer les opposés en une synthèse créatrice.",
    vigilancePoints: "Attention à ne pas tomber dans la tiédeur ou l'indécision par excès de modération. L'équilibre n'est pas l'immobilisme.",
    reflectionQuestion: "Quels aspects opposés de votre personnalité demandent à être mieux intégrés ? Comment pouvez-vous pratiquer plus de patience et de modération dans votre quotidien ?"
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
    shortReading: "Le Diable révèle les chaînes que vous vous êtes forgées et votre pouvoir de les briser.",
    deepReading: "Maître des illusions et des dépendances, le Diable enchaîne ses prisonniers volontaires. Mais regardez bien : ses chaînes sont lâches, ses liens peuvent être brisés. Il vous montre que vos prisons sont souvent de votre propre création et que la libération commence par cette prise de conscience.",
    narrative: "Dans les souterrains de l'âme, il règne sur nos peurs et nos désirs inavoués. Ses prisonniers ne sont pas là par force, mais par choix inconscient. Il nous enseigne que reconnaître nos ombres est le premier pas vers la lumière.",
    positiveAspects: "Votre courage face à vos parts d'ombre vous donne une force authentique. Vous savez reconnaître vos faiblesses sans vous y complaire.",
    vigilancePoints: "Attention aux tentations qui vous éloignent de vos valeurs profondes. Gardez-vous de justifier les comportements destructeurs ou de céder au cynisme.",
    reflectionQuestion: "Quelles chaînes invisibles vous limitent dans votre épanouissement ? Êtes-vous prêt à prendre la responsabilité de votre libération ?"
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
    shortReading: "La Maison Dieu annonce un bouleversement libérateur qui détruit les illusions.",
    deepReading: "Frappée par l'éclair de la vérité, la tour s'effondre, libérant ses prisonniers. Cette destruction spectaculaire n'est pas une fin mais un commencement : elle brise les structures rigides qui empêchaient la croissance authentique. C'est l'illumination brutale qui révèle ce qui était caché.",
    narrative: "Dans un fracas assourdissant, les murs s'écroulent. Ce qui semblait solide comme le roc révèle sa fragilité face à la foudre de la révélation. Les habitants chutent, mais cette chute est en réalité un envol vers la liberté.",
    positiveAspects: "Votre capacité à renaître de vos ruines et à voir les opportunités dans les crises vous donne une résilience remarquable. Vous n'avez pas peur des changements radicaux.",
    vigilancePoints: "Attention à ne pas provoquer inutilement des destructions ou à rejeter tout ce qui était avant. Tous les bouleversements ne sont pas nécessaires.",
    reflectionQuestion: "Quelles fausses certitudes dans votre vie ont besoin d'être remises en question ? Êtes-vous prêt à accueillir une révélation qui pourrait tout changer ?"
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
    shortReading: "L'Étoile apporte espoir, inspiration et guidance céleste dans votre vie.",
    deepReading: "Sous la voûte étoilée, la déesse verse les eaux de la régénération. Une main puise dans l'inconscient, l'autre nourrit la terre de la conscience. Elle incarne l'espoir qui renaît après les épreuves et vous rappelle que vous êtes toujours guidé par les forces bienveillantes de l'univers.",
    narrative: "Après la tempête, elle apparaît dans toute sa grâce. Nue comme la vérité, pure comme l'intention, elle verse l'eau de la guérison sur les terres dévastées. Son étoile guide les voyageurs perdus vers leur destination véritable.",
    positiveAspects: "Votre capacité d'inspiration et votre foi en l'avenir illuminent votre chemin et celui des autres. Vous savez garder espoir même dans les moments difficiles.",
    vigilancePoints: "Attention à ne pas vous perdre dans des rêves irréalisables ou à négliger l'action concrète. L'inspiration doit se traduire en réalisation.",
    reflectionQuestion: "Quelle inspiration cherche à émerger en vous ? Comment pouvez-vous mieux vous connecter à votre guidance intérieure et partager votre lumière ?"
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
    shortReading: "La Lune vous invite à naviguer entre intuition et illusion dans la pénombre de l'incertitude.",
    deepReading: "Dans la clarté trompeuse du clair de lune, les formes se transforment et les certitudes vacillent. La Lune révèle que la vérité n'est pas toujours ce qu'elle semble être et que l'intuition peut être votre meilleur guide dans les territoires inconnus de l'âme.",
    narrative: "Deux tours se dressent, gardiennes du passage entre le conscient et l'inconscient. Dans cette lumière argentée, les chiens hurlent leurs peurs ancestrales tandis que l'écrevisse émerge des profondeurs. Tout ici parle le langage des symboles et des pressentiments.",
    positiveAspects: "Votre intuition développée et votre sensibilité aux signes subtils vous donnent accès à une compréhension profonde. Vous savez lire entre les lignes.",
    vigilancePoints: "Attention aux illusions et aux projections qui peuvent déformer votre perception. Vos peurs peuvent parfois se déguiser en intuitions.",
    reflectionQuestion: "Quels messages votre inconscient tente-t-il de vous transmettre ? Comment pouvez-vous mieux distinguer entre vraie intuition et projection de vos peurs ?"
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
    shortReading: "Le Soleil irradie joie, succès et vitalité pure dans tous les aspects de votre vie.",
    deepReading: "Dans sa splendeur dorée, le Soleil illumine tout sans distinction, offrant sa chaleur généreuse à chaque être vivant. Il représente l'épanouissement complet de votre essence authentique, la joie pure qui naît de l'alignement avec votre vérité profonde.",
    narrative: "Dans le jardin de l'accomplissement, l'enfant danse nu sous les rayons bienfaisants. Il n'a plus rien à cacher, plus rien à prouver. Sa joie simple et spontanée illumine le monde entier de sa lumière naturelle.",
    positiveAspects: "Votre joie contagieuse et votre authenticité rayonnante attirent le succès et l'harmonie. Vous inspirez les autres par votre simple présence lumineuse.",
    vigilancePoints: "Attention à ne pas devenir aveugle aux ombres ou insensible aux difficultés d'autrui dans votre bonheur. Votre lumière doit inclure la compassion.",
    reflectionQuestion: "Comment pouvez-vous exprimer plus pleinement votre joie authentique ? Quelle lumière unique portez-vous qui demande à briller dans le monde ?"
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
    shortReading: "Le Jugement annonce un réveil spirituel et l'appel vers votre mission de vie.",
    deepReading: "La trompette de l'ange résonne, réveillant les âmes de leur sommeil. Ce n'est pas un jugement de condamnation, mais un appel à la renaissance. Toutes vos expériences, bonnes et difficiles, se transforment en sagesse pour cette nouvelle étape de votre évolution spirituelle.",
    narrative: "Du ciel s'élève la mélodie de la rédemption. Les morts se lèvent, non pour être jugés, mais pour être transfigurés. Chaque épreuve traversée, chaque leçon apprise contribue à cette renaissance magnifique de l'âme retrouvée.",
    positiveAspects: "Votre capacité de pardon et de renouvellement vous permet de renaître constamment. Vous savez transformer vos expériences en sagesse et guidance pour autrui.",
    vigilancePoints: "Attention à ne pas devenir trop sévère envers vous-même ou autrui. Le vrai jugement est empreint de compassion et de compréhension.",
    reflectionQuestion: "Quel appel profond résonne en vous et demande une réponse ? Comment pouvez-vous mieux intégrer vos expériences passées en sagesse pour votre mission future ?"
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
    shortReading: "Le Monde couronne votre voyage par l'accomplissement et l'intégration complète.",
    deepReading: "Dans la danse éternelle de la complétude, la figure androgyne évolue au centre de l'univers. Entourée des quatre éléments et gardée par les symboles du sacré, elle incarne l'achèvement parfait du voyage initiatique. Tout est accompli, tout est en équilibre.",
    narrative: "Le cercle se ferme, l'ouroboros mord sa queue. Le voyageur qui était parti en quête de lui-même se retrouve enfin, riche de toutes ses expériences. Il danse maintenant au cœur de l'existence, uni à tout ce qui est.",
    positiveAspects: "Votre sens de l'accomplissement et votre vision globale vous permettent de réussir vos entreprises. Vous savez créer l'harmonie et l'unité dans votre vie.",
    vigilancePoints: "Attention à ne pas tomber dans la complaisance ou à penser que tout est définitivement acquis. L'accomplissement est un état dynamique, non statique.",
    reflectionQuestion: "Quel cycle de votre vie arrive à son accomplissement et mérite d'être célébré ? Comment pouvez-vous honorer ce que vous avez accompli tout en restant ouvert aux nouveaux commencements ?"
  }
];

export function getRandomCards(count: 1 | 3 | 5): TarotCard[] {
  const shuffled = [...majorArcana].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}