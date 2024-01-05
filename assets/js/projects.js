const projectsType = {
    Scolaire: "Scolaire",
    Pro: "Professionnel",
    Perso: "Personnel",
    Autres: "Autres"
}

const projects = [
    {
        name: "Forum (JS)",
        type: projectsType.Perso,
        description: "Forum réalisé en JavaScript avec HTML et CSS.",
        language: ["HTML", "CSS", "JavaScript"]
    },
    {
        name: "Forum (PHP)",
        type: projectsType.Perso,
        description: "Forum réalisé en PHP avec HTML et CSS.",
        language: ["PHP", "HTML", "CSS"]
    },
    {
        name: "Blog (JS)",
        type: projectsType.Perso,
        description: "Blog réalisé en JavaScript avec HTML et CSS.",
        language: ["HTML", "CSS", "JavaScript"]
    },
    {
        name: "Bot Discord - Ticket (JS)",
        type: projectsType.Perso,
        description: "Bot Discord de gestion de tickets réalisé en JavaScript.",
        language: ["JavaScript"]
    },
    {
        name: "Site d'actualité via API (JS)",
        type: projectsType.Perso,
        description: "Site d'actualité utilisant une API réalisé en JavaScript avec HTML et CSS.",
        language: ["HTML", "CSS", "JavaScript"]
    },
    {
        name: "Portfolio (JS)",
        type: projectsType.Perso,
        description: "Portfolio réalisé en JavaScript avec HTML et CSS.",
        language: ["HTML", "CSS", "JavaScript"]
    },
    {
        name: "Plugin Minecraft - Modération (Java)",
        type: projectsType.Perso,
        description: "Plugin Minecraft de modération réalisé en Java.",
        language: ["Java"]
    },
    {
        name: "Plugin Minecraft - Différents jeux (Java)",
        type: projectsType.Perso,
        description: "Plugin Minecraft de jeux réalisé en Java.",
        language: ["Java"]
    },
    {
        name: "Site de gestion de film et série (JS)",
        type: projectsType.Perso,
        description: "Site de gestion de film et série réalisé en JavaScript avec HTML et CSS.",
        language: ["HTML", "CSS", "JavaScript"]
    },
    {
        name: "Moteur de Jeu - Avalam (C)",
        type: projectsType.Scolaire,
        description: "Moteur de jeu pour jouer à Avalam en C, avec une interface en ligne de commande.",
        language: ["C"]
    },
    {
        name: "Robot pour Avalam (C)",
        type: projectsType.Scolaire,
        description: "Création d'un robot qui joue à Avalam et calcule les meilleurs coups en C.",
        language: ["C"]
    },
    {
        name: "Site de gestion de film (PHP)",
        type: projectsType.Scolaire,
        description: "Site de gestion de film réalisé en PHP avec HTML, CSS, et JavaScript.",
        language: ["PHP", "HTML", "CSS", "JavaScript"]
    },
    {
        name: "App de météo (Java)",
        type: projectsType.Perso,
        description: "Application de météo réalisée en Java.",
        language: ["Java"]
    },
    {
        name: "Éditeur de smileys (PHP)",
        type: projectsType.Scolaire,
        description: "Éditeur de smileys réalisé en PHP.",
        language: ["PHP", "HTML", "CSS", "JavaScript"]
    },
    {
        name: "Site pour un client",
        type: projectsType.Pro,
        description: "Site web développé pour un client, technologies à définir en fonction des besoins.",
        language: ["PHP", "HTML", "CSS", "JavaScript"]
    },
    {
        name: "Bot Discord - Modération avancée (JS)",
        type: projectsType.Perso,
        description: "Bot Discord avec des fonctionnalités avancées de modération réalisé en JavaScript.",
        language: ["JavaScript"]
    },
    {
        name: "Bot Discord - Musique (JS)",
        type: projectsType.Perso,
        description: "Bot Discord dédié à la lecture de musique réalisé en JavaScript.",
        language: ["JavaScript"]
    },
    {
        name: "Bot Discord - Jeu (JS)",
        type: projectsType.Perso,
        description: "Bot Discord avec des fonctionnalités de jeu intégrées réalisé en JavaScript.",
        language: ["JavaScript"]
    },
    {
        name: "Plugin Minecraft - SkyWars (Java)",
        type: projectsType.Perso,
        description: "Plugin Minecraft dédié au mode de jeu SkyWars réalisé en Java.",
        language: ["Java"]
    },
    {
        name: "Plugin Minecraft - SkyBlock (Java)",
        type: projectsType.Perso,
        description: "Plugin Minecraft dédié au mode de jeu SkyBlock réalisé en Java.",
        language: ["Java"]
    },
];

