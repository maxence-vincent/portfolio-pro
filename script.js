
/* =========================================================
   MAXENCE VINCENT — PORTFOLIO PROFESSIONNEL
   JavaScript complet
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  document.body.classList.add("js-enabled");

  /* =======================================================
     01. NIVEAUX DE COMPÉTENCES
  ======================================================= */

  const skillLevels = {
    /* Synthèse et élaboration */
    "lewis": 5,
    "metathesis": 5,
    "milling": 5,
    "synthesis-ceramic": 5,
    "synthesis-solvothermal": 5,
    "protocols": 5,
    "inert": 5,

    /* RMN */
    "nmr-mas": 5,
    "mqmas": 4,
    "cpmas": 5,
    "hetcor": 3,
    "nmr-liquid": 4,

    /* Spectroscopies */
    "ftir": 5,
    "xps": 5,
    "raman": 5,
    "uv": 5,

    /* Structure */
    "xrd": 4,
    "sem": 4,

    /* Analyses thermiques et gazeuses */
    "gcms": 5,
    "tga": 5,
    "dsc": 4,

    /* Adsorption */
    "bet": 4,
    "pct": 4,
    "gas": 4,

    /* Logiciels */
    "dmfit": 5,
    "origin": 5,
    "omnic": 5,
    "office": 5
  };

  function renderSkillIndicators() {
    const skillElements = document.querySelectorAll(
      ".skill-row[data-skill], .software-item[data-skill]"
    );

    skillElements.forEach((element) => {
      const skillId = element.dataset.skill;
      const level = skillLevels[skillId];
      const dotContainer = element.querySelector(".skill-dots");

      if (!dotContainer || !Number.isInteger(level)) {
        return;
      }

      dotContainer.replaceChildren();

      for (let i = 1; i <= 5; i++) {
        const dot = document.createElement("span");

        dot.classList.add("skill-dot");

        if (i <= level) {
          dot.classList.add("filled");
        }

        dot.setAttribute("aria-hidden", "true");
        dotContainer.appendChild(dot);
      }

      const label = element.querySelector("span:first-child");
      const skillName = label ? label.textContent.trim() : skillId;

      dotContainer.setAttribute("role", "img");
      dotContainer.setAttribute(
        "aria-label",
        `${skillName} : ${level}/5`
      );

      element.setAttribute("data-level", String(level));
    });
  }

  renderSkillIndicators();


  /* =======================================================
     02. TRADUCTIONS FRANÇAIS / ANGLAIS
  ======================================================= */

  const translations = {
    fr: {
      brand: "PORTFOLIO PROFESSIONNEL",

      "nav.about": "Présentation",
      "nav.experience": "Expérience",
      "nav.skills": "Compétences",
      "nav.projects": "Projets",
      "nav.education": "Formation",
      "nav.publications": "Publications",
      "nav.contact": "Contact",
      "nav.getInTouch": "Échanger",

      "hero.eyebrow": "SCIENCE · MATÉRIAUX · CHIMIE",
      "hero.degree": "Docteur en chimie des matériaux",
      "hero.age": "28 ans",
      "hero.targetLabel": "POSTE RECHERCHÉ",
      "hero.target": "INGÉNIERIE – R&D - EXPERTISE",

      "about.eyebrow": "PRÉSENTATION",
      "about.heading": "Comprendre le monde,<br><em>puis explorer.</em>",
      "about.lead": "Docteur en chimie des matériaux, mon parcours m'a conduit à explorer différentes problématiques scientifiques, de la synthèse de matériaux fonctionnels à leur caractérisation avancée.",
      "about.p1": "L'autonomie et la rigueur constituent le socle de mon approche scientifique. La conduite de travaux expérimentaux, l'analyse critique des résultats et la recherche de solutions face aux difficultés rencontrées ont façonné ma manière de travailler.",
      "about.p2": "Curieux et polyvalent, je souhaite continuer à élargir mon champ de compétences et découvrir de nouveaux domaines scientifiques et technologiques. Je ne cherche pas à me limiter à une spécialité, mais à m'investir dans des projets ambitieux, à la croisée de plusieurs disciplines.",
      "about.p3": "Ce qui me motive avant tout est de contribuer à un projet qui a une utilité réelle : développer une solution, faire progresser une technologie ou répondre à un besoin concret, qu'il soit industriel ou sociétal.",

      "experience.eyebrow": "EXPÉRIENCE PROFESSIONNELLE",
      "experience.heading": "Mes expériences<br>",
      "experience.type1": "DOCTORAT",
      "experience.job1": "Docteur en chimie des matériaux",
      "experience.desc1": "Développement et caractérisation de matériaux Al–N–H dérivés de l'ammonia alane pour le stockage chimique de l'hydrogène.",
      "experience.bullet1": "Conception et conduite autonome d'un programme expérimental : définition des priorités, planification des essais, organisation des campagnes de caractérisation et analyse des résultats.",
      "experience.bullet2": "Développement de trois stratégies de synthèse : réaction acide-base de Lewis, métathèse et broyage cryogénique.",
      "experience.bullet3": "Caractérisation multi-technique et étude des environnements chimiques et structuraux.",
      "experience.bullet4": "Initiation d'une collaboration scientifique avec le CEA Saclay, à l'origine de deux publications.",
      "experience.type2": "STAGE R&D",
      "experience.job2": "Stagiaire en recherche et développement",
      "experience.desc2": "Synthèse solvothermale de matériaux poreux de type MOF pour le stockage de l'hydrogène par adsorption.",
      "experience.bullet5": "Synthèse de matériaux poreux et imprégnation par nanoparticules.",
      "experience.bullet6": "Évaluation des propriétés d'adsorption par mesures PCT et BET.",
      "experience.type3": "STAGE",
      "experience.job3": "Stagiaire en chimie des matériaux",
      "experience.desc3": "Synthèse et caractérisation de matériaux céramiques à base d'aminoboranes pour le stockage de l'hydrogène.",
      "experience.bullet7": "Synthèse et caractérisation par RMN liquide, FTIR, ATG-MS, DSC et UV-Visible.",

      "skills.eyebrow": "COMPÉTENCES",
      "skills.heading": "Savoir-faire<br><em>scientifique.</em>",
      "skills.intro": "Synthèse, caractérisation et analyse : des compétences développées au cours de travaux expérimentaux en chimie des matériaux.",
      "skills.catSynthesis": "ÉLABORATION",
      "skills.synthesisTitle": "Synthèse et développement de matériaux",
      "skills.spectroscopyTitle": "Spectroscopies",
      "skills.structureTitle": "Analyses structurales et microscopie",
      "skills.thermalTitle": "Analyses thermiques et gazeuses",
      "skills.adsorptionTitle": "Porosité et adsorption",
      "skills.softwareLabel": "LOGICIELS",
      "skills.legend": "Indicateurs : Niveau 1 Connaissance basique ; Niveau 2 Intermédiaire ; Niveau 3 Autonome ; Niveau 4 Avancé ; Niveau 5 Maitrise complète.",

      "projects.eyebrow": "PROJETS & RÉALISATIONS",
      "projects.heading": "Explorer différentes disciplines.<br>",
      "projects.intro": "Des projets académiques et personnels qui illustrent la diversité des problématiques abordées au cours de mon parcours.",
      "projects.academic": "PROJETS SCIENTIFIQUES ET ACADÉMIQUES",
      "projects.personal": "PROJETS PERSONNELS ET NUMÉRIQUES",
      "projects.inProgress": "PROJET PERSONNEL · EN COURS",
      "projects.details": "Consulter le projet",
      "projects.hideDetails": "Réduire les détails",
      "projects.context": "Contexte scientifique",
      "projects.objectives": "Objectifs et démarche",
      "projects.methods": "Méthodes envisagées",
      "projects.approaches": "Approches étudiées",
      "projects.outlook": "Perspectives de développement",

      "projects.coatingTitle": "Revêtements polymères superhydrophobes pour les vitrages de cockpit",
      "projects.coatingSummary": "Étude de solutions de revêtements fonctionnels destinés à limiter l'encrassement et la formation de givre sur les vitrages aéronautiques.",
      "projects.coatingContext": "Ce travail bibliographique portait sur le développement de revêtements polymères superhydrophobes pour les vitres de cockpit. L'objectif était d'identifier des solutions alternatives pour limiter l'encrassement et le givrage, tout en tenant compte des contraintes d'utilisation réelles en aéronautique.",
      "projects.coatingApproaches": "Plusieurs stratégies ont été examinées : création de structures hiérarchisées, introduction de nanoparticules, texturation par lithographie douce et formulation de nanocomposites polymères. Une piste reposait notamment sur l'association PDMS/SiO₂, avec des méthodes de dépôt par immersion ou pulvérisation.",
      "projects.coatingOutlook": "L'étude envisageait la faisabilité d'un passage de l'échelle laboratoire à un procédé pilote, puis à une éventuelle industrialisation. L'impression 3D, la sélection des matériaux à l'aide de CES EduPack et l'analyse du cycle de vie constituaient également des pistes de réflexion.",
      "projects.coatingStatus": "Étude bibliographique et proposition de stratégies de développement ; aucun revêtement finalisé ni procédé industrialisé n'est revendiqué.",

      "projects.microTitle": "Dépôt de couches minces par évaporation sous vide",
      "projects.microSummary": "Travaux pratiques en salle blanche consacrés aux procédés de dépôt de couches minces par évaporation sous vide.",

      "projects.pvTitle": "Étude bibliographique des technologies photovoltaïques",
      "projects.pvSummary": "Analyse des technologies de cellules photovoltaïques, de leurs performances et des axes de recherche visant à améliorer leur efficacité et leur durabilité.",
      "projects.pvContext": "L'étude comparait la technologie des wafers, largement implantée, aux technologies à couches minces, dont les procédés peuvent être moins énergivores mais dont les rendements restent un enjeu de développement.",
      "projects.pvApproaches": "Les travaux bibliographiques abordaient la gestion thermique des cellules, le développement de revêtements transparents aux propriétés antireflet, autonettoyantes et antigivre, ainsi que les cellules tandem associant plusieurs matériaux pour dépasser les limites de rendement des technologies conventionnelles.",
      "projects.pvOutlook": "Les voies de recyclage ont également été étudiées, notamment le broyage, la délamination chimique ou thermique et la récupération de matériaux d'intérêt comme le silicium.",

      "projects.radioTitle": "Radioactivité et environnement : solubilité des phases uranifères",
      "projects.radioSummary": "Projet tutoré consacré à la présence naturelle des radionucléides dans l'environnement et à l'étude bibliographique des phases uranifères et thorifères.",
      "projects.radioContext": "La radioactivité naturelle est omniprésente dans l'environnement. L'étude bibliographique a porté sur les principales familles radioactives, notamment les séries associées aux isotopes ²³⁸U, ²³⁵U et ²³²Th, ainsi que sur les mécanismes de désintégration alpha et bêta conduisant à des isotopes plus stables.",
      "projects.radioObjectives": "Le travail a consisté à étudier les différentes phases naturelles de l'uranium et du thorium, leurs localisations et leurs abondances. Une campagne de prélèvements a été effectuée autour de la mine de Puech Buissou, en amont et en aval du site, ainsi que sur plusieurs sites : la plage de l'Espiguette dans le Gard et le Collet-de-Dèze en Lozère.",
      "projects.radioMethods": "Le protocole prévoyait la caractérisation d'échantillons liquides et solides par scintillation liquide alpha de type PERALS et par spectroscopie infrarouge. Le projet s'inscrivait dans une démarche d'analyse environnementale, avec des analyses faites au site du CEA Marcoule.",
      "projects.radioStatus": "Projet tutoré : étude bibliographique et définition d'une démarche expérimentale. Les prélèvements et résultats analytiques ne sont pas présentés ici comme des travaux réalisés.",
       
      "projects.portfolioTitle": "Conception et développement de ce portfolio",
      "projects.portfolioSummary": "Création d'un espace numérique personnel pour structurer et valoriser mon parcours scientifique et professionnel.",
      "projects.financeTitle": "Application de gestion de portefeuille boursier",
      "projects.financeSummary": "Développement d'une application de suivi et d'analyse d'un portefeuille d'investissement, avec centralisation des données financières et indicateurs de suivi.",

      "education.eyebrow": "FORMATION",
      "education.heading": "Mon socle scientifique<br>",
      "education.degree1": "Doctorat en chimie des matériaux",
      "education.detail1": "Développement de matériaux Al–N–H pour le stockage chimique de l'hydrogène.",
      "education.degree2": "Master Chimie et Sciences des matériaux",
      "education.detail2": "Spécialités : Fabrication additive, composites, membranes et mousses.",
      "education.degree3": "Licence de chimie",
      "education.detail3": "Formation générale en chimie puis chimie des matériaux en troisième année.",

      "publications.eyebrow": "PRODUCTION SCIENTIFIQUE",
      "publications.heading": "Partager et<br><em>transmettre les résultats.</em>",
      "publications.review": "ARTICLE DE SYNTHÈSE",
      "publications.article": "ARTICLE DE RECHERCHE",
      "publications.paper2": "Al–N–H compounds derived from ammonia alane: Synthesis strategies and characterization",
      "publications.paper3": "Al−N−H compounds derived from ammonia alane: Solid-state NMR study of dehydrogenation-induced polymeric phases",

      "interests.eyebrow": "AU-DELÀ DU LABORATOIRE",
      "interests.heading": "Une curiosité qui<br><em>ne s'arrête pas à la chimie.</em>",
      "interests.sport": "Sports",
      "interests.science": "Sciences",
      "interests.astronomy": "Astronomie",
      "interests.watch": "Veille scientifique",
      "interests.reading": "Lecture",
      "interests.genres": "Philosophie · Fantastique · Science-fiction · Développement personnel",

      "contact.eyebrow": "CONTACT",
      "contact.heading": "Construisons<br><em>la suite ensemble.</em>",
      "contact.intro": "Je suis ouvert aux échanges autour de projets scientifiques ou de possibles collaborations.",
      "contact.email": "M'écrire par e-mail",
      "contact.footer": "Portfolio professionnel",
      "contact.top": "Retour en haut ↑",

      "menu.open": "Ouvrir le menu",
      "menu.close": "Fermer le menu"
    },

    en: {
      brand: "PROFESSIONAL PORTFOLIO",

      "nav.about": "About",
      "nav.experience": "Experience",
      "nav.skills": "Skills",
      "nav.projects": "Projects",
      "nav.education": "Education",
      "nav.publications": "Publications",
      "nav.contact": "Contact",
      "nav.getInTouch": "Get in touch",

      "hero.eyebrow": "SCIENCE · MATERIALS · CHEMISTRY",
      "hero.degree": "PhD in Materials Chemistry",
      "hero.age": "28 years old",
      "hero.targetLabel": "TARGET POSITION",
      "hero.target": "Engineering - R&D - Tecnhical Expertise",

      "about.eyebrow": "ABOUT",
      "about.heading": "A scientific background,<br><em>with an open-minded curiosity.</em>",
      "about.lead": "With a PhD in Materials Chemistry, my academic and research background has led me to explore a range of scientific challenges, from the synthesis of functional materials to their advanced characterisation.",
      "about.p1": "Autonomy and rigour form the foundation of my scientific approach. Conducting experimental work, critically analysing results and finding solutions to experimental challenges have shaped the way I work.",
      "about.p2": "Curious and versatile, I aim to keep broadening my skill set and exploring new scientific and technological fields. Rather than limiting myself to one specialisation, I want to contribute to ambitious projects at the intersection of several disciplines.",
      "about.p3": "Above all, I am motivated by contributing to projects with a tangible purpose: developing a solution, advancing a technology or addressing a practical need, whether industrial or societal.",

      "experience.eyebrow": "PROFESSIONAL EXPERIENCE",
      "experience.heading": "A career shaped<br><em>by experimental research.</em>",
      "experience.type1": "PHD",
      "experience.job1": "PhD Researcher in Materials Chemistry",
      "experience.desc1": "Development and characterisation of Al–N–H materials derived from ammonia alane for chemical hydrogen storage.",
      "experience.bullet1": "Independent design and management of an experimental programme, from synthesis to data interpretation.",
      "experience.bullet2": "Development of three synthesis strategies: Lewis acid–base reaction, metathesis and cryogenic milling.",
      "experience.bullet3": "Multi-technique characterisation and investigation of chemical and structural environments.",
      "experience.bullet4": "Initiation of a scientific collaboration with CEA Saclay, resulting in two publications.",
      "experience.type2": "R&D INTERNSHIP",
      "experience.job2": "Research and Development Intern",
      "experience.desc2": "Solvothermal synthesis of MOF-type porous materials for hydrogen storage by adsorption.",
      "experience.bullet5": "Synthesis of porous materials and nanoparticle impregnation.",
      "experience.bullet6": "Assessment of adsorption properties using PCT and BET measurements.",
      "experience.type3": "INTERNSHIP",
      "experience.job3": "Materials Chemistry Intern",
      "experience.desc3": "Synthesis and characterisation of aminoborane-based ceramic materials for hydrogen storage.",
      "experience.bullet7": "Synthesis and characterisation using liquid-state NMR, FTIR, TGA-MS, DSC and UV-Visible spectroscopy.",

      "skills.eyebrow": "SKILLS",
      "skills.heading": "Experimental expertise<br><em>applied to materials.</em>",
      "skills.intro": "Synthesis, characterisation and analysis: skills developed through experimental work in materials chemistry.",
      "skills.catSynthesis": "MATERIALS DEVELOPMENT",
      "skills.synthesisTitle": "Materials synthesis and development",
      "skills.spectroscopyTitle": "Spectroscopy",
      "skills.structureTitle": "Structural analysis and microscopy",
      "skills.thermalTitle": "Thermal and gas analysis",
      "skills.adsorptionTitle": "Porosity and adsorption",
      "skills.softwareLabel": "SOFTWARE",
      "skills.legend": "Indicators: Level 1 Basic knowledge; Level 2 Intermediate; Level 3 Independent; Level 4 Advanced; Level 5 Complete mastery.",

      "projects.eyebrow": "PROJECTS & ACHIEVEMENTS",
      "projects.heading": "Exploring different disciplines,<br><em>developing solutions.</em>",
      "projects.intro": "Academic and personal projects illustrating the range of scientific and technical challenges explored throughout my background.",
      "projects.academic": "SCIENTIFIC AND ACADEMIC PROJECTS",
      "projects.personal": "PERSONAL AND DIGITAL PROJECTS",
      "projects.inProgress": "PERSONAL PROJECT · IN PROGRESS",
      "projects.details": "View project details",
      "projects.hideDetails": "Hide details",
      "projects.context": "Scientific background",
      "projects.objectives": "Objectives and approach",
      "projects.methods": "Proposed methods",
      "projects.approaches": "Approaches investigated",
      "projects.outlook": "Development perspectives",

      "projects.radioTitle": "Radioactivity and the environment: solubility of uranium-bearing phases",
      "projects.radioSummary": "Supervised project focusing on the natural occurrence of radionuclides in the environment and a literature review of uranium- and thorium-bearing phases.",
      "projects.radioContext": "Natural radioactivity is widespread in the environment. The literature review covered the main radioactive decay series, including those associated with ²³⁸U, ²³⁵U and ²³²Th, as well as alpha and beta decay mechanisms leading to more stable isotopes.",
      "projects.radioObjectives": "The work also involved studying naturally occurring uranium and thorium phases, their locations and abundances. A sampling campaign was considered around the Puech Buissou mine, upstream and downstream of the site, as well as at several locations: the Rhône, Espiguette beach in the Gard region and Collet-de-Dèze in Lozère.",
      "projects.radioMethods": "The proposed protocol included the characterisation of liquid and solid samples using PERALS alpha liquid scintillation and infrared spectroscopy. The project was part of an environmental analysis approach, with analyses associated with the CEA Marcoule site.",
      "projects.radioStatus": "Supervised project: literature review and definition of an experimental approach. Sampling and analytical results are not presented here as completed work.",

      "projects.coatingTitle": "Superhydrophobic polymer coatings for aircraft cockpit windows",
      "projects.coatingSummary": "Study of functional coating solutions designed to reduce contamination and frost formation on aircraft glazing.",
      "projects.coatingContext": "This literature-based project investigated the development of superhydrophobic polymer coatings for cockpit windows. The aim was to identify alternative solutions to limit contamination and icing while considering real-world aerospace operating constraints.",
      "projects.coatingApproaches": "Several strategies were examined: hierarchical surface structures, nanoparticle incorporation, soft-lithography texturing and polymer nanocomposite formulations. One approach involved PDMS/SiO₂ composites, with dip-coating or spray-coating deposition methods.",
      "projects.coatingOutlook": "The study considered the feasibility of moving from laboratory-scale development to a pilot process and potential industrialisation. 3D printing, material selection using CES EduPack and life-cycle assessment were also explored as possible development paths.",
      "projects.coatingStatus": "Literature review and proposed development strategies; no final coating or industrialised process is claimed.",

      "projects.microTitle": "Thin-film deposition by vacuum evaporation",
      "projects.microSummary": "Cleanroom practical work focusing on thin-film deposition processes using vacuum evaporation.",

      "projects.pvTitle": "Literature review of photovoltaic technologies",
      "projects.pvSummary": "Analysis of photovoltaic cell technologies, their performance and research directions aimed at improving efficiency and durability.",
      "projects.pvContext": "The study compared established wafer-based technologies with thin-film technologies, whose processes can be less energy-intensive but whose efficiencies remain a development challenge.",
      "projects.pvApproaches": "The literature review covered cell thermal management, transparent coatings with anti-reflective, self-cleaning and anti-icing properties, as well as tandem cells combining several materials to overcome the efficiency limits of conventional technologies.",
      "projects.pvOutlook": "Recycling routes were also investigated, including grinding, chemical or thermal delamination and the recovery of valuable materials such as silicon.",

      "projects.portfolioTitle": "Design and development of this portfolio",
      "projects.portfolioSummary": "Creation of a personal digital space to organise and showcase my scientific and professional background.",
      "projects.financeTitle": "Stock portfolio management application",
      "projects.financeSummary": "Development of an application to monitor and analyse an investment portfolio, with centralised financial data and performance indicators.",

      "education.eyebrow": "EDUCATION",
      "education.heading": "My scientific<br><em>foundation.</em>",
      "education.degree1": "PhD in Materials Chemistry",
      "education.detail1": "Development of Al–N–H materials for chemical hydrogen storage.",
      "education.degree2": "Master's degree in Chemistry and Materials Science",
      "education.detail2": "Specialties: additive manufacturing, composites, membranes and foams.",
      "education.degree3": "Bachelor's degree in Chemistry",
      "education.detail3": "Broad-based chemistry education, followed by materials chemistry in the third year..",

      "publications.eyebrow": "SCIENTIFIC OUTPUT",
      "publications.heading": "Sharing and<br><em>communicating research.</em>",
      "publications.review": "REVIEW ARTICLE",
      "publications.article": "RESEARCH ARTICLE",
      "publications.paper2": "Al–N–H compounds derived from ammonia alane: Synthesis strategies and characterization",
      "publications.paper3": "Al−N−H compounds derived from ammonia alane: Solid-state NMR study of dehydrogenation-induced polymeric phases",

      "interests.eyebrow": "BEYOND THE LABORATORY",
      "interests.heading": "A curiosity that<br><em>extends beyond chemistry.</em>",
      "interests.sport": "Sports",
      "interests.science": "Science",
      "interests.astronomy": "Astronomy",
      "interests.watch": "Scientific news and developments",
      "interests.reading": "Reading",
      "interests.genres": "Philosophy · Fantasy · Science fiction · Personal development",

      "contact.eyebrow": "CONTACT",
      "contact.heading": "Let's build<br><em>what comes next.</em>",
      "contact.intro": "I welcome conversations about scientific projects or potential collaboration opportunities.",
      "contact.email": "Send me an email",
      "contact.footer": "Professional portfolio",
      "contact.top": "Back to top ↑",

      "menu.open": "Open menu",
      "menu.close": "Close menu"
    }
  };


  /* =======================================================
     03. GESTION DE LA LANGUE
  ======================================================= */

  const languageButton = document.getElementById("language-switch");

  function getSavedLanguage() {
    try {
      const saved = localStorage.getItem("portfolio-language");
      return saved === "en" ? "en" : "fr";
    } catch (error) {
      return "fr";
    }
  }

  let currentLanguage = getSavedLanguage();

  function updateLanguage(language) {
    currentLanguage = language === "en" ? "en" : "fr";

    document.documentElement.lang = currentLanguage;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      const translatedText = translations[currentLanguage][key];

      if (typeof translatedText === "string") {
        element.textContent = translatedText;
      }
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      const key = element.dataset.i18nHtml;
      const translatedHTML = translations[currentLanguage][key];

      if (typeof translatedHTML === "string") {
        element.innerHTML = translatedHTML;
      }
    });

    if (languageButton) {
      languageButton.textContent = currentLanguage === "fr" ? "EN" : "FR";
      languageButton.setAttribute(
        "aria-label",
        currentLanguage === "fr" ? "Switch to English" : "Passer en français"
      );
    }

    updateMenuAccessibility();

    /* Mise à jour dynamique de l'année */
    const footer = document.querySelector(".contact-footer [data-i18n='contact.footer']");

    if (footer) {
      const year = new Date().getFullYear();

      footer.textContent = currentLanguage === "fr"
        ? `Portfolio professionnel · ${year}`
        : `Professional portfolio · ${year}`;
    }

    /* Mise à jour des boutons des projets ouverts */
    document.querySelectorAll(".project-toggle").forEach((button) => {
      const isExpanded = button.getAttribute("aria-expanded") === "true";
      const textElement = button.querySelector("span:first-child");

      if (textElement) {
        textElement.textContent = isExpanded
          ? translations[currentLanguage]["projects.hideDetails"]
          : translations[currentLanguage]["projects.details"];
      }
    });

    try {
      localStorage.setItem("portfolio-language", currentLanguage);
    } catch (error) {
      /* Le site continue de fonctionner si le stockage est indisponible. */
    }
  }

  if (languageButton) {
    languageButton.addEventListener("click", () => {
      const nextLanguage = currentLanguage === "fr" ? "en" : "fr";
      updateLanguage(nextLanguage);
    });
  }


  /* =======================================================
     04. CORRECTION DU LIEN E-MAIL
  ======================================================= */

  const emailLink = document.querySelector('a[href^="mailto:"]');

  if (emailLink) {
    emailLink.href = "mailto:maxence.vincentpro@outlook.com";
  }


  /* =======================================================
     05. TITRE PRINCIPAL
     Deuxième ligne en italique pour reprendre le traitement
     éditorial des titres de section.
  ======================================================= */

  const heroTitle = document.querySelector(".hero h1");

  if (heroTitle && !heroTitle.querySelector("em")) {
    heroTitle.innerHTML =
  'MAXENCE<br><em>VINCENT</em>';
  }


  /* =======================================================
     06. MENU MOBILE
  ======================================================= */

  const menuToggle = document.getElementById("menu-toggle");
  const mainNav = document.getElementById("main-nav");

   updateLanguage(currentLanguage);
   
  function updateMenuAccessibility() {
    if (!menuToggle) return;

    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute(
      "aria-label",
      translations[currentLanguage][isOpen ? "menu.close" : "menu.open"]
    );
  }

  function closeMenu() {
    if (!menuToggle || !mainNav) return;

    menuToggle.setAttribute("aria-expanded", "false");
    mainNav.classList.remove("is-open");
    updateMenuAccessibility();
  }

  function openMenu() {
    if (!menuToggle || !mainNav) return;

    menuToggle.setAttribute("aria-expanded", "true");
    mainNav.classList.add("is-open");
    updateMenuAccessibility();
  }

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", (event) => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

      if (
        isOpen &&
        !mainNav.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 760) {
        closeMenu();
      }
    });
  }


  /* =======================================================
     07. DÉTAILS DES PROJETS
  ======================================================= */


  /* =======================================================
     07. DÉTAILS DES PROJETS
  ======================================================= */

  document.addEventListener("click", (event) => {
    const button = event.target.closest(".project-toggle");

    if (!button) return;

    const targetId = button.dataset.target;
    const target = document.getElementById(targetId);

    if (!target) {
      console.warn("Contenu du projet introuvable :", targetId);
      return;
    }

    const isExpanded = button.getAttribute("aria-expanded") === "true";
    const nextState = !isExpanded;

    button.setAttribute("aria-expanded", String(nextState));
    target.toggleAttribute("hidden", !nextState);

    const textElement = button.querySelector("span:first-child");
    const iconElement = button.querySelector("span:last-child");

    if (textElement) {
      textElement.textContent = nextState
        ? translations[currentLanguage]["projects.hideDetails"]
        : translations[currentLanguage]["projects.details"];
    }

    if (iconElement) {
      iconElement.textContent = nextState ? "−" : "＋";
    }
  });


  /* =======================================================
     08. ANIMATION D'APPARITION AU DÉFILEMENT
  ======================================================= */

  const revealElements = document.querySelectorAll(".reveal");

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach((element) => {
      element.classList.add("is-visible");
    });
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -45px 0px"
      }
    );

    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });
  }


  /* =======================================================
     09. FRISE CHRONOLOGIQUE
  ======================================================= */

  const timeline = document.querySelector(".timeline");

  if (timeline) {
    let timelineProgress = timeline.querySelector(".timeline-progress");

    if (!timelineProgress) {
      timelineProgress = document.createElement("div");
      timelineProgress.className = "timeline-progress";
      timelineProgress.setAttribute("aria-hidden", "true");
      timeline.prepend(timelineProgress);
    }

    const timelineItems = timeline.querySelectorAll(".timeline-item");

    /* Marqueurs : activation lorsque chaque expérience apparaît */
    if ("IntersectionObserver" in window) {
      const timelineObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
            }
          });
        },
        {
          threshold: 0.15,
          rootMargin: "0px 0px -35px 0px"
        }
      );

      timelineItems.forEach((item) => {
        timelineObserver.observe(item);
      });
    } else {
      timelineItems.forEach((item) => {
        item.classList.add("is-visible");
      });
    }

    let ticking = false;

    function updateTimelineProgress() {
      const rect = timeline.getBoundingClientRect();
      const timelineHeight = timeline.offsetHeight;

      /*
       * La progression suit le défilement de la page.
       * Elle commence lorsque la frise approche du centre
       * de la fenêtre et se termine à sa sortie.
       */
      const referencePoint = window.innerHeight * 0.62;
      const travelled = referencePoint - rect.top;

      const progress = Math.max(
        0,
        Math.min(1, travelled / timelineHeight)
      );

      timelineProgress.style.height =
        `${timelineHeight * progress}px`;

      ticking = false;
    }

    function requestTimelineUpdate() {
      if (!ticking) {
        window.requestAnimationFrame(updateTimelineProgress);
        ticking = true;
      }
    }

    window.addEventListener("scroll", requestTimelineUpdate, {
      passive: true
    });

    window.addEventListener("resize", requestTimelineUpdate);

    window.addEventListener("load", requestTimelineUpdate);

    updateTimelineProgress();
  }


  /* =======================================================
     10. NAVIGATION ACTIVE SELON LA SECTION VISIBLE
  ======================================================= */

  const navLinks = document.querySelectorAll(
    '.main-nav a[href^="#"]'
  );

  const sections = document.querySelectorAll(
    "main section[id]"
  );

  function setActiveNavigation(sectionId) {
    navLinks.forEach((link) => {
      const targetId = link.getAttribute("href").slice(1);

      if (targetId === sectionId) {
        link.classList.add("active");
        link.setAttribute("aria-current", "location");
      } else {
        link.classList.remove("active");
        link.removeAttribute("aria-current");
      }
    });
  }

  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveNavigation(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0, 0.1, 0.25, 0.5]
      }
    );

    sections.forEach((section) => {
      sectionObserver.observe(section);
    });
  }


  /* =======================================================
     11. LIENS INTERNES : DÉFILEMENT FLUIDE
  ======================================================= */

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href").slice(1);

      if (!targetId) return;

      const target = document.getElementById(targetId);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
        block: "start"
      });

      /*
       * Mise à jour de l'adresse sans rechargement de la page.
       */
      if (history.replaceState) {
        history.replaceState(null, "", `#${targetId}`);
      }
    });
  });


  /* =======================================================
     12. ANNÉE DU PIED DE PAGE
  ======================================================= */

  const footer = document.querySelector(
    ".contact-footer [data-i18n='contact.footer']"
  );

  if (footer) {
    const year = new Date().getFullYear();

    footer.textContent = currentLanguage === "fr"
      ? `Portfolio professionnel · ${year}`
      : `Professional portfolio · ${year}`;
  }


  /* =======================================================
     13. INITIALISATION
  ======================================================= */

  /*
   * Réinitialisation des points de compétence après
   * l'application des traductions.
   */
  renderSkillIndicators();

  /*
   * Si l'utilisateur arrive directement sur une ancre,
   * on met à jour la navigation.
   */
  const initialSection = window.location.hash.replace("#", "");

  if (initialSection) {
    setActiveNavigation(initialSection);
  }

});
