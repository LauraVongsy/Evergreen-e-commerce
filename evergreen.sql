-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : ven. 20 oct. 2023 à 09:32
-- Version du serveur : 8.0.31
-- Version de PHP : 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `evergreen`
--

-- --------------------------------------------------------

--
-- Structure de la table `bestsellers`
--

DROP TABLE IF EXISTS `bestsellers`;
CREATE TABLE IF NOT EXISTS `bestsellers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `bestsellers`
--

INSERT INTO `bestsellers` (`id`, `product_id`) VALUES
(1, 14),
(2, 12),
(3, 7),
(4, 34);

-- --------------------------------------------------------

--
-- Structure de la table `blog_articles`
--

DROP TABLE IF EXISTS `blog_articles`;
CREATE TABLE IF NOT EXISTS `blog_articles` (
  `id_article` int NOT NULL,
  `article_title` varchar(100) DEFAULT NULL,
  `article_description` text,
  `article_picture` varchar(150) DEFAULT NULL,
  `article_product` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id_article`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `blog_articles`
--

INSERT INTO `blog_articles` (`id_article`, `article_title`, `article_description`, `article_picture`, `article_product`) VALUES
(0, 'Quelle plante est faite pour vous?', 'Le monde des plantes d\'\'intérieur est vaste et diversifié, mais il y a une plante parfaite pour chacun d\'\'entre nous, que vous soyez débutant, intermédiaire ou expert en plantes vertes. Lorsque vous choisissez une plante, tenez compte de votre niveau d\'\'expérience, du temps que vous pouvez consacrer à leur entretien et de vos préférences personnelles. Dans cet article, nous vous guiderons pour trouver la plante idéale en fonction de votre profil. Les débutants apprécieront les plantes résilientes et faciles à entretenir, tandis que les experts se tourneront vers des variétés plus exigeantes. Que vous ayez une main verte ou que vous soyez en train de la développer, il y a une plante qui vous convient.', '/assets/articles/picCard1.png', NULL),
(1, 'Notre sélection d\'\'accessoires de jardinage d\'\'intérieur', 'Chez EverGreen, nous croyons que l\'\'entretien de vos plantes doit être à la fois pratique et éco-responsable. C\'\'est pourquoi nous avons soigneusement choisi une sélection d\'\'accessoires de jardinage d\'\'intérieur de haute qualité, fabriqués en France. Parmi nos produits, vous trouverez nos arrosoirs en plastique recyclé, conçus pour minimiser notre impact sur l\'\'environnement tout en facilitant l\'\'arrosage de vos plantes. De plus, nous proposons de petites pelles, des petits râteaux et d\'\'autres petits outils de jardinage également fabriqués en France pour vous aider à prendre soin de vos plantes avec précision. Chacun de nos accessoires est conçu pour rendre votre expérience de jardinage d\'\'intérieur agréable et éco-responsable. Découvrez notre gamme et trouvez les outils parfaits pour prendre soin de votre jardin d\'\'intérieur.', '/assets/articles/picCard2.png', NULL),
(2, 'Comment prendre soin de vos plantes?', 'Prendre soin de vos plantes d\'intérieur peut sembler complexe, mais avec les bonnes connaissances, c\'est une tâche gratifiante. Cet article généraliste vous guide à travers les besoins fondamentaux de vos plantes, tels que l\'eau, la lumière et la chaleur. Vous apprendrez à déterminer les besoins spécifiques de chaque plante en matière d\'arrosage et d\'exposition au soleil. Nous aborderons également des sujets tels que la supplémentation, le rempotage et les périodes idéales pour effectuer ces opérations. Avec ces conseils, vous serez en mesure de créer un environnement optimal pour la croissance de vos plantes d\'intérieur.', '/assets/articles/picCard3.png', NULL),
(3, 'Découvrez qui sont les artisans que nous soutenons', 'EverGreen est fier de soutenir des artisans français engagés dans la préservation de la nature. Notre engagement envers la durabilité et le respect de l\'environnement se manifeste à travers nos partenariats avec des céramistes talentueux qui créent des pots de plantes uniques, des agriculteurs éco-responsables qui produisent nos terreaux et engrais, ainsi que des fabricants d\'arrosoirs en plastique recyclé. En choisissant des artisans locaux, nous contribuons à promouvoir l\'économie française et à réduire notre empreinte carbone. Chaque produit que nous proposons raconte une histoire et incarne notre engagement envers la qualité et l\'éco-responsabilité.', '/assets/articles/picCard4.png', NULL),
(4, 'Quels sont nos engagements pour la planète?', 'Chez EverGreen, nous croyons en la préservation de notre planète. C\'est pourquoi nous nous sommes engagés à promouvoir des pratiques éco-responsables à chaque étape de notre activité. Nos engagements incluent la vente locale de plantes cultivées en France de manière respectueuse de l\'environnement. Nous favorisons également l\'artisanat local en collaborant avec des céramistes talentueux et d\'autres artisans français. De plus, nous utilisons des envois postaux à émission zéro pour minimiser notre impact sur l\'environnement. Notre objectif est de créer un monde plus vert et plus sain pour les générations futures.', '/assets/articles/picCard5.png', NULL),
(5, 'Découvrez pourquoi vos plantes vous font du bien', 'Les plantes d\'intérieur ne sont pas seulement de beaux éléments de décoration. Elles ont également un impact positif sur notre santé mentale. Les plantes contribuent à créer un environnement apaisant et stimulent la créativité. Leur présence améliore la qualité de l\'air en absorbant le dioxyde de carbone et en libérant de l\'oxygène. Prendre soin de vos plantes peut également vous apporter une satisfaction personnelle et réduire le stress. Dans cet article, explorez les bienfaits des plantes d\'intérieur sur votre bien-être mental.', '/assets/articles/picCard6.png', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `cart`
--

DROP TABLE IF EXISTS `cart`;
CREATE TABLE IF NOT EXISTS `cart` (
  `id_order` int NOT NULL,
  `id_product` int NOT NULL,
  PRIMARY KEY (`id_order`,`id_product`),
  KEY `id_product` (`id_product`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `category_id` int NOT NULL AUTO_INCREMENT,
  `category_label` varchar(50) DEFAULT NULL,
  `category_description` varchar(250) DEFAULT NULL,
  `category_picture` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`category_id`, `category_label`, `category_description`, `category_picture`) VALUES
(1, 'small', 'Nos plantes petit format', '/assets/categories/small-plants.png'),
(2, 'succulentes_cactus', 'Notre séléction de cactus et de succulentes', '/assets/categories/cactus-succulentes.png'),
(3, 'large', 'Nos plantes grand format', '/assets/categories/large-plants.png'),
(4, 'pots', 'Notre séléction de pots artisanaux', '/assets/categories/pots.png'),
(5, 'tools', 'Notre séléction d\'outils de jardinage', '/assets/categories/tools.png'),
(6, 'soils', 'Notre séléction de terreaux et engrais', '/assets/categories/soils.png'),
(7, 'terrarium', 'Nos terrariums', '/assets/categories/terrariums.png'),
(8, 'Orchidées', 'Notre séléction d\'Orchidées', '/assets/categories/orchids.png');

-- --------------------------------------------------------

--
-- Structure de la table `heat`
--

DROP TABLE IF EXISTS `heat`;
CREATE TABLE IF NOT EXISTS `heat` (
  `id_heat` int NOT NULL,
  `libelle_heat` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_heat`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `heat`
--

INSERT INTO `heat` (`id_heat`, `libelle_heat`) VALUES
(1, 'climat fra'),
(2, 'climat tem'),
(3, 'climat cha');

-- --------------------------------------------------------

--
-- Structure de la table `levels`
--

DROP TABLE IF EXISTS `levels`;
CREATE TABLE IF NOT EXISTS `levels` (
  `id_level` int NOT NULL,
  `description` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_level`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `levels`
--

INSERT INTO `levels` (`id_level`, `description`) VALUES
(1, 'débutant'),
(2, 'intermédia'),
(3, 'expert');

-- --------------------------------------------------------

--
-- Structure de la table `orders`
--

DROP TABLE IF EXISTS `orders`;
CREATE TABLE IF NOT EXISTS `orders` (
  `id_order` int NOT NULL,
  `order_date` date DEFAULT NULL,
  `total_price` decimal(5,2) DEFAULT NULL,
  `delivery_address` text,
  `payment_method` varchar(50) DEFAULT NULL,
  `payment_reference` varchar(150) NOT NULL,
  `id_user` int NOT NULL,
  PRIMARY KEY (`id_order`),
  UNIQUE KEY `payment_reference` (`payment_reference`),
  KEY `id_user` (`id_user`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id_product` int NOT NULL AUTO_INCREMENT,
  `product_name` varchar(50) NOT NULL,
  `product_image` varchar(150) DEFAULT NULL,
  `product_short_desc` varchar(250) DEFAULT NULL,
  `product_description` text,
  `product_price` decimal(6,2) DEFAULT NULL,
  `product_stock` int DEFAULT NULL,
  `id_water` int NOT NULL,
  `id_heat` int NOT NULL,
  `id_sunlight` int NOT NULL,
  `id_level` varchar(50) NOT NULL,
  `category_id` int NOT NULL,
  PRIMARY KEY (`id_product`),
  KEY `id_water` (`id_water`),
  KEY `id_heat` (`id_heat`),
  KEY `id_sunlight` (`id_sunlight`),
  KEY `id_level` (`id_level`),
  KEY `category_id` (`category_id`)
) ENGINE=MyISAM AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `products`
--

INSERT INTO `products` (`id_product`, `product_name`, `product_image`, `product_short_desc`, `product_description`, `product_price`, `product_stock`, `id_water`, `id_heat`, `id_sunlight`, `id_level`, `category_id`) VALUES
(1, 'Calathea Makoyana', '/assets/small-plants/small-calathea-makoyana.png', 'Feuilles tachetées de blanc', 'La Calathea Makoyana, également appelée plante paon en raison de ses magnifiques feuilles vertes tachetées de blanc, est une plante d\'intérieur populaire. Elle est appréciée pour sa capacité à réagir aux changements de lumière en ouvrant et en fermant ses feuilles le matin et le soir.', '9.99', 100, 2, 2, 3, 'Niveau 1', 1),
(2, 'Fittonia vert', '/assets/small-plants/small-fittonia-green.png', 'Feuilles vertes vives', 'La Fittonia Vert est une plante d\'intérieur au feuillage dense et aux feuilles vertes vives. Elle est parfaite pour apporter une touche de fraîcheur à n\'importe quel espace. Elle nécessite une lumière indirecte brillante et un arrosage régulier pour prospérer.', '9.99', 100, 2, 2, 2, 'Niveau 1', 1),
(3, 'Fittonia rouge', '/assets/small-plants/small-fittonia-red.png', 'Feuilles rouges vives', 'La Fittonia Rouge est une variante de la Fittonia avec des feuilles d\'un rouge éclatant. Elle apporte une touche de couleur et d\'originalité à votre intérieur. Veillez à lui fournir des conditions similaires à celles de la Fittonia verte pour qu\'elle se développe bien.', '9.99', 100, 2, 2, 2, 'Niveau 1', 1),
(4, 'Maranta leuconeuroa', '/assets/small-plants/small-maranta-leuconeura.png', 'Feuilles à motifs', 'La Maranta Leuconeura, souvent surnommée plante de prière, se distingue par ses feuilles richement décorées de motifs fascinants. Cette plante est appréciée pour ses feuilles qui se plient vers le haut la nuit comme si elles priaient. Elle nécessite une humidité ambiante élevée pour s\'épanouir.', '9.99', 100, 2, 2, 2, 'Niveau 1', 1),
(5, 'Pepperomia ferreyrae', '/assets/small-plants/small-pepperomia-ferreyrae.png', 'Feuilles en forme de larme', 'La Peperomia Ferreyrae est une plante succulente au feuillage unique en forme de larme. Ses feuilles vertes avec des rainures rouges lui confèrent un aspect distinctif. C\'est une plante facile à entretenir, parfaite pour les débutants en jardinage d\'intérieur', '9.99', 100, 1, 2, 2, 'Niveau 1', 1),
(6, 'Pepperomia raindrop', '/assets/small-plants/small-pepperomia-raindrop.png', 'Feuilles en forme de goutte de pluie', 'La Peperomia Raindrop, comme son nom l\'indique, a des feuilles en forme de goutte de pluie, ce qui lui donne un charme unique. Elle est une petite plante d\'intérieur qui ajoute une touche de verdure à n\'importe quel espace. Elle nécessite une lumière indirecte et un arrosage modéré.', '9.99', 100, 1, 3, 2, 'Niveau 1', 1),
(7, 'Pilea', '/assets/small-plants/small-pilea.png', 'Plante à feuilles rondes', 'La Pilea, également connue sous le nom de plante à feuilles rondes, est une plante d\'intérieur appréciée pour ses feuilles vertes rondes et plates. Elle est facile à entretenir et se multiplie rapidement, ce qui en fait un excellent choix pour les amateurs de plantes', '9.99', 100, 2, 2, 2, 'Niveau 1', 1),
(8, 'Pothos argenté', '/assets/small-plants/small-pothos-silver.png', 'Feuilles panachées argentées', 'Le Pothos Argenté est une variante du pothos avec des feuilles panachées d\'argent et de vert. Cette plante grimpante est parfaite pour les paniers suspendus ou pour grimper le long de supports. Elle tolère des conditions d\'éclairage variables et est idéale pour les espaces peu éclairés.', '9.99', 100, 2, 2, 2, 'Niveau 1', 1),
(9, 'Alocasia', '/assets/large-plants/large-alocasio.png', 'Feuilles décoratives', 'L\'Alocasia est une plante d\'intérieur attrayante avec des feuilles décoratives. Elle apporte une touche de verdure élégante à votre espace. Elle préfère un éclairage indirect brillant et des arrosages modérés.', '19.99', 100, 2, 2, 2, 'Niveau 1', 3),
(10, 'Ficus Benjamina', '/assets/large-plants/large-ficus-benjamina.png', 'Feuilles vertes élégantes', 'Le Ficus Benjamina est une plante d\'intérieur populaire connue pour ses feuilles vertes élégantes et sa facilité d\'entretien. Il s\'adapte bien à une variété de conditions d\'éclairage et peut être un ajout charmant à votre espace.', '19.99', 100, 2, 2, 2, 'Niveau 1', 3),
(11, 'Ficus Elastica', '/assets/large-plants/large-ficus-elastica.png', 'Feuilles vertes luisantes', 'Le Ficus Elastica, également appelé caoutchouc, est une plante d\'intérieur populaire appréciée pour ses feuilles vertes luisantes et sa facilité d\'entretien. Il tolère une gamme de conditions d\'éclairage et est idéal pour ceux qui veulent un ajout verdoyant à leur espace.', '19.99', 100, 2, 2, 2, 'Niveau 1', 3),
(12, 'Ficus Elastica Blanc', '/assets/large-plants/large-ficus-elastica-white.png', 'Feuilles blanches et vertes', 'Le Ficus Elastica Blanc est une variante du Ficus Elastica avec des feuilles blanches et vertes. Cette plante d\'intérieur ajoute une touche de raffinement à votre décor. Elle préfère un éclairage indirect lumineux et des arrosages modérés.', '19.99', 100, 2, 2, 2, 'Niveau 1', 3),
(13, 'Ficus Lyrata', '/assets/large-plants/large-ficus-lyrata.png', 'Feuilles en forme de violon', 'Le Ficus Lyrata, également appelé figuier lyre, se caractérise par ses feuilles en forme de violon. C\'est une plante d\'intérieur majestueuse qui ajoute une touche d\'élégance à votre espace. Elle nécessite un éclairage indirect lumineux et des arrosages réguliers.', '19.99', 100, 2, 2, 2, 'Niveau 1', 3),
(14, 'Monstera Deliciosa', '/assets/large-plants/large-monstera-deliciosa.png', 'Feuilles percées', 'La Monstera Deliciosa, surnommée la plante des trous suisses, est appréciée pour ses feuilles percées uniques. Elle ajoute un caractère distinctif à votre intérieur. Elle préfère un éclairage indirect lumineux et des arrosages modérés.', '19.99', 100, 2, 2, 2, 'Niveau 1', 3),
(15, 'Monstera Deliciosa XXL', '/assets/large-plants/large-monstera-deliciosa-xxl.png', 'Feuilles géantes percées', 'La Monstera Deliciosa XXL est une variante de la Monstera avec des feuilles géantes percées. Cette plante d\'intérieur impressionnante est un véritable accroche-regard. Elle préfère un éclairage indirect lumineux et des arrosages modérés.', '19.99', 100, 2, 2, 2, 'Niveau 1', 3),
(16, 'Schefflera', '/assets/large-plants/large-schefflera.png', 'Feuilles en ombrelle', 'Le Schefflera, aussi connu sous le nom d\'arbre parapluie, a des feuilles en forme d\'ombrelle. Il est idéal pour ajouter une touche tropicale à votre intérieur. Il préfère un éclairage indirect lumineux et des arrosages modérés.', '19.99', 100, 2, 2, 2, 'Niveau 1', 3),
(17, 'Aeonium', '/assets/succulentes-cactus/aeonium.png', 'Feuilles charnues', 'L\'Aeonium est une plante succulente avec des feuilles charnues et une apparence distincte. Elle apporte une touche unique à votre espace. Elle préfère un éclairage lumineux et des arrosages modérés.', '5.99', 100, 2, 2, 2, 'Niveau 1', 2),
(18, 'Crassula Ovata Hobbit', '/assets/succulentes-cactus/crassula-ovata-hobbit.png', 'Feuilles en forme de tubules', 'Le Crassula Ovata Hobbit est une plante succulente avec des feuilles en forme de tubules. Elle est parfaite pour les amateurs de plantes inhabituelles. Elle préfère un éclairage lumineux et des arrosages modérés.', '5.99', 100, 2, 2, 2, 'Niveau 1', 2),
(19, 'Crassula Ovata Jade', '/assets/succulentes-cactus/crassula-ovata-jade.png', 'Feuilles ovales charnues', 'Le Crassula Ovata Jade est une plante succulente avec des feuilles ovales charnues. Elle est facile à entretenir et apporte une touche de vert à votre intérieur. Elle préfère un éclairage lumineux et des arrosages modérés.', '5.99', 100, 2, 2, 2, 'Niveau 1', 2),
(20, 'Echeveria', '/assets/succulentes-cactus/echeveria.png', 'Feuilles en forme de rosette', 'L\'Echeveria est une plante succulente avec des feuilles en forme de rosette. Elle est appréciée pour sa beauté et sa simplicité d\'entretien. Elle préfère un éclairage lumineux et des arrosages modérés.', '5.99', 100, 2, 2, 2, 'Niveau 1', 2),
(21, 'Mammillaria', '/assets/succulentes-cactus/mammillaria.png', 'Cactus miniature', 'La Mammillaria est un petit cactus en forme de boule. Elle est idéale pour les espaces restreints. Elle préfère un éclairage lumineux et des arrosages modérés.', '5.99', 100, 2, 2, 2, 'Niveau 1', 2),
(22, 'Rebutia', '/assets/succulentes-cactus/rebutia.png', 'Petit cactus coloré', 'La Rebutia est un petit cactus coloré qui apporte une touche de gaieté à votre espace. Elle préfère un éclairage lumineux et des arrosages modérés.', '5.99', 100, 2, 2, 2, 'Niveau 1', 2),
(23, 'Sanseveria Moonshine', '/assets/succulentes-cactus/sanseveria-moonshine.png', 'Feuilles argentées', 'La Sanseveria Moonshine est une variante de la sanseveria avec des feuilles argentées. Elle est facile à entretenir et purifie l\'air. Elle tolère un éclairage variable et des arrosages occasionnels.', '5.99', 100, 2, 2, 2, 'Niveau 1', 2),
(24, 'Tiger Aloe', '/assets/succulentes-cactus/tiger-aloe.png', 'Motifs tigrés', 'Le Tiger Aloe se caractérise par ses motifs tigrés sur les feuilles. C\'est une plante succulente fascinante. Elle préfère un éclairage lumineux et des arrosages modérés.', '5.99', 100, 2, 2, 2, 'Niveau 1', 2),
(25, 'Terrarium Cylinder', '/assets/terrarium/cylinder.png', 'Terrarium cylindrique', 'Le Terrarium Cylinder est un terrarium cylindrique conçu pour héberger et mettre en valeur des plantes. Sa forme unique ajoute une touche de modernité à votre espace. Parfait pour les amateurs de plantes.', '24.99', 100, 0, 0, 0, '0', 7),
(26, 'Terrarium Jar', '/assets/terrarium/jar.png', 'Terrarium en forme de bocal', 'Le Terrarium Jar est un terrarium en forme de bocal qui offre un espace élégant pour vos plantes. Il ajoute une ambiance charmante à votre décor intérieur. Idéal pour la mise en scène de petites plantes.', '24.99', 100, 0, 0, 0, '0', 7),
(27, 'Terrarium Oval', '/assets/terrarium/oval.png', 'Terrarium ovale', 'Le Terrarium Oval est un terrarium de forme ovale qui met en valeur vos plantes d\'une manière unique. Sa forme élégante est parfaite pour créer un mini-jardin d\'intérieur.', '24.99', 100, 0, 0, 0, '0', 7),
(28, 'Terrarium Sphere', '/assets/terrarium/sphere.png', 'Terrarium sphérique', 'Le Terrarium Sphere est un terrarium en forme de sphère qui crée un habitat élégant pour vos plantes. Son design arrondi est un point focal dans n\'importe quelle pièce. Parfait pour les amateurs de plantes.', '14.99', 100, 0, 0, 0, '0', 7),
(29, 'cache pot béton', '/assets/pots/concrete-pot-large.png', 'Pot en béton gris', 'Ce cache pot en béton est moderne et naturel, fabriqué en France, est parfait pour vos plantes d\'intérieur. Il est simple, fonctionnel et apportera modernité et douceur à votre intérieur. Disponible en différentes tailles.', '29.99', 100, 0, 0, 0, '0', 4),
(30, 'petit cache pot béton', '/assets/pots/concrete-pot-small.png', 'Petit pot en béton', 'Ce petit cache pot en béton Made in France est idéal pour vos plantes de petit format, sa teinte contraste très bien avec le vert des plantes et sa forme apportera une touche de modernité à votre intérieur', '5.99', 100, 0, 0, 0, '0', 4),
(31, 'cache pot aluminium', '/assets/pots/large-tin-pot.png', 'Cache pot en aluminium', 'Le cache pot en aluminium est un classique qui s\'adapte à tous les intérieurs, il apporte une touche industrielle à votre intérieur tout est restant à petit prix. L\'aluminium est ici du recyclage et les pots sont façonnés en France chez notre artisan partenaire.', '14.99', 100, 0, 0, 0, '0', 4),
(32, 'Pot emaillé Emeraude', '/assets/pots/pot-emerald.png', 'Pot en émail vert Emeraude', 'Ce cache pot en terre émaillée, fabriqué en France à Uzes apportera une touche méditérranéenne à votre intérieur. Son vert émereaude apportera de la couleur à votre intérieur. Disponible en 3 tailles.', '19.99', 100, 0, 0, 0, '0', 4),
(33, 'suspension céramique blanche', '/assets/pots/suspension-white.png', 'Pot à suspendre en céramique blanche', 'Cache pot en céramique blanche martellée à suspendre. Fabriqué par une artiste céramiste de Pézenas, ce pot travaillé apportera un peu de douceur à votre intérieur et vous permettra de suspendre votre plante préférée.', '39.99', 100, 0, 0, 0, '0', 4),
(34, 'suspension en grès', '/assets/pots/suspension-gres.png', 'Suspension en grès rose', 'Ce cache pot en grès, beige et rose, est Made in France par un de nos artisans partenaires. Il habillera parfaitement votre intérieur grâce à ses couleurs douces.', '22.99', 100, 0, 0, 0, '0', 4),
(35, 'petits cache pot aluminium', '/assets/pots/tin pot.png', 'Mini pot en aluminium', 'Le cache pot en aluminium est un classique qui s\'adapte à tous les intérieurs, il apporte une touche industrielle à votre intérieur tout est restant à petit prix. L\'aluminium est ici du recyclage et les pots sont façonnés en France chez notre artisan partenaire.', '3.99', 100, 0, 0, 0, '0', 4);

-- --------------------------------------------------------

--
-- Structure de la table `product_rates`
--

DROP TABLE IF EXISTS `product_rates`;
CREATE TABLE IF NOT EXISTS `product_rates` (
  `id_product` int NOT NULL,
  `id_rating` int NOT NULL,
  PRIMARY KEY (`id_product`,`id_rating`),
  KEY `id_rating` (`id_rating`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `ratings`
--

DROP TABLE IF EXISTS `ratings`;
CREATE TABLE IF NOT EXISTS `ratings` (
  `id_rating` int NOT NULL,
  `rating` int NOT NULL,
  PRIMARY KEY (`id_rating`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `ratings`
--

INSERT INTO `ratings` (`id_rating`, `rating`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

-- --------------------------------------------------------

--
-- Structure de la table `roles`
--

DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `id_role` int NOT NULL,
  `libelle_role` varchar(10) NOT NULL,
  PRIMARY KEY (`id_role`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `roles`
--

INSERT INTO `roles` (`id_role`, `libelle_role`) VALUES
(1, 'admin'),
(2, 'client');

-- --------------------------------------------------------

--
-- Structure de la table `sunlight`
--

DROP TABLE IF EXISTS `sunlight`;
CREATE TABLE IF NOT EXISTS `sunlight` (
  `id_sunlight` int NOT NULL,
  `libelle_sunlight` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_sunlight`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `sunlight`
--

INSERT INTO `sunlight` (`id_sunlight`, `libelle_sunlight`) VALUES
(1, 'ombragé'),
(2, 'lumière in'),
(3, 'plein sole');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id_role` int DEFAULT NULL,
  `id_user` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `user_password` varchar(150) NOT NULL,
  `telephone` varchar(50) DEFAULT NULL,
  `address_street` varchar(150) DEFAULT NULL,
  `address_city` varchar(50) DEFAULT NULL,
  `address_zipcode` varchar(10) DEFAULT NULL,
  `address_country` varchar(50) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_user`),
  UNIQUE KEY `email` (`email`),
  KEY `id_role` (`id_role`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id_role`, `id_user`, `first_name`, `last_name`, `email`, `user_password`, `telephone`, `address_street`, `address_city`, `address_zipcode`, `address_country`, `created_at`, `updated_at`) VALUES
(2, 1, 'Laura', 'vong', 'vongsy.laura@gmail.com', '$2b$10$1sZmuK2/e2/WlWYGYbz/X.JG94sSocUQD6Q2x.ah9nnfG.4AAQmHW', NULL, NULL, NULL, NULL, NULL, '2023-10-09 07:22:07', '2023-10-09 07:22:07');

-- --------------------------------------------------------

--
-- Structure de la table `user_rates`
--

DROP TABLE IF EXISTS `user_rates`;
CREATE TABLE IF NOT EXISTS `user_rates` (
  `id_user` int NOT NULL,
  `id_rating` int NOT NULL,
  PRIMARY KEY (`id_user`,`id_rating`),
  KEY `id_rating` (`id_rating`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `water`
--

DROP TABLE IF EXISTS `water`;
CREATE TABLE IF NOT EXISTS `water` (
  `id_water` int NOT NULL,
  `libelle_water` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_water`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `water`
--

INSERT INTO `water` (`id_water`, `libelle_water`) VALUES
(1, 'peu d\'eau'),
(2, 'arrosage m'),
(3, 'arrosage f');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
