let lang = 'fr'; // Langue par défaut

/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";

    } else {

        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";

    }
}


/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText",{
    strings : ["Developer"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 2000
})


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {

            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

        }  else {

            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

        }
    })
}

window.addEventListener('scroll', scrollActive)

function changeLanguage() {
    // Barre de navigation
    const navHome = document.querySelector('.nav-link[href="https://remidesnyder.fr/portfolio/#home"]');
    const navAbout = document.querySelector('.nav-link[href="https://remidesnyder.fr/portfolio/#about"]');
    const navProjects = document.querySelector('.nav-link[href="https://remidesnyder.fr/portfolio/#projects"]');
    const navContact = document.querySelector('.nav-link[href="https://remidesnyder.fr/portfolio/#contact"]');

    const btnDownloadCV = document.getElementById("btn-download-cv");
    // Bouton FR/EN
    const btnLANG = document.getElementById('btn-lang');

    // Pied de page
    const footerHome = document.querySelector('.footer-menu a[href="https://remidesnyder.fr/portfolio/#home"]');
    const footerAbout = document.querySelector('.footer-menu a[href="https://remidesnyder.fr/portfolio/#about"]');
    const footerProjects = document.querySelector('.footer-menu a[href="https://remidesnyder.fr/portfolio/#projects"]');
    const footerContact = document.querySelector('.footer-menu a[href="https://remidesnyder.fr/portfolio/#contact"]');

    // Section "featured-box"
    const featuredName = document.querySelector('.featured-name .text');
    const featuredTextInfo = document.querySelector('.featured-text-info p');
    const hireMeBtn = document.querySelector('.featured-text-btn .blue-btn');
    const downloadCVBtn = document.querySelector('.featured-text-btn .btn-download-cv');
    const scrollDownBtn = document.querySelector('.scroll-btn p');

    // Section "about-box"
    const aboutHeader = document.querySelector('#about .top-header h1');
    const aboutIntroduction = document.querySelector('#about .about-info h3');
    const aboutText = document.querySelector('#about .about-info p');
    const downloadCVBtnAbout = document.querySelector('#about .about-btn .btn');

    // Section "projects"
    const projectsHeader = document.querySelector('#projects .top-header h1');
    const projectSpan = document.querySelector('#projects .top-header .project-span');
    const completedProject = document.querySelector('#projects .project-box:nth-child(1) h3');
    const completedProjectLabel = document.querySelector('#projects .project-box:nth-child(1) label');
    const clientsProject = document.querySelector('#projects .project-box:nth-child(2) h3');
    const clientsProjectLabel = document.querySelector('#projects .project-box:nth-child(2) label');
    const experienceProject = document.querySelector('#projects .project-box:nth-child(3) h3');
    const experienceProjectLabel = document.querySelector('#projects .project-box:nth-child(3) label');

    // Section "contact"
    const contactHeader = document.querySelector('#contact .top-header h1');
    const contactSubtitle = document.querySelector('#contact .top-header span');
    const findMeHeader = document.querySelector('#contact .contact-info h2');
    const emailInfo = document.querySelector('#contact .contact-info p:nth-child(2)');
    const telInfo = document.querySelector('#contact .contact-info p:nth-child(3)');
    const sendBtn = document.querySelector('#contact .form-button .btn');

    if (lang === 'fr') {
        navHome.textContent = "Accueil";
        navAbout.textContent = "À propos";
        navProjects.textContent = "Projets";
        navContact.textContent = "Contact";

        btnDownloadCV.textContent = "Télécharger CV";
        btnDownloadCV.innerHTML = "Télécharger CV <i class='uil uil-file-alt'></i>";

        footerHome.textContent = "Accueil";
        footerAbout.textContent = "À propos";
        footerProjects.textContent = "Projets";
        footerContact.textContent = "Contact";

        featuredName.innerHTML = "Je suis <span class='typedText'></span>";
        featuredTextInfo.innerHTML = "Développeur / Etudiant backend avec une passion pour la création de système backend.";
        hireMeBtn.textContent = "Engagez-moi";
        downloadCVBtn.innerHTML = "Télécharger CV <i class='uil uil-file-alt'></i>";
        scrollDownBtn.textContent = "Vers le bas";

        aboutHeader.textContent = "À propos de moi";
        aboutIntroduction.textContent = "Mon introduction";
        aboutText.innerHTML = "Je suis compétent en HTML, CSS et JavaScript, ainsi que dans d'autres frameworks et bibliothèques de pointe, ce qui me permet de mettre en œuvre des fonctionnalités interactives. De plus, j'ai de l'expérience dans le travail avec des systèmes de gestion de contenu (CMS) tels que WordPress.";
        downloadCVBtnAbout.innerHTML = "Télécharger CV <i class='uil uil-import'></i>";

        projectsHeader.textContent = "Projets";
        projectSpan.innerHTML = "Voici 3 projets et vous pouvez cliquer <a>ici</a> pour en voir plus."
        completedProject.textContent = "Terminés";
        completedProjectLabel.textContent = "15+ Projets terminés";
        clientsProject.textContent = "Clients";
        clientsProjectLabel.textContent = "2+ Clients satisfaits";
        experienceProject.textContent = "Expérience";
        experienceProjectLabel.textContent = "2+ Années d'expérience";

        contactHeader.textContent = "Contactez-moi";
        contactSubtitle.textContent = "Avez-vous un projet en tête? Contactez-moi ici";
        findMeHeader.innerHTML = "Trouvez-moi <i class='uil uil-corner-right-down'></i>";
        emailInfo.innerHTML = "<i class='uil uil-envelope'></i> Email: remi.desnyder@hotmail.fr";
        telInfo.innerHTML = "<i class='uil uil-phone'></i> Tel: +33 06 21 59 34 08";
        sendBtn.innerHTML = "Envoyer <i class='uil uil-message'></i>";

        const nameLabel = document.querySelector('#contact .form-inputs input:nth-child(1)').placeholder = "Nom";
        const emailLabel = document.querySelector('#contact .form-inputs input:nth-child(2)').placeholder = "Email";
        const messageLabel = document.querySelector('#contact .text-area textarea').placeholder = "Message";

        btnLANG.textContent = "EN";

        lang = 'en';
    } else if (lang === 'en') {
        navHome.textContent = "Home";
        navAbout.textContent = "About";
        navProjects.textContent = "Projects";
        navContact.textContent = "Contact";

        btnDownloadCV.textContent = "Download CV";
        btnDownloadCV.innerHTML = "Download CV <i class='uil uil-file-alt'></i>";

        footerHome.textContent = "Home";
        footerAbout.textContent = "About";
        footerProjects.textContent = "Projects";
        footerContact.textContent = "Contact";

        featuredName.innerHTML = "I'm <span class='typedText'></span>";
        featuredTextInfo.innerHTML = "Backend developer/student passionate about building backend systems.";
        hireMeBtn.textContent = "Hire Me";
        downloadCVBtn.innerHTML = "Download CV <i class='uil uil-file-alt'></i>";
        scrollDownBtn.textContent = "Scroll Down";

        aboutHeader.textContent = "About Me";
        aboutIntroduction.textContent = "My introduction";
        aboutText.innerHTML = "I am well-versed in HTML, CSS, and JavaScript, as well as other cutting-edge frameworks and libraries, which allows me to implement interactive features. Additionally, I have experience working with content management systems (CMS) like WordPress.";
        downloadCVBtnAbout.innerHTML = "Download CV <i class='uil uil-import'></i>";

        projectsHeader.textContent = "Projects";
        projectSpan.innerHTML = "Here are 3 projects and you can click <a>here</a> to see more."
        completedProject.textContent = "Completed";
        completedProjectLabel.textContent = "15+ Finished Projects";
        clientsProject.textContent = "Clients";
        clientsProjectLabel.textContent = "2+ Happy Clients";
        experienceProject.textContent = "Experience";
        experienceProjectLabel.textContent = "2+ Years in the field";

        contactHeader.textContent = "Get in touch";
        contactSubtitle.textContent = "Do you have a project in your mind, contact me here";
        findMeHeader.innerHTML = "Find Me <i class='uil uil-corner-right-down'></i>";
        emailInfo.innerHTML = "<i class='uil uil-envelope'></i> Email: remi.desnyder@hotmail.fr";
        telInfo.innerHTML = "<i class='uil uil-phone'></i> Tel: +33 06 21 59 34 08";
        sendBtn.innerHTML = "Send <i class='uil uil-message'></i>";

        const nameLabel = document.querySelector('#contact .form-inputs input:nth-child(1)').placeholder = "Name";
        const emailLabel = document.querySelector('#contact .form-inputs input:nth-child(2)').placeholder = "Mail";
        const messageLabel = document.querySelector('#contact .text-area textarea').placeholder = "Message";

        btnLANG.textContent = "FR";

        lang = 'fr';
    }
}
