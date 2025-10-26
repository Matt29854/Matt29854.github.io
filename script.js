document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.journey-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(card => observer.observe(card));
});

const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;
const logo = document.getElementById('nav-logo');

const darkLogo = "img/Logo fond noir.png";
const lightLogo = "img/Logo fond blanc.png";

if (localStorage.getItem('theme') === 'light') {
    html.classList.add('light');
    themeToggle.textContent = '🌙';
    logo.src = lightLogo;
} else {
    html.classList.remove('light');
    themeToggle.textContent = '☀️';
    logo.src = darkLogo;
}


themeToggle.addEventListener('click', () => {
  if (html.classList.contains('light')) {
        html.classList.remove('light');
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '☀️';
        logo.src = darkLogo;
  } else {
        html.classList.add('light');
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌙';
        logo.src = lightLogo;
  }
});

const translations = {
    fr: {
        "hero-title": "Moi, c'est <span class='text-teal-400'>Mathys,<br><span class='text-white'>&lt;/Développeur&gt;</span></span> <span class='text-teal-400'>Full-Stack </span>",
        "hero-desc": "Je suis étudiant à Epitech en développement web, programmation orientée objet et administration réseau.",
        "my-projects": "Mes projets",
        "navAbout": "À propos",
        "navProjects": "Projets",
        "navSkills" : "Compétences",
        "gaco-title" : "GACO option Arts",
        "gaco-card": "Gestion Administrative et Commercial des Organisation, avec option arts. J'y apprend le design et le marketing"
        , "MDS-card": "J'y ai appris le design digital et créé mes premiers sites avec html, CSS et un peu de javascript et Figma"
        , "button-project": "Mes projets",
        "button-cv": "Télécharger mon CV",
        "journey": "Mon parcours",
        "internship-title": "Alternance Marketing Digital",
        "feelloo": "J'ai gagné de l'expérience en vente, Google Ads ainsi qu'en maintenance de sites avec html, CSS et j'y ai appris à répondre aux demandes des clients et résoudre leurs problèmes",
        "epitech": "Codage intensif, système de piscine, Développement web, programmation orientée objet et administration réseau. Compétences acquises : PHP, SQL, JavaScript, Git, Linux et Java."
        ,"epitech-going" : "(en cours !)",
        "hobbies": `<h2 class="text-3xl font-semibold mb-8 text-center">Parce que je ne fais pas que coder toute la journée...</h2>
        <p class="text-neutral-400 text-sm"><span class="text-3xl">♟️</span> Pour satisfaire ma soif de <b class="text-white">challenges et de puzzles</b> et pour garder mon cerveau en correcte santé, Je joue aux échecs durant mon temps libre. Je suis <b class="text-white">un membre actif</b> de mon club et je joue dans la division nationale, si vous voulez jouer, vous pouvez me défier sur mon <a href="https://www.chess.com/member/oktogaunt" class="text-teal-400">Chesscom.</a>, je serai heureux de répondre au défi !</p>
        <p class="text-neutral-400 text-sm"><span class="text-3xl">🎸</span> La musique fait partie de ma vie, il y a toujours un morceau qui tourne chez moi, que ce soit un vinyle, une playlist YouTube ou le son de ma guitare. En parallèle, <b class="text-white">j'enseigne la guitare</b>, et j'ai eu une trentaine d'élèves durant cette aventure.
        <p class="text-neutral-400 text-sm"><span class="text-3xl">🎬</span> J'aime tellement ça que j'en fais <a href="https://www.youtube.com/@shinopolo" class="text-teal-400"> des vidéos sur Internet.</a></p>
        <p class="text-neutral-400 text-sm">La musique, et jouer dans un groupe, m'ont appris <b class="text-white">à travailler avec les autres</b>, à gérer mon stress et à <b class="text-white">m'adapter rapidement</b> (Comme quand j'ai dû apprendre cinq morceaux en moins de trois jours)</p>
        <p class="text-neutral-400 text-sm"><span class="text-3xl">🚴‍♂️</span> Si je peux y aller à vélo, alors j'y vais en vélo, le sport est une partie essentielle de ma vie et me permet de rester en forme mentale et physique.</p>`
        ,"jobboard-title": "Mon projet JobBoard",
        "job-desc": "Comment en seulement deux semaines, deux de mes collègues et moi avons conçu un clone de Indeed, Glassdor ou encore HelloWork."
        ,"techstack" : "Technos utilisées : Javascript, SQL, sqlite3, Bootstrap, html et CSS",
        "bac": `Voici la <span class="text-teal-400">BAC</span>, la Brigade Anti-Chômage:`
        ,"frontpage": `<h4 class="text-teal-400 text-2xl font-bold mb-4">Page principale</h4>
            <p class="text-neutral-400 mb-2 font-semibold">Fonctionnalités:</p>
            <ul class="text-neutral-400 list-disc list-inside space-y-1 text-sm">
                <li>Affichage dynamique des offres</li>
                <li>Un bouton «Learn More» qui récupère les informations dynamiquement depuis la base de données</li>
                <li>Le bouton «Apply» envoie automatiquement une candidature à l'entreprise</li>
                <li>Si l'utilisateur est connecté, le formulaire de candidature se remplit automatiquement avec ses informations personnelles</li>`
        ,"login": `<h4 class="text-teal-400 text-2xl font-bold mb-4">Page de connexion</h4>
            <p class="text-neutral-400 mb-2 font-semibold">Fonctionnalités:</p>
            <ul class="text-neutral-400 list-disc list-inside space-y-1 text-sm">
                <li>Stocke les informations de session</li>
                <li>Vérifie si le compte est valide</li>
                <li>Création de compte</li>
                <li>Permet l'affichage des infos personnelles sur la page principale</li>
            </ul>`,
        "admin":`<h4 class="text-teal-400 text-2xl font-bold mb-4">Page administrateur</h4>
            <p class="text-neutral-400 mb-2 font-semibold">Fonctionnalités:</p>
            <ul class="text-neutral-400 list-disc list-inside space-y-1 text-sm">
                <liPage sécurisée qui check si le user est connecté et est bien admin</li>
                <li>Création, lecture, modification et suppression dynamique des infos dans la base de données</li>
                <li>Visualisation des informations du back-end sur le front</li>
                <li>Les modifications sont visibles en temps réel</li>
            </ul>`,
        "triangle-title": "Algorithme pour triangle de Sierpinski",
        "tech-triangle": "Technos utilisées : Python, Turtle",
        "sierpinski": `<h4 class="text-teal-400 text-2xl font-bold mb-4">Sierpinski Triangle</h4>
            <p class="text-neutral-400 mb-2 font-semibold">Concepts principaux:</p>
            <ul class="text-neutral-400 list-disc list-inside space-y-1 text-sm">
                <li>Trigonométrie pour les couleurs arc-en-ciel</li>
                <li>Récursion pour l'affichage fractale</li>
            </ul>`,
        "skillz": "Mes compétences",
        "contact-me": "Me contacter",
        "name-form": "Votre nom",
        "message": "Envoyer",
        "triangle-desc": "Codé en Python et avec la librairie Turtle, ce programme construit un triangle de Sierpinski à la profondeur choisie"
    
            },
    en: {
        "hero-title": "Hi, I'm <span class='text-teal-400'>Mathys,</span> <span class='text-teal-400'>Full-Stack </span><span class='text-white'>&lt;/Developer&gt;</span>",
        "hero-desc": "I'm an Epitech student, studying web development, object-oriented programming and network administration.",
        "my-projects": "My projects",
        "navAbout": "About",
        "navProjects": "Projects",
        "navSkills" : "Skills",
        "gaco-title" : "GACO Arts option",
        "gaco-card": "Administrative and Commercial Management of Organisations, with an artistic twist. Discovered design and marketing."
        ,"MDS-card":"Studied design, and made my first sites using html, CSS, Javascript and Figma.", 
        "button-project": "My projects",
        "button-cv": "Download my resume",
        "journey": "My journey",
        "internship-title": "Internship",
        "feelloo":"Gained experience in sales, Google Ads as well as site maintenance using html and CSS, and answering client demands.",
        "epitech": "Intensive coding, web development, object-oriented programming and network administration. Learned PHP, SQL, Javascript, Git, Linux and Java."
        ,"epitech-going" : "(still going!)",
        "hobbies": `<h2 class="text-3xl font-semibold mb-8 text-center">I don't just code all day...</h2>
        <p class="text-neutral-400 text-sm"><span class="text-3xl">♟️</span> As I enjoy <b class="text-white">challenges and puzzles</b> and keeping my brain reasonably healthy, I play chess on my free time, am an <b class="text-white">active member</b> of my club and play in the national division, if that's something you are interested in, you can always challenge me on my <a href="https://www.chess.com/member/oktogaunt" class="text-teal-400">Chesscom.</a></p>
        <p class="text-neutral-400 text-sm"><span class="text-3xl">🎸</span> I can't live without music, it's always playing in my home, wether it's a vinyl, a YouTube playlist or me playing the guitar. I also <b class="text-white">teach music</b>, and have had around 30 students over the years.
        <p class="text-neutral-400 text-sm"><span class="text-3xl">🎬</span> Also I make <a href="https://www.youtube.com/@shinopolo" class="text-teal-400"> videos about it.</a></p>
        <p class="text-neutral-400 text-sm">Playing in a band taught me <b class="text-white">working with people</b>, stress management and <b class="text-white">adapting fast</b> (like how I needed to learn 5 songs in less than 3 days)</p>
        <p class="text-neutral-400 text-sm"><span class="text-3xl">🚴‍♂️</span> If I can cycle somewhere, then I do, sport is an essential part of my life and allows me to stay sharp.</p>`
        ,"jobboard-title": "My JobBoard Project",
        "job-desc":"How in two weeks, I and two of my colleagues made a functional clone of HelloWork, Indeed or Glassdoor."
        ,"techstack" : "Tech stack : Javascript, SQL, sqlite3, Bootstrap, html and CSS",
        "bac": `Meet <span class="text-teal-400">BAC</span>, la Brigade Anti-Chômage:`
        , "frontpage": `<h4 class="text-teal-400 text-2xl font-bold mb-4">Front Page</h4>
            <p class="text-neutral-400 mb-2 font-semibold">Functionalities:</p>
            <ul class="text-neutral-400 list-disc list-inside space-y-1 text-sm">
                <li>Dynamic display of job ads</li>
                <li>A Learn more button fetches info from database</li>
                <li>Apply button sends application to the company</li>
                <li>Auto fill form if logged in</li>`
        , "login" : `<h4 class="text-teal-400 text-2xl font-bold mb-4">LogIn Page</h4>
            <p class="text-neutral-400 mb-2 font-semibold">Functionalities:</p>
            <ul class="text-neutral-400 list-disc list-inside space-y-1 text-sm">
                <li>Store your session info</li>
                <li>Verify if user is valid</li>
                <li>Account creation</li>
                <li>Allows display of account info on main page</li>
            </ul>`,
        "admin": `<h4 class="text-teal-400 text-2xl font-bold mb-4">Admin Page</h4>
            <p class="text-neutral-400 mb-2 font-semibold">Functionalities:</p>
            <ul class="text-neutral-400 list-disc list-inside space-y-1 text-sm">
                <li>CyberSecurity, checks if user is allowed on</li>
                <li>Create, Read, Modify and Delete info in database</li>
                <li>Front view of Back-End operations</li>
                <li>Changes in real time the display on main page</li>
            </ul>`,
        "triangle-title": "Fun Sierpinski triangle algorithm",
        "tech-triangle": "Tech stack : Python, Turtle",
        "sierpinski": `<h4 class="text-teal-400 text-2xl font-bold mb-4">Sierpinski Triangle</h4>
            <p class="text-neutral-400 mb-2 font-semibold">Core concepts:</p>
            <ul class="text-neutral-400 list-disc list-inside space-y-1 text-sm">
                <li>Trigonometry for rainbow colors</li>
                <li>Recursion to achieve fractal display</li>
            </ul>`,
        "contact-me": "Contact me",
        "skillz": "My skills"
        ,"name-form": "Name",
        "message": "Send message",
        "triangle-desc": "Using python and turtle graphics library, this program builds a Sierpinski triangle to the chosen depth. ",
    }
};

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(translations[lang][key]){
            el.innerHTML = translations[lang][key];
        }
    });
}

let currentLang = 'en';
const langToggle = document.getElementById('lang-toggle');
langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'fr' : 'en';
    setLanguage(currentLang);

    document.getElementById('lang-icon').textContent = currentLang === 'en' ? '🇫🇷' : '🇬🇧';
});

