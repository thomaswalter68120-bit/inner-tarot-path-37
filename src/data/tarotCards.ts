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
    image: leMat
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
    image: leBateleur
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
    image: laPapesse
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
    image: lImperatrice
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
    image: lEmpereur
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
    image: lePape
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
    image: lAmoureux
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
    image: leChariot
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
    image: laForce
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
    image: lErmite
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
    image: laRoueDeFortune
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
    image: laJustice
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
    image: lePendu
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
    image: laMort
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
    image: temperance
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
    image: leDiable
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
    image: laMaisonDieu
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
    image: lEtoile
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
    image: laLune
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
    image: leSoleil
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
    image: leJugement
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
    image: leMonde
  }
];

export function getRandomCards(count: 1 | 3 | 5): TarotCard[] {
  const shuffled = [...majorArcana].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}