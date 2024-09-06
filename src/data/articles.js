// src/data/articles.js
const Author = "Florent DETRES";
const AccueilImage =    './images/accueil.png';

const articles = [
    {
        id: 1,
        title: 'Intégration dans l\'entreprise : Le Robinson Cabaret',
        summary: 'Une plongée dans l\'univers du Cabaret Le Robinson à Toulouse et rencontre avec le dirigeant, Stéphane Fauré.',
        date: '22-01-2024',
        author: Author,
        bannerImage: '/images/LeRobinson.png',
        contentBlocks: [
            {
                subtitle : '1. Rencontre avec Stéphane Fauré',
                text: 
                'La première étape de mon stage chez Le Robinson a été une rencontre inspirante avec Stéphane Fauré, le dirigeant du cabaret emblématique près de Toulouse. Stéphane, un passionné de spectacles et de divertissements, m\'a accueilli avec enthousiasme et m\'a expliqué la vision unique de l\'entreprise. Le Robinson n\'est pas seulement un cabaret ; c\'est un lieu où l\'art et l\'originalité se rencontrent pour offrir des spectacles inoubliables.',
                image: null
            },
            {
                subtitle : '2. Découverte de l\'entreprise',
                text: 
                'Le Robinson, situé à proximité de Toulouse, est reconnu pour ses spectacles de grande envergure qui combinent performances artistiques et expériences immersives. Le cabaret propose une programmation variée allant des concerts aux spectacles de danse, en passant par des représentations théâtrales. Chaque événement est conçu pour captiver le public et offrir une expérience mémorable. L\'entreprise se distingue par son engagement envers la qualité et l\'innovation, attirant une clientèle diversifiée et fidèle.',
                image: null
            },
            {
                subtitle : '3. Mission confiée : Site web pour "Collection D\'artistes"',
                text: 
                'Stéphane Fauré m\'a confié la mission de concevoir un site internet pour présenter un spectacle particulier intitulé "Collection D\'artistes". Ce spectacle original met en scène la vente d\'objets ayant appartenu à des célébrités, offrant une expérience unique mêlant art et histoire. Le site devait refléter le caractère exclusif de l\'événement et capturer l\'essence de cette vente aux enchères artistique.',
                image: null
            }
        ]
    },
    {
        id: 2,
        title: 'Gestion de projet à distance : Défis et solutions',
        summary: 'Défis et solutions liés au travail à distance durant le stage.',
        date: '05-02-2024',
        author: Author,
        bannerImage: '../images/banner_gestion.jpg',
        contentBlocks: [
            {
                subtitle : '1. Défis du travail à distance',
                text: 
                'La particularité de mon stage chez Le Robinson était qu\'il se déroulait entièrement en distanciel. Ce mode de travail a présenté des défis uniques, notamment la communication efficace et la coordination des tâches à distance. Les réunions virtuelles et les échanges réguliers étaient essentiels pour maintenir la fluidité du projet. Bien que la distance physique puisse parfois créer un sentiment d\'isolement, la technologie a permis de surmonter ces obstacles.',
                image: null
            },
            {
                subtitle : '2. Gestion du projet avec un Diagramme de Gantt',
                text: 
                'Pour assurer une gestion efficace du projet, nous avons utilisé un Diagramme de Gantt. Cet outil de planification nous a permis de visualiser les différentes étapes du projet, de définir les délais et d\'organiser les tâches de manière structurée. Le Diagramme de Gantt a joué un rôle crucial dans la gestion du temps et des ressources, nous aidant à respecter les échéances et à coordonner les efforts de l\'équipe.',
                image: null
            },
            {
                subtitle : '3. Outils de communication : Discord et appels vidéo',
                text: 
                'Nous avons également utilisé Discord pour les échanges quotidiens et les appels vidéo pour les discussions plus approfondies. Ces outils ont facilité la collaboration en temps réel, permettant de partager des mises à jour, de résoudre les problèmes rapidement et de prendre des décisions collectives. Cette approche a renforcé notre capacité à travailler ensemble malgré la distance physique.',
                image: null
            }
        ]
    },
    {
        id: 3,
        title: 'Veille concurrentielle : Comment moderniser l\'interface ?',
        summary: 'Analyse des concurrents pour moderniser l\'interface du projet.',
        date: '29.03.2024',
        author: Author,
        bannerImage: '/images/veille.png',
        contentBlocks: [
            {
                subtitle : '1. Analyse des concurrents : Lido Paris',
                text: 
                'Pour moderniser l\'interface du site web pour "Collection D\'artistes", j\'ai entrepris une veille concurrentielle approfondie. J\'ai étudié trois sites concurrents, ces sites se distinguent par leur design élégant et moderne, offrant une expérience utilisateur raffinée.\n\n' +
                'S\'inspirer de ces modèles a été crucial pour créer un site qui non seulement répond aux attentes des utilisateurs mais aussi se distingue par son originalité. En étudiant les forces et les faiblesses des sites concurrents, nous avons pu identifier les meilleures pratiques et les intégrer dans notre propre projet pour offrir une expérience utilisateur optimale.\n\n' +
                '- Lido Paris : Ce site se caractérise par une interface épurée et sophistiquée. Les images de haute qualité et les animations subtiles créent une atmosphère immersive qui attire l\'utilisateur. La navigation fluide et les sections bien définies facilitent l\'accès aux informations.',
                image: '/images/veille1.png'
            },
            {
                subtitle : '2. Analyse des concurrents : Paradis Latin',
                text: 
                '- Paradis Latin : Le site du Paradis Latin utilise une palette de couleurs audacieuses et un design dynamique qui reflète l\'énergie de ses spectacles. La mise en page interactive et les éléments graphiques modernes contribuent à une expérience utilisateur captivante.\n\n',
                image: '/images/veille2.png'
            },
            {
                subtitle : '3. Analyse des concurrents : Oh César Paris',
                text: 
                '- Oh César Paris : Ce site propose un design raffiné avec une utilisation intelligente de l\'espace blanc. Les typographies élégantes et les images percutantes renforcent l\'identité de la marque tout en offrant une navigation intuitive.',
                image: '/images/veille3.png'
            }
        ]
    },
    {
        id: 4,
        title: 'Côté Design : User Interface (UI) et User Experience (UX)',
        summary: 'Création de la maquette du site à l\'aide des principes UX/UI et de Figma.',
        date: '29-03-2024',
        author: Author,
        bannerImage: '../images/figma.jpg',
        contentBlocks: [
            {
                subtitle : '1. Création de la maquette avec Figma',
                text: 
                'Après avoir pris en compte les inspirations des sites concurrents, j\'ai conceptualisé la maquette du site en utilisant Figma. Cet outil de design UX/UI est idéal pour créer des prototypes interactifs et des maquettes visuelles. J\'ai appliqué des techniques telles que la hiérarchisation de l\'information, la création de wireframes et l\'élaboration de prototypes pour garantir que l\'interface soit à la fois intuitive et esthétiquement plaisante.',
                image: '../images/accueil.png'
            },
            {
                subtitle : '2. Compétences et techniques UX/UI mises en œuvre',
                text: 
                'J\'ai utilisé des techniques de design UX pour créer une expérience utilisateur fluide et engageante. Cela a inclus l\'élaboration de parcours utilisateurs, la mise en place de wireframes pour planifier la disposition des éléments, et l\'application de principes UI pour assurer une interface visuellement attrayante. Les compétences acquises incluent l\'utilisation avancée de Figma pour la création de prototypes interactifs et la validation des choix de conception à travers des tests utilisateur.',
                image: '../images/professionnels.png'
            },
            {
                subtitle : '3. Détails des images du projet',
                text: 
                '- Page d\'accueil : La page d\'accueil présente une vue d\'ensemble captivante du spectacle, avec des éléments visuels accrocheurs et une navigation claire.\n\n' +
                '- Page destinée aux professionnels : Cette page est conçue pour fournir des informations détaillées aux partenaires et aux sponsors, avec une mise en page professionnelle et élégante.\n\n' +
                '- Page galerie : La galerie met en valeur les objets d\'art avec des images de haute qualité et une présentation soignée.\n\n' +
                '- Page contact : La page de contact facilite la prise de contact avec des informations claires et un formulaire simple à remplir.',
                image: '../images/contact.png'
            }
        ]
    },
    {
        id: 5,
        title: 'Côté Développement : Intégration de la maquette sur WordPress',
        summary: 'Transformation de la maquette en site fonctionnel avec WordPress et Elementor Pro.',
        date: '29-03-2024',
        author: Author,
        bannerImage: '/images/elementor.png',
        contentBlocks: [
            {
                subtitle : '1. Intégration de la maquette sur WordPress',
                text: 
                'Une fois la maquette validée, l\'étape suivante était l\'intégration sur WordPress. Le site a été construit en utilisant WordPress, une plateforme puissante qui permet une gestion de contenu flexible. Grâce au plugin Elementor Pro, j\'ai pu transformer la maquette en un site fonctionnel avec des fonctionnalités dynamiques et une personnalisation poussée.',
                image: null
            },
            {
                subtitle : '2. Compétences techniques liées à WordPress et Elementor',
                text: 
                'Le développement avec WordPress a impliqué la création de thèmes personnalisés, l\'utilisation de plugins pour ajouter des fonctionnalités spécifiques, et l\'optimisation du site pour une performance optimale. Elementor Pro a facilité la création de pages en utilisant une interface de glisser-déposer, permettant d\'ajouter des éléments complexes sans avoir besoin de coder.',
                image: null
            },
            {
                subtitle : '3. Défis rencontrés',
                text: 
                'L\'intégration du site a présenté plusieurs défis, notamment la compatibilité des plugins et la personnalisation des thèmes pour répondre aux exigences spécifiques du projet. Des ajustements ont été nécessaires pour assurer une cohérence entre la maquette et le site final. Cependant, ces défis ont été surmontés grâce à des tests rigoureux et à une attention minutieuse aux détails.',
                image: null
            }
        ]
    }
];

export default articles;
