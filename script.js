(() => {
  const header = document.querySelector('[data-header]');
  const menuButton = document.querySelector('.menu');
  const navigation = document.querySelector('.nav');
  const languageButtons = document.querySelectorAll('.lang');
  const storageKey = 'ejpartners-language';
  const plainTranslations = {
    'Accueil': 'Home', 'Le cabinet': 'The firm', 'Expertises': 'Expertise',
    'Secteurs': 'Sectors', 'Notre approche': 'Our approach', 'Formations': 'Training',
    'Publications': 'Insights', 'Contact': 'Contact', 'Conseil · Audit · Formation': 'Advisory · Audit · Training',
    'Nous contacter ↗': 'Contact us ↗', 'Demander un échange ↗': 'Request a conversation ↗',
    'Présenter mon besoin ↗': 'Share my challenge ↗', 'Découvrir nos expertises →': 'Explore our expertise →',
    'Voir toutes les expertises →': 'See all expertise →', 'Découvrir le cabinet →': 'Discover the firm →',
    'Voir notre méthode →': 'See our method →', 'Un premier échange': 'A first conversation',
    'Notre identité': 'Our identity', 'Notre mission': 'Our mission', 'Nos programmes': 'Our programmes',
    'Secteurs d’intervention': 'Sectors we serve', 'Secteurs d\'intervention': 'Sectors we serve',
    'Formation professionnelle': 'Professional training', 'Analyses & points de vue': 'Insights & perspectives', 'Cybersécurité': 'Cybersecurity',
    'Gestion des risques d’entreprise': 'Enterprise risk management', 'Gestion des risques d\'entreprise': 'Enterprise risk management',
    'Aller au contenu': 'Skip to content', 'Menu': 'Menu', 'Un risque à clarifier ?': 'A risk to clarify?',
    'Une transformation à sécuriser ?': 'A transformation to secure?', 'Des réponses structurées aux risques qui comptent.': 'Structured answers to the risks that matter.',
    'Des enjeux différents. Une même exigence de maîtrise.': 'Different challenges. The same standard of control.',
    'Du diagnostic à la décision, avec un fil conducteur.': 'From diagnosis to decision, with a clear thread.',
    'Une expertise qui relie la décision, la technologie et le risque.': 'Expertise that connects decisions, technology and risk.',
    'EJ&PARTNERS aide les organisations à identifier, évaluer et gouverner leurs risques métier, technologiques et cyber, avec une approche pragmatique et structurée.': 'EJ&PARTNERS helps organisations identify, assess and govern business, technology and cyber risks through a pragmatic, structured approach.',
    'EJ&PARTNERS intervient à l\'intersection de ces enjeux pour transformer la complexité en priorités d\'action lisibles.': 'EJ&PARTNERS works at the intersection of these issues to turn complexity into clear priorities for action.',
    'Les organisations évoluent dans un environnement où les risques sont interdépendants. Une décision stratégique peut dépendre d\'une architecture IT, d\'un fournisseur critique, d\'une exigence réglementaire ou d\'un usage de l\'intelligence artificielle.': 'Organisations operate in an environment where risks are interconnected. A strategic decision can depend on an IT architecture, a critical supplier, a regulatory requirement or the use of artificial intelligence.',
    'Chaque mission commence par vos objectifs, vos contraintes et votre niveau de maturité.': 'Every engagement starts with your objectives, constraints and level of maturity.',
    'Cartographier, évaluer et prioriser.': 'Map, assess and prioritise.', 'Prévenir, détecter et résister.': 'Prevent, detect and withstand.',
    'Aligner IT, contrôle et métier.': 'Align IT, control and business.', 'Encadrer les usages responsables.': 'Govern responsible use.',
    'Continuité · conformité · résilience': 'Continuity · compliance · resilience', 'Données · tiers · gouvernance': 'Data · third parties · governance',
    'Infrastructures · disponibilité · cyber': 'Infrastructure · availability · cyber', 'Transformation · service · confiance': 'Transformation · service · trust',
    'Comprendre les objectifs métier.': 'Understand business objectives.', 'Établir une lecture factuelle de l\'existant.': 'Build a factual view of the current state.',
    'Concentrer l\'effort sur les risques critiques.': 'Focus effort on critical risks.', 'Rendre les progrès durables.': 'Make progress sustainable.',
    'Voir les risques. Choisir les priorités. Construire la suite.': 'See the risks. Set priorities. Build what comes next.',
    'Des missions de conseil, d\'audit et de formation pour les décisions qui engagent votre organisation.': 'Advisory, audit and training engagements for decisions that matter to your organisation.',
    'Une exigence de clarté, de rigueur et d\'indépendance.': 'A commitment to clarity, rigour and independence.',
    'EJ&PARTNERS accompagne les organisations qui veulent décider avec une lecture solide de leurs risques et de leurs responsabilités.': 'EJ&PARTNERS supports organisations that want to make decisions based on a clear view of their risks and responsibilities.',
    'Rendre les enjeux complexes compréhensibles et actionnables.': 'Make complex challenges understandable and actionable.',
    'Nous travaillons avec les équipes dirigeantes et opérationnelles pour transformer une question de risque en décisions, priorités et responsabilités partagées.': 'We work with leadership and operational teams to turn a risk question into decisions, priorities and shared ownership.',
    'Des organisations capables de créer de la valeur dans un environnement où les risques sont connus, gouvernés et réévalués.': 'Organisations that can create value where risks are understood, governed and reassessed.',
    'Rigueur, pragmatisme, confidentialité et transmission des compétences.': 'Rigour, pragmatism, confidentiality and skills transfer.',
    'À l\'intersection de la gouvernance, de la technologie, de la cybersécurité et des risques.': 'At the intersection of governance, technology, cybersecurity and risk.',
    'Des recommandations proportionnées et directement reliées aux décisions à prendre.': 'Proportionate recommendations directly connected to the decisions at hand.',
    'Une bonne décision de risque commence par une compréhension commune du problème.': 'A good risk decision starts with a shared understanding of the problem.',
    'Voir notre méthode →': 'See our method →', 'Parler à notre équipe ↗': 'Talk to our team ↗',
    'Comprendre les contraintes de votre environnement.': 'Understand the constraints of your environment.',
    'Les priorités de risque prennent leur sens lorsqu\'elles sont reliées à votre activité, vos obligations et vos parties prenantes.': 'Risk priorities matter when they are connected to your activity, obligations and stakeholders.',
    'Un regard métier pour rendre les risques concrets.': 'Business context that makes risk concrete.',
    'Nous adaptons les questions, les exemples et les livrables au contexte de chaque organisation.': 'We adapt questions, examples and deliverables to each organisation\'s context.',
    'Résilience opérationnelle, sécurité des canaux, risques tiers, conformité et continuité.': 'Operational resilience, channel security, third-party risk, compliance and continuity.',
    'Protection des données, gouvernance des prestataires et maîtrise des processus numériques.': 'Data protection, provider governance and control of digital processes.',
    'Disponibilité des infrastructures, vulnérabilités, architecture et réponse aux incidents.': 'Infrastructure availability, vulnerabilities, architecture and incident response.',
    'Transformation numérique, protection des services essentiels et confiance des usagers.': 'Digital transformation, protection of essential services and citizen trust.',
    'Une démarche qui mène à une décision et à une action.': 'A method that leads to decisions and action.',
    'Nous construisons le bon niveau de profondeur pour que l\'analyse soit utile à ceux qui doivent arbitrer, agir et rendre compte.': 'We set the right level of depth so analysis is useful to those who must decide, act and report.',
    'Quatre temps, un même fil conducteur.': 'Four stages, one clear thread.',
    'Le cadrage est adapté à la taille, au niveau de maturité et à l\'urgence de votre contexte.': 'The engagement is tailored to the size, maturity and urgency of your context.',
    'Clarifier les objectifs métier, le périmètre, les interlocuteurs, les décisions attendues et les contraintes de la mission.': 'Clarify business objectives, scope, stakeholders, expected decisions and engagement constraints.',
    'Collecter les informations utiles, comprendre l\'existant, confronter les pratiques aux exigences et documenter les écarts.': 'Gather useful information, understand the current state, compare practices with requirements and document gaps.',
    'Évaluer les impacts, les dépendances et les efforts pour distinguer les actions critiques des améliorations progressives.': 'Assess impacts, dependencies and effort to distinguish critical actions from progressive improvements.',
    'Formaliser les décisions, les responsabilités, les indicateurs et les modalités de suivi pour que les résultats durent.': 'Formalise decisions, ownership, metrics and follow-up so results last.',
    'La méthode est un moyen. La valeur se mesure à la qualité des décisions qu\'elle permet de prendre.': 'The method is a means. Its value is measured by the quality of decisions it enables.',
    'Faire de la cybersécurité une capacité de confiance.': 'Make cybersecurity a trusted capability.',
    'De la compréhension de l\'exposition à la feuille de route, nous aidons les organisations à renforcer leur prévention, leur détection et leur résilience.': 'From understanding exposure to building a roadmap, we help organisations strengthen prevention, detection and resilience.',
    'Passer d\'une sécurité déclarative à une sécurité pilotée.': 'Move from stated security to managed security.',
    'Une mission utile relie les mesures techniques aux actifs critiques, aux responsabilités et aux décisions de l\'organisation.': 'A useful engagement connects technical measures with critical assets, ownership and organisational decisions.',
    'Cartographier les actifs, les menaces, les contrôles existants et les écarts prioritaires.': 'Map assets, threats, existing controls and priority gaps.',
    'Définir des mesures proportionnées, des exigences d\'architecture et des plans de traitement.': 'Define proportionate measures, architecture requirements and treatment plans.',
    'Clarifier les rôles, les scénarios d\'incident, les circuits d\'escalade et les exercices.': 'Clarify ownership, incident scenarios, escalation paths and exercises.',
    'Installer des indicateurs et une boucle de progrès qui rendent la maturité visible.': 'Set up metrics and a continuous improvement loop that makes maturity visible.',
    'Développer les compétences qui rendent la maîtrise durable.': 'Build the skills that make control sustainable.',
    'Des programmes adaptés aux métiers, aux niveaux et aux objectifs de votre organisation.': 'Programmes adapted to your roles, levels and organisational objectives.',
    'Apprendre, pratiquer, transmettre.': 'Learn, practise, transfer.',
    'Chaque formation combine des repères clairs, des cas proches de votre environnement et des outils réutilisables.': 'Each programme combines clear foundations, cases close to your environment and reusable tools.',
    'Comprendre les risques cyber, les responsabilités de gouvernance et les décisions à prendre.': 'Understand cyber risk, governance responsibilities and the decisions leaders need to make.',
    'Clarifier les rôles, les contrôles, les indicateurs et le lien entre IT et métier.': 'Clarify roles, controls, metrics and the link between IT and business.',
    'Revoir les fondamentaux des architectures réseau et des pratiques de sécurisation.': 'Review network architecture fundamentals and security practices.',
    'Construire une cartographie utile, prioriser les traitements et suivre les plans d\'action.': 'Build a useful risk map, prioritise treatments and track action plans.',
    'Des repères pour mieux comprendre les risques qui évoluent.': 'Perspective on evolving risks.',
    'Cette rubrique accueillera les analyses, notes et retours d\'expérience validés par EJ&PARTNERS.': 'This section will host analyses, notes and experience feedback validated by EJ&PARTNERS.',
    'Une publication utile commence par une question de décision.': 'Useful insight starts with a decision question.',
    'Les contenus ci-dessous structurent l\'espace éditorial en attendant la publication des analyses officielles du cabinet.': 'The cards below structure the editorial space while the firm\'s official insights are prepared.',
    'Comment rendre un comité des risques plus décisionnel ?': 'How can a risk committee become more decision-oriented?',
    'Une future note sur les indicateurs, les arbitrages et la préparation des décisions.': 'A forthcoming note on metrics, trade-offs and decision preparation.',
    'Mesurer la maturité cyber sans perdre le terrain de vue': 'Measure cyber maturity without losing sight of reality',
    'Une future analyse sur la lecture des écarts et la priorisation des actions.': 'A forthcoming analysis on understanding gaps and prioritising action.',
    'Quelles premières questions poser face à un usage d\'IA ?': 'What first questions should you ask about an AI use case?',
    'Une future fiche pratique pour commencer un inventaire des usages et responsabilités.': 'A forthcoming practical guide to start mapping use cases and ownership.',
    'Recevoir les prochaines analyses ?': 'Want the next insights?', 'Recevoir les publications ↗': 'Receive insights ↗',
    'Présentez-nous votre enjeu.': 'Tell us about your challenge.',
    'Conseil, audit ou formation : quelques informations suffisent pour orienter votre demande.': 'Advisory, audit or training: a few details are enough to route your request.',
    'Une demande claire commence par votre contexte.': 'A clear request starts with your context.',
    'Utilisez ce formulaire pour indiquer le sujet, le type d\'accompagnement recherché et les premiers éléments utiles.': 'Use this form to tell us the topic, type of support and first useful details.',
    'Nom et prénom': 'Name', 'Adresse e-mail': 'Email address', 'Organisation': 'Organisation', 'Type de demande': 'Request type',
    'Votre message': 'Your message', 'Sélectionner': 'Select', 'Conseil / accompagnement': 'Advisory / support', 'Audit / évaluation': 'Audit / assessment',
    'Formation': 'Training', 'Coordonnées professionnelles': 'Professional contact details', 'À configurer avec les informations validées': 'To be configured with validated contact details',
    'Domaine': 'Domain', 'Parlons de votre secteur et de ses contraintes.': 'Let\'s discuss your sector and its constraints.',
    'Vous avez un besoin de formation à cadrer ?': 'Need to frame a training programme?', 'Demander un programme ↗': 'Request a programme ↗',
    'Définissons ensemble le bon point de départ.': 'Let\'s define the right starting point together.', 'Démarrer un échange ↗': 'Start a conversation ↗',
    'Échangeons sur votre exposition et vos priorités.': 'Let\'s discuss your exposure and priorities.', 'Demander un échange ↗': 'Request a conversation ↗',
    'Vous souhaitez mieux cadrer un enjeu stratégique ?': 'Looking to frame a strategic challenge more clearly?', 'Parler à notre équipe ↗': 'Talk to our team ↗'
    , 'Banque & microfinance': 'Banking & microfinance', 'Assurance': 'Insurance', 'Télécommunications': 'Telecommunications',
    'Administration publique': 'Public sector', 'Secteur public': 'Public sector', 'Gestion des risques d’entreprise': 'Enterprise risk management',
    'Gouvernance et risques IT': 'IT governance and risk', 'Gouvernance des systèmes d’information': 'Information systems governance',
    'Gouvernance des systèmes d\'information': 'Information systems governance', 'Audit et évaluation de maturité': 'Audit and maturity assessment',
    'Risques liés à l’IA': 'AI risk', 'Risques liés à l\'IA': 'AI risk', 'Risques liés à l\'intelligence artificielle': 'Artificial intelligence risk',
    'Risques tiers et chaîne d’approvisionnement': 'Third-party and supply-chain risk', 'Risques tiers et chaîne d\'approvisionnement': 'Third-party and supply-chain risk',
    'Architecture de sécurité & formation': 'Security architecture & training', 'Réseaux et sécurité': 'Networks and security',
    'Cybersécurité pour décideurs': 'Cybersecurity for leaders', 'Conseil en cybersécurité': 'Cybersecurity advisory',
    'EJ&PARTNERS · Conseil en cybersécurité': 'EJ&PARTNERS · Cybersecurity advisory', 'EJ&PARTNERS · Conseil, audit & formation': 'EJ&PARTNERS · Advisory, audit & training',
    'À venir': 'Coming soon', 'À configurer avec les informations validées': 'To be configured with validated contact details'
    , 'Domaines d’intervention': 'Areas of expertise', 'Domaines d\'intervention': 'Areas of expertise',
    'Environnements critiques': 'Critical environments', 'Le besoin': 'The challenge', 'Les étapes': 'The steps',
    'Nous écouter': 'Let\'s listen', 'À venir': 'Coming soon', 'Expertise 03': 'Expertise 03',
    'Nos expertises': 'Our expertise', 'Secteurs d’intervention': 'Sectors we serve'
  };
  let currentLanguage = 'fr';
  if (menuButton) menuButton.setAttribute('aria-label', 'Ouvrir la navigation');

  window.addEventListener('scroll', () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 24);
  }, { passive: true });

  if (menuButton) menuButton.addEventListener('click', () => {
    const isOpen = navigation ? navigation.classList.toggle('open') : false;
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Fermer la navigation' : 'Ouvrir la navigation');
  });

  if (navigation) navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navigation.classList.remove('open');
      if (menuButton) {
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Ouvrir la navigation');
      }
    });
  });

  if (navigation) {
    if (!navigation.querySelector('a[href="index.html"]')) {
      const homeLink = document.createElement('a');
      homeLink.href = 'index.html';
      homeLink.dataset.fr = 'Accueil';
      homeLink.dataset.en = 'Home';
      homeLink.textContent = 'Accueil';
      navigation.insertBefore(homeLink, navigation.firstChild);
    }
    const contactLink = navigation.querySelector('a[href="contact.html"]');
    if (contactLink) {
      contactLink.dataset.fr = 'Contact';
      contactLink.dataset.en = 'Contact';
      contactLink.textContent = 'Contact';
    }
    const currentFile = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
    const activeFile = currentFile.indexOf('expertise-') === 0 ? 'expertises.html' : currentFile;
    navigation.querySelectorAll('a[href]').forEach((link) => {
      const targetFile = (link.getAttribute('href') || '').split('#')[0].toLowerCase() || 'index.html';
      const isCurrent = targetFile === activeFile;
      link.classList.toggle('active', isCurrent);
      if (isCurrent) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  }

  function setLanguage(language) {
    const nextLanguage = language === 'en' ? 'en' : 'fr';
    currentLanguage = nextLanguage;
    document.documentElement.lang = nextLanguage;

    if (!document.body.__frenchTitle) document.body.__frenchTitle = document.title;
    if (nextLanguage === 'fr') {
      document.title = document.body.__frenchTitle;
    } else {
      let translatedTitle = document.body.__frenchTitle;
      Object.keys(plainTranslations).forEach((french) => {
        translatedTitle = translatedTitle.split(french).join(plainTranslations[french]);
      });
      document.title = translatedTitle;
    }

    document.querySelectorAll('[data-fr][data-en]').forEach((element) => {
      const translation = element.getAttribute(`data-${nextLanguage}`);
      if (translation !== null) element.innerHTML = translation;
    });

    const menuLabels = {
      'index.html': ['Accueil', 'Home'],
      'cabinet.html': ['Le cabinet', 'The firm'],
      'expertises.html': ['Expertises', 'Expertise'],
      'secteurs.html': ['Secteurs', 'Sectors'],
      'approche.html': ['Notre approche', 'Our approach'],
      'formations.html': ['Formations', 'Training'],
      'publications.html': ['Publications', 'Insights'],
      'contact.html': ['Contact', 'Contact']
    };
    if (navigation) navigation.querySelectorAll('a[href]').forEach((link) => {
      const target = (link.getAttribute('href') || '').split('#')[0].toLowerCase() || 'index.html';
      const label = menuLabels[target];
      if (label) link.textContent = label[nextLanguage === 'fr' ? 0 : 1];
    });

    const walker = document.createTreeWalker(document.body, 4);
    const textNodes = [];
    let node;
    while ((node = walker.nextNode())) textNodes.push(node);
    textNodes.forEach((textNode) => {
      if (textNode.parentElement && (textNode.parentElement.closest('[data-fr][data-en]') || /^(SCRIPT|STYLE)$/.test(textNode.parentElement.tagName))) return;
      if (typeof textNode.__frenchText === 'undefined') textNode.__frenchText = textNode.nodeValue;
      if (nextLanguage === 'fr') {
        textNode.nodeValue = textNode.__frenchText;
      } else {
        let translated = textNode.__frenchText;
        Object.keys(plainTranslations).forEach((french) => {
          translated = translated.split(french).join(plainTranslations[french]);
        });
        textNode.nodeValue = translated;
      }
    });

    languageButtons.forEach((button) => {
      button.dataset.lang = nextLanguage === 'fr' ? 'en' : 'fr';
      button.textContent = nextLanguage === 'fr' ? 'EN' : 'FR';
      button.setAttribute('type', 'button');
      button.setAttribute('aria-label', nextLanguage === 'fr' ? 'Passer en anglais' : 'Switch to French');
      button.setAttribute('aria-pressed', String(nextLanguage === 'en'));
    });

    try { window.localStorage.setItem(storageKey, nextLanguage); } catch (_) { /* stockage indisponible */ }
  }

  languageButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      setLanguage(button.dataset.lang);
    });
  });

  document.querySelectorAll('[data-form]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const status = form.querySelector('.status');
      if (status) {
        status.textContent = currentLanguage === 'fr'
          ? 'Votre demande est prête. Le canal de réception doit encore être configuré.'
          : 'Your request is ready. The receiving channel still needs to be configured.';
      }
    });
  });

  document.querySelectorAll('[data-year]').forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  let savedLanguage = 'fr';
  try { savedLanguage = window.localStorage.getItem(storageKey) || 'fr'; } catch (_) { /* stockage indisponible */ }
  setLanguage(savedLanguage);
})();