function filterProjects(selectedLang) {
    const selectedLanguage = selectedLang || ["All"];
    const projectContainer = document.getElementById("projectContainer");

    // Supprimer "All" de la liste si d'autres langages sont sélectionnés
    if (selectedLanguage.length > 1 && selectedLanguage.includes("All")) {
        selectedLanguage.splice(selectedLanguage.indexOf("All"), 1);
    }

    // Filtrer les projets en fonction des langages sélectionnés
    const filteredProjects = projects.filter(project => {
        if (selectedLanguage.includes("All")) {
            return true;
        } else {
            return project.language.some(language => selectedLanguage.includes(language));
        }
    });
    // Afficher les projets filtrés dans le conteneur
    projectContainer.innerHTML = "";
    filteredProjects.forEach(project => {
        const projectBox = document.createElement("div");
        projectBox.classList.add("project-box");
        projectBox.innerHTML = `
                <i class="uil uil-briefcase-alt"></i>
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <div class="project-box-footer">
                    <!-- <span class="project-type">${project.type}</span> -->
                    <div class="project-languages" id="project-languages">
                        ${project.language.map(language => `<span>${language}</span>`).join(" ")}
                    </div>
                </div>
            `;
        projectContainer.appendChild(projectBox);
    });
}


function updateProjects() {
    // Récupérer les langages sélectionnés
    var selectedLanguages = $('.language-button.selected').map(function() {
        return $(this).data('language');
    }).get();

    // Si selectedLanguages est vide, alors sélectionner tous les langages
    if(selectedLanguages.length === 0) {
        selectedLanguages = ["All"];
    }

    // Si aucun langage n'est sélectionné, supprimer la classe "selected" du bouton "All"
    if (selectedLanguages.includes("All") && selectedLanguages.length > 1) {
        $('.language-button[data-language="All"]').removeClass('selected');

    }

    filterProjects(selectedLanguages);

}

$(document).ready(function () {

    // Ajoute les boutons de langages
    const uniqueLanguages = [...new Set(projects.map(project => project.language).flat())];

    uniqueLanguages.forEach(language => {
        const languageButton = document.createElement("button");
        languageButton.classList.add("language-button");
        languageButton.setAttribute("data-language", language);
        languageButton.textContent = language;
        document.getElementById("language-buttons").appendChild(languageButton);
    });

    // Ajoute la classe "selected" au bouton "All"
    $('.language-button[data-language="All"]').addClass('selected');

    // Charger tous les projets par défaut
    filterProjects();

    // Lorsqu'un bouton de langage est cliqué
    $('.language-button').click(function() {
        // Mettre à jour la sélection visuelle des boutons
        $(this).toggleClass('selected');

        // Si le bouton "All" est sélectionné, alors on enleve la classe "selected" des autres boutons
        if ($(this).data('language') === "All") {
            $('.language-button').not(this).removeClass('selected');
        } else {
            // Si le bouton "All" n'est pas sélectionné, alors on ajoute la classe "selected" au bouton "All"
            $('.language-button[data-language="All"]').addClass('selected');
        }


        // Mettre à jour les projets en fonction des langages sélectionnés
        updateProjects();
    });
});