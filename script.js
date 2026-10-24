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
    'Formation professionnelle': 'Professional training', 'Analyses & points de vue': 'Insights & perspectives'
  };
  let currentLanguage = 'fr';

  window.addEventListener('scroll', () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 24);
  }, { passive: true });

  if (menuButton) menuButton.addEventListener('click', () => {
    const isOpen = navigation ? navigation.classList.toggle('open') : false;
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  if (navigation) navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navigation.classList.remove('open');
      if (menuButton) menuButton.setAttribute('aria-expanded', 'false');
    });
  });

  function setLanguage(language) {
    const nextLanguage = language === 'en' ? 'en' : 'fr';
    currentLanguage = nextLanguage;
    document.documentElement.lang = nextLanguage;

    document.querySelectorAll('[data-fr][data-en]').forEach((element) => {
      const translation = element.getAttribute(`data-${nextLanguage}`);
      if (translation !== null) element.innerHTML = translation;
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
