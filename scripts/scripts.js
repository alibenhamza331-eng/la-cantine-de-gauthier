(function () {
  const i18n = {
    fr: {
      meta: {
        title: 'La Cantine de Gauthier | Brasserie française à Casablanca',
        description: 'Cuisine française au cœur de Gauthier : plats signature, service attentif, ambiance lumineuse.'
      },
      brand: { city: 'Gauthier', name: 'La Cantine de Gauthier' },
      nav: { concept: 'Concept', menu: 'Menu', gallery: 'Galerie', reviews: 'Avis', contact: 'Contact' },
      cta: { call: 'Appeler', whatsapp: 'WhatsApp' },
      hero: {
        chip1: 'Cuisine française',
        chip2: 'Gauthier, Casablanca',
        chip3: 'Horaires à confirmer',
        title: 'Brasserie lumineuse, plats signature et service attentif.',
        lead: 'Une adresse parisienne au cœur de Casablanca : cuisine de saison, produits frais, ambiance cosy et soignée.',
        cta: {
          whatsapp: 'Commander / Réserver sur WhatsApp',
          call: 'Appeler la Cantine'
        },
        caption1: 'Plat signature, dressage soigné et cuisson minute.',
        caption2: 'Carte du moment, cuisine de saison.',
        caption3: 'Ambiance claire, brasserie parisienne.'
      },
      stats: {
        rating: { value: '4.8/5', label: 'Note moyenne (Tripadvisor)' },
        price: { value: '120 MAD', label: 'Prix moyen constaté' },
        location: { value: 'Gauthier', label: '3 Rue Abou Adil Allaf' }
      },
      concept: {
        chip: 'Notre esprit',
        title: 'Une cantine chic inspirée des brasseries parisiennes.',
        lead: '« Cantine » vient de l’italien « cantina », un lieu où l’on se retrouve pour partager un repas simple et généreux.',
        point1: 'Cuisine française de saison, produits frais et cuisson minute.',
        point2: 'Salle lumineuse, tables serrées façon brasserie, service attentif.',
        point3: 'Quartier Gauthier, adresse centrale et facile d’accès.'
      },
      menu: {
        chip: 'La carte',
        title: 'Sélection du moment',
        lead: 'Plats phares relevés depuis les cartes publiques. Prix susceptibles d’évoluer.',
        note: 'Cartes complètes à consulter ci-dessous.'
      },
      quick: { reserve: 'Réserver' },
      experience: {
        chip: 'Pourquoi venir',
        title: 'Des essentiels qui font la différence.',
        lead: 'Cuisine française, salle cosy, bar à cocktails : le trio gagnant pour un repas réussi.',
        item1: { title: 'Cuisine française', copy: 'Classiques brasserie : confit de canard, sole meunière, tartare préparé minute.' },
        item2: { title: 'Ambiance claire', copy: 'Lumière naturelle, bois clair, banquettes confortables.' },
        item3: { title: 'Bar & cocktails', copy: 'Sélection de vins français, spritz, cocktails signatures.' },
        item4: { title: 'Service attentif', copy: 'Accueil soigné, réservations faciles par appel ou WhatsApp.' }
      },
      gallery: { chip: 'Galerie', title: 'En images', lead: 'Plats, salle et cartes pour visualiser l’expérience.' },
      reviews: {
        chip: 'Avis & presse',
        title: 'Les clients en parlent.',
        lead: 'Notes issues des plateformes publiques, mises à jour régulièrement.',
        trip: 'Tripadvisor · 44 avis',
        google: 'Google Maps · quartier Gauthier',
        press: '“Brasserie française lumineuse et généreuse.” — Presse locale',
        cta: 'Laissez votre avis pour aider la communauté.'
      },
      contact: {
        chip: 'Contact',
        title: 'Réserver ou passer commande',
        lead: 'Quartier Gauthier, Casablanca. Horaires provisoires, à confirmer.',
        address: { label: 'Adresse', value: '3 Rue Abou Adil Allaf, Casablanca 20000' },
        map: 'Ouvrir dans Google Maps',
        hours: '12h00–15h00 & 18h00–01h00 (lun–sam) · À confirmer',
        book: 'Réservation conseillée en soirée.',
        whatsapp: 'WhatsApp',
        call: 'Appeler',
        email: 'Email (à confirmer)',
        follow: 'Suivez-nous'
      },
      footer: { dev: 'Développé par Ali Benhamza' }
    },
    en: {
      meta: {
        title: 'La Cantine de Gauthier | French brasserie in Casablanca',
        description: 'French cuisine in Gauthier: seasonal dishes, attentive service and a bright Parisian-style room.'
      },
      brand: { city: 'Gauthier', name: 'La Cantine de Gauthier' },
      nav: { concept: 'Concept', menu: 'Menu', gallery: 'Gallery', reviews: 'Reviews', contact: 'Contact' },
      cta: { call: 'Call', whatsapp: 'WhatsApp' },
      hero: {
        chip1: 'French cuisine',
        chip2: 'Gauthier, Casablanca',
        chip3: 'Hours to be confirmed',
        title: 'Bright brasserie, signature plates and attentive service.',
        lead: 'A Parisian address in Casablanca: seasonal cooking, fresh produce, cosy atmosphere.',
        cta: {
          whatsapp: 'Book or order on WhatsApp',
          call: 'Call the restaurant'
        },
        caption1: 'Signature dish, precise cooking and plating.',
        caption2: 'Current menu, seasonal produce.',
        caption3: 'Bright room, Parisian brasserie mood.'
      },
      stats: {
        rating: { value: '4.8/5', label: 'Average rating (Tripadvisor)' },
        price: { value: '120 MAD', label: 'Average spend' },
        location: { value: 'Gauthier', label: '3 Rue Abou Adil Allaf' }
      },
      concept: {
        chip: 'Our spirit',
        title: 'A chic canteen inspired by Parisian brasseries.',
        lead: '“Cantine” comes from the Italian “cantina”: a welcoming place to share simple, generous food.',
        point1: 'Seasonal French cooking, fresh produce, cooked to order.',
        point2: 'Bright room, close-set brasserie tables, attentive team.',
        point3: 'Located in Gauthier, easy to reach in Casablanca.'
      },
      menu: {
        chip: 'Menu',
        title: 'Highlights right now',
        lead: 'Signature dishes spotted on public menus. Prices may change.',
        note: 'Full printed menus below.'
      },
      quick: { reserve: 'Reserve' },
      experience: {
        chip: 'Why visit',
        title: 'Essentials that make the difference.',
        lead: 'French cuisine, cosy room, cocktail bar: a winning trio.',
        item1: { title: 'French classics', copy: 'Confit duck, sole meunière, hand-cut tartare.' },
        item2: { title: 'Bright mood', copy: 'Natural light, light wood, comfortable banquettes.' },
        item3: { title: 'Bar & cocktails', copy: 'French wines, spritz, house signatures.' },
        item4: { title: 'Attentive team', copy: 'Easy bookings by phone or WhatsApp.' }
      },
      gallery: { chip: 'Gallery', title: 'In pictures', lead: 'Dishes, room and menus at a glance.' },
      reviews: {
        chip: 'Reviews & press',
        title: 'Guests are talking.',
        lead: 'Scores from public platforms, refreshed regularly.',
        trip: 'Tripadvisor · 44 reviews',
        google: 'Google Maps · Gauthier area',
        press: '“Bright and generous French brasserie.” — Local press',
        cta: 'Share your review to help others.'
      },
      contact: {
        chip: 'Contact',
        title: 'Book or order',
        lead: 'Gauthier district, Casablanca. Provisional hours.',
        address: { label: 'Address', value: '3 Rue Abou Adil Allaf, Casablanca 20000' },
        map: 'Open in Google Maps',
        hours: '12:00–15:00 & 18:00–01:00 (Mon–Sat) · To confirm',
        book: 'Booking recommended for dinner.',
        whatsapp: 'WhatsApp',
        call: 'Call',
        email: 'Email (to confirm)',
        follow: 'Follow us'
      },
      footer: { dev: 'Developed by Ali Benhamza' }
    },
    ar: {
      meta: {
        title: 'لا كانتين دو غوتييه | مطبخ فرنسي في الدار البيضاء',
        description: 'مأكولات فرنسية في حي غوتييه: أطباق موسمية وخدمة راقية وأجواء مضيئة.'
      },
      brand: { city: 'غوتييه', name: 'La Cantine de Gauthier' },
      nav: { concept: 'المفهوم', menu: 'القائمة', gallery: 'الصور', reviews: 'التقييمات', contact: 'اتصال' },
      cta: { call: 'اتصال', whatsapp: 'واتساب' },
      hero: {
        chip1: 'مطبخ فرنسي',
        chip2: 'غوتييه، الدار البيضاء',
        chip3: 'المواعيد قيد التأكيد',
        title: 'براسيري مضيئة، أطباق مميزة وخدمة يقظة.',
        lead: 'عنوان بلمسة باريسية في الدار البيضاء: طبخ موسمي، منتجات طازجة وأجواء دافئة.',
        cta: {
          whatsapp: 'حجز أو طلب عبر واتساب',
          call: 'الاتصال بالمطعم'
        },
        caption1: 'طبق مميز بطهي دقيق وتقديم أنيق.',
        caption2: 'قائمة الموسم بمنتجات طازجة.',
        caption3: 'قاعة مضيئة بطابع البراسيري الباريسي.'
      },
      stats: {
        rating: { value: '4.8/5', label: 'متوسط التقييم (تريب أدفايزر)' },
        price: { value: '120 درهم', label: 'متوسط الفاتورة' },
        location: { value: 'غوتييه', label: '3 زنقة أبو عادل العلف' }
      },
      concept: {
        chip: 'رؤيتنا',
        title: 'كانتينا أنيقة مستوحاة من براسيريات باريس.',
        lead: 'كلمة “كانتينة” تعود إلى الإيطالية «كانتينا»: مكان دافئ نتقاسم فيه أكلاً بسيطاً وسخياً.',
        point1: 'مطبخ فرنسي موسمي بمنتجات طازجة وطهو عند الطلب.',
        point2: 'قاعة مضيئة، طاولات متقاربة وخدمة منتبهة.',
        point3: 'في حي غوتييه، موقع مركزي وسهل الوصول.'
      },
      menu: {
        chip: 'القائمة',
        title: 'اختيارات حالية',
        lead: 'أطباق مميزة من القوائم المنشورة. الأسعار قابلة للتغيير.',
        note: 'القوائم الكاملة أدناه.'
      },
      quick: { reserve: 'احجز' },
      experience: {
        chip: 'لماذا نحن',
        title: 'عناصر تحدث الفرق.',
        lead: 'مطبخ فرنسي، قاعة مريحة وبار كوكتيل.',
        item1: { title: 'كلاسيكيات فرنسية', copy: 'كونفي دي كانار، سول مينيار، تارتار طازج.' },
        item2: { title: 'أجواء مضيئة', copy: 'ضوء طبيعي وخشب فاتح ومقاعد مريحة.' },
        item3: { title: 'بار وكوكتيلات', copy: 'نبيذ فرنسي، سبريتز، كوكتيلات خاصة.' },
        item4: { title: 'خدمة يقظة', copy: 'حجوزات سهلة عبر الهاتف أو واتساب.' }
      },
      gallery: { chip: 'معرض', title: 'بالصور', lead: 'أطباق، قاعة وقوائم في لمحة.' },
      reviews: {
        chip: 'تقييمات وصحافة',
        title: 'الضيوف يتحدثون.',
        lead: 'درجات من المنصات العامة محدثة بانتظام.',
        trip: 'تريب أدفايزر · 44 تقييمًا',
        google: 'خرائط جوجل · حي غوتييه',
        press: '"براسيري فرنسية مضيئة وسخية." — صحافة محلية',
        cta: 'شارك رأيك لمساعدة الآخرين.'
      },
      contact: {
        chip: 'اتصال',
        title: 'احجز أو اطلب',
        lead: 'حي غوتييه، الدار البيضاء. مواعيد مؤقتة.',
        address: { label: 'العنوان', value: '3 زنقة أبو عادل العلف، الدار البيضاء 20000' },
        map: 'افتح في خرائط جوجل',
        hours: '12:00–15:00 و 18:00–01:00 (الإثنين–السبت) · قيد التأكيد',
        book: 'يُنصح بالحجز مساءً.',
        whatsapp: 'واتساب',
        call: 'اتصال',
        email: 'بريد إلكتروني (لاحقًا)',
        follow: 'تابعنا'
      },
      footer: { dev: 'من تطوير علي بن حمزة' }
    }
  };

  const menuData = {
    fr: [
      {
        id: 'entrees',
        title: 'Entrées',
        note: 'Classiques à partager',
        items: [
          { name: 'Salade César', price: '105 MAD', description: 'Poulet grillé, parmesan, croûtons dorés.' },
          { name: 'Œufs meurette', price: '135 MAD', description: 'Œufs pochés, sauce vin rouge, lardons.' },
          { name: 'Carpaccio de bœuf', price: '125 MAD', description: 'Basilic, copeaux de parmesan, huile d’olive.' },
          { name: '6 huîtres fines de claire', price: '180 MAD', description: 'Servies fraîches avec citron et échalote.' },
          { name: 'Planche mixte', price: '190 MAD', description: 'Charcuterie & fromages, pain grillé.' }
        ]
      },
      {
        id: 'plats',
        title: 'Plats',
        note: 'Cuisson minute',
        items: [
          { name: 'Confit de canard', price: '170 MAD', description: 'Pommes grenailles, jus réduit.' },
          { name: 'Ballotine de volaille', price: '160 MAD', description: 'Farce fine, légumes verts, jus corsé.' },
          { name: 'Saumon grillé', price: '165 MAD', description: 'Légumes verts, citron confit.' },
          { name: 'Sole meunière', price: '220 MAD', description: 'Beurre noisette, câpres.' },
          { name: 'Tartare de bœuf au couteau', price: '170 MAD', description: 'Préparé minute, frites fraîches.' },
          { name: 'Burger maison', price: '120 MAD', description: 'Bœuf, cheddar affiné, frites maison.' }
        ]
      },
      {
        id: 'desserts',
        title: 'Desserts',
        note: 'Classiques français',
        items: [
          { name: 'Crème brûlée vanille', price: '60 MAD', description: 'Vanille de Madagascar, cassonade caramélisée.' },
          { name: 'Mousse au chocolat', price: '65 MAD', description: '70% cacao, légère et aérienne.' },
          { name: 'Tarte citron meringuée', price: '70 MAD', description: 'Acidité maîtrisée, meringue toastée.' },
          { name: 'Profiteroles', price: '75 MAD', description: 'Glace vanille, sauce chocolat chaud.' }
        ]
      },
      {
        id: 'bar',
        title: 'Bar & Boissons',
        note: 'Au verre ou signature',
        items: [
          { name: 'Verre de vin français', price: '80 MAD', description: 'Sélection du moment.' },
          { name: 'Spritz maison', price: '85 MAD', description: 'Amertume douce, très frais.' },
          { name: 'Cocktail signature', price: '90 MAD', description: 'Création La Cantine, équilibrée.' },
          { name: 'Eau pétillante 75cl', price: '25 MAD', description: 'Servie bien fraîche.' },
          { name: 'Café expresso', price: '20 MAD', description: 'Torréfaction équilibrée.' },
          { name: 'Thé à la menthe', price: '15 MAD', description: 'Menthe fraîche, léger sucre.' }
        ]
      }
    ],
    en: [
      {
        id: 'entrees',
        title: 'Starters',
        note: 'To share or solo',
        items: [
          { name: 'Caesar salad', price: '105 MAD', description: 'Grilled chicken, parmesan, golden croutons.' },
          { name: 'Oeufs meurette', price: '135 MAD', description: 'Poached eggs, red wine sauce, bacon.' },
          { name: 'Beef carpaccio', price: '125 MAD', description: 'Parmesan shavings, basil, olive oil.' },
          { name: '6 fine de claire oysters', price: '180 MAD', description: 'With lemon and shallots.' },
          { name: 'Mixed board', price: '190 MAD', description: 'Charcuterie, cheese, toasted bread.' }
        ]
      },
      {
        id: 'plats',
        title: 'Mains',
        note: 'Cooked to order',
        items: [
          { name: 'Duck confit', price: '170 MAD', description: 'Grenaille potatoes, reduced jus.' },
          { name: 'Chicken ballotin', price: '160 MAD', description: 'Fine stuffing, greens, rich jus.' },
          { name: 'Grilled salmon', price: '165 MAD', description: 'Green vegetables, confit lemon.' },
          { name: 'Sole meunière', price: '220 MAD', description: 'Brown butter, capers.' },
          { name: 'Hand-cut beef tartare', price: '170 MAD', description: 'Prepared to order, fresh fries.' },
          { name: 'House burger', price: '120 MAD', description: 'Beef, aged cheddar, house fries.' }
        ]
      },
      {
        id: 'desserts',
        title: 'Desserts',
        note: 'French classics',
        items: [
          { name: 'Vanilla crème brûlée', price: '60 MAD', description: 'Madagascar vanilla, caramelized sugar.' },
          { name: 'Chocolate mousse', price: '65 MAD', description: '70% cocoa, airy texture.' },
          { name: 'Lemon meringue tart', price: '70 MAD', description: 'Bright citrus, toasted meringue.' },
          { name: 'Profiteroles', price: '75 MAD', description: 'Vanilla ice cream, warm chocolate sauce.' }
        ]
      },
      {
        id: 'bar',
        title: 'Bar & Drinks',
        note: 'By the glass or signature',
        items: [
          { name: 'Glass of French wine', price: '80 MAD', description: 'Sommelier selection.' },
          { name: 'House spritz', price: '85 MAD', description: 'Soft bitterness, very refreshing.' },
          { name: 'Signature cocktail', price: '90 MAD', description: 'Balanced house creation.' },
          { name: 'Sparkling water 75cl', price: '25 MAD', description: 'Served chilled.' },
          { name: 'Espresso', price: '20 MAD', description: 'Balanced roast.' },
          { name: 'Mint tea', price: '15 MAD', description: 'Fresh mint, light sugar.' }
        ]
      }
    ],
    ar: [
      {
        id: 'entrees',
        title: 'مقبلات',
        note: 'للمشاركة أو لشخص واحد',
        items: [
          { name: 'سلطة سيزار', price: '105 درهم', description: 'دجاج مشوي، بارميزان، خبز محمص.' },
          { name: 'بيض موريت', price: '135 درهم', description: 'بيض مسلوق بصلصة النبيذ الأحمر مع بيكون.' },
          { name: 'كارباتشيو لحم', price: '125 درهم', description: 'بارميزان، ريحان، زيت زيتون.' },
          { name: '6 محار فاين دو كلير', price: '180 درهم', description: 'يُقدم مع ليمون وكراث.' },
          { name: 'طبق مشكل', price: '190 درهم', description: 'مشتقات لحم وأجبان مع خبز محمص.' }
        ]
      },
      {
        id: 'plats',
        title: 'أطباق رئيسية',
        note: 'تُطهى عند الطلب',
        items: [
          { name: 'كونفي دي كانار', price: '170 درهم', description: 'بطاطا صغيرة، صلصة مركزة.' },
          { name: 'بالوتين دجاج', price: '160 درهم', description: 'حشوة ناعمة، خضار خضراء.' },
          { name: 'سلمون مشوي', price: '165 درهم', description: 'خضار خضراء، ليمون معمر.' },
          { name: 'سول مينيار', price: '220 درهم', description: 'زبدة بنيّة وكبر.' },
          { name: 'تارتار لحم مقطع يدويًا', price: '170 درهم', description: 'يُحضّر فورياً مع بطاطا مقلية طازجة.' },
          { name: 'برغر الدار', price: '120 درهم', description: 'لحم بقر، شيدر معتّق، بطاطا مقلية منزلية.' }
        ]
      },
      {
        id: 'desserts',
        title: 'حلويات',
        note: 'كلاسيكيات فرنسية',
        items: [
          { name: 'كريم برولي بالفانيليا', price: '60 درهم', description: 'فانيليا مدغشقر، سكر محروق.' },
          { name: 'موس شوكولاتة', price: '65 درهم', description: 'كاكاو 70% بقوام هوائي.' },
          { name: 'تارت ليمون بميرانغ', price: '70 درهم', description: 'حموضة متوازنة وميرانغ محمص.' },
          { name: 'بروفيترول', price: '75 درهم', description: 'آيس كريم فانيليا مع صوص شوكولاتة دافئ.' }
        ]
      },
      {
        id: 'bar',
        title: 'مشروبات وبار',
        note: 'كأس أو كوكتيل توقيع',
        items: [
          { name: 'كأس نبيذ فرنسي', price: '80 درهم', description: 'اختيار السومليه.' },
          { name: 'سبريتز الدار', price: '85 درهم', description: 'مرارة خفيفة ومنعش.' },
          { name: 'كوكتيل التوقيع', price: '90 درهم', description: 'ابتكار لا كانتين المتوازن.' },
          { name: 'ماء غازي 75 سل', price: '25 درهم', description: 'يُقدم بارداً.' },
          { name: 'قهوة إسبريسو', price: '20 درهم', description: 'تحميص متوازن.' },
          { name: 'شاي بالنعناع', price: '15 درهم', description: 'نعناع طازج وسكر خفيف.' }
        ]
      }
    ]
  };

  const qs = (sel) => document.querySelector(sel);
  const qsa = (sel) => Array.from(document.querySelectorAll(sel));
  let currentLang = 'fr';

  function setLanguage(lang) {
    if (!i18n[lang]) lang = 'fr';
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    qsa('.lang-pill').forEach((btn) => btn.classList.toggle('is-active', btn.dataset.lang === lang));
    applyTranslations();
    renderMenu();
    updateMeta();
  }

  function applyTranslations() {
    try {
      qsa('[data-i18n]').forEach((el) => {
        const key = el.dataset.i18n;
        const value = getText(key);
        if (value) el.textContent = value;
      });
    } catch (err) {
      console.error('Translation error', err);
    }
  }

  function getText(key) {
    return key.split('.').reduce((node, part) => (node ? node[part] : undefined), i18n[currentLang]);
  }

  function updateMeta() {
    const metaTitle = qs('#meta-title');
    const metaDesc = qs('#meta-description');
    const ogTitle = qs('#og-title');
    const ogDesc = qs('#og-description');
    const twTitle = qs('#twitter-title');
    const twDesc = qs('#twitter-description');
    const data = i18n[currentLang]?.meta;
    if (!data) return;
    document.title = data.title;
    if (metaTitle) metaTitle.textContent = data.title;
    if (metaDesc) metaDesc.setAttribute('content', data.description);
    if (ogTitle) ogTitle.setAttribute('content', data.title);
    if (ogDesc) ogDesc.setAttribute('content', data.description);
    if (twTitle) twTitle.setAttribute('content', data.title);
    if (twDesc) twDesc.setAttribute('content', data.description);
  }

  function renderMenu() {
    const container = qs('#menu-grid');
    if (!container) return;
    container.innerHTML = '';
    (menuData[currentLang] || []).forEach((category) => {
      const card = document.createElement('article');
      card.className = 'menu-card';

      const title = document.createElement('div');
      title.className = 'flex items-start justify-between gap-2';
      title.innerHTML = `<div><h3>${category.title}</h3><p class="menu-note">${category.note}</p></div>`;
      card.appendChild(title);

      const list = document.createElement('div');
      list.className = 'space-y-1';
      category.items.forEach((item) => {
        const row = document.createElement('div');
        row.className = 'menu-item';
        row.innerHTML = `<div><strong>${item.name}</strong><p>${item.description}</p></div><span class="font-semibold text-ink">${item.price}</span>`;
        list.appendChild(row);
      });
      card.appendChild(list);
      container.appendChild(card);
    });
  }

  function setupNav() {
    const toggle = qs('#mobile-toggle');
    const drawer = qs('#mobile-drawer');
    const overlay = qs('#mobile-overlay');
    const links = qsa('#mobile-drawer a');
    const focusableSelector = 'a, button';
    let trapHandler;

    const close = () => {
      drawer?.classList.remove('is-open');
      overlay?.classList.remove('is-open');
      document.body.classList.remove('overflow-hidden');
      document.body.classList.remove('menu-open');
      if (trapHandler) document.removeEventListener('keydown', trapHandler);
    };
    const open = () => {
      drawer?.classList.add('is-open');
      overlay?.classList.add('is-open');
      document.body.classList.add('overflow-hidden');
      document.body.classList.add('menu-open');
      const focusables = drawer ? Array.from(drawer.querySelectorAll(focusableSelector)).filter((el) => !el.disabled) : [];
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      trapHandler = (e) => {
        if (e.key !== 'Tab') return;
        if (!first || !last) return;
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      };
      if (first) first.focus();
      document.addEventListener('keydown', trapHandler);
    };

    toggle?.addEventListener('click', () => {
      if (drawer?.classList.contains('is-open')) close();
      else open();
    });
    overlay?.addEventListener('click', close);
    links.forEach((link) => link.addEventListener('click', close));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer?.classList.contains('is-open')) close();
    });
  }

  function setupHeaderCondense() {
    const header = qs('#site-header');
    const handler = () => {
      if (!header) return;
      const scrolled = window.scrollY > 10;
      header.classList.toggle('is-condensed', scrolled);
    };
    handler();
    window.addEventListener('scroll', handler, { passive: true });
  }

  function setupLangSwitch() {
    qsa('.lang-pill').forEach((btn) => {
      btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });
  }

  function setupLightbox() {
    const lightbox = qs('#lightbox');
    const img = qs('#lightbox-img');
    const caption = qs('#lightbox-caption');
    const closeBtn = qs('.lightbox-close');
    const close = () => lightbox?.classList.remove('is-open');

    qsa('[data-lightbox]').forEach((thumb) => {
      thumb.addEventListener('click', () => {
        if (!lightbox || !img) return;
        img.src = thumb.getAttribute('src');
        img.alt = thumb.getAttribute('alt') || '';
        if (caption) caption.textContent = thumb.getAttribute('alt') || '';
        lightbox.classList.add('is-open');
      });
    });

    closeBtn?.addEventListener('click', close);
    lightbox?.addEventListener('click', (e) => {
      if (e.target === lightbox) close();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
    });
  }

  function init() {
    setupNav();
    setupHeaderCondense();
    setupLangSwitch();
    setupLightbox();
    setLanguage('fr');
  }

  document.addEventListener('DOMContentLoaded', init);
})();
