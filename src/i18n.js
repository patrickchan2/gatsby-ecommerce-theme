const translations = {
  english: {
    'header.banner': 'Kids and Baby Photography Studio in Hong Kong',
    'search.title': 'What are you looking for?',
    'menu.theme': 'Theme',
    'menu.boy': 'Boy',
    'menu.girl': 'Girl',
    'menu.cakeSmash': 'Cake Smash',
    'menu.allThemes': 'All themes',
    'menu.character': 'Character',
    'menu.grand': 'Grand',
    'menu.seasonal': 'Seasonal',
    'menu.specialTheme': 'Special theme',
    'menu.classicTheme': 'Classic theme',
    'menu.blog': 'Blog',
    'menu.about': 'About',
  },
  german: {
    'header.banner': 'Kinder- und Babyfotostudio in Hongkong',
    'search.title': 'Wonach suchst du?',
    'menu.theme': 'Thema',
    'menu.boy': 'Junge',
    'menu.girl': 'Mädchen',
    'menu.cakeSmash': 'Cake Smash',
    'menu.allThemes': 'Alle Themen',
    'menu.character': 'Charakter',
    'menu.grand': 'Groß',
    'menu.seasonal': 'Saisonal',
    'menu.specialTheme': 'Spezielles Thema',
    'menu.classicTheme': 'Klassisches Thema',
    'menu.blog': 'Blog',
    'menu.about': 'Über uns',
  },
  mandarin: {
    'header.banner': '香港儿童及婴儿摄影工作室',
    'search.title': '你在寻找什么？',
    'menu.theme': '主题',
    'menu.boy': '男孩',
    'menu.girl': '女孩',
    'menu.cakeSmash': '抓周',
    'menu.allThemes': '所有主题',
    'menu.character': '角色',
    'menu.grand': '盛装',
    'menu.seasonal': '季节',
    'menu.specialTheme': '特别主题',
    'menu.classicTheme': '经典主题',
    'menu.blog': '博客',
    'menu.about': '关于我们',
  },
  traditionalchinese: {
    'header.banner': '香港兒童及嬰兒攝影工作室',
    'search.title': '你在尋找什麼？',
    'menu.theme': '主題',
    'menu.boy': '男孩',
    'menu.girl': '女孩',
    'menu.cakeSmash': '抓周',
    'menu.allThemes': '所有主題',
    'menu.character': '角色',
    'menu.grand': '盛裝',
    'menu.seasonal': '季節',
    'menu.specialTheme': '特別主題',
    'menu.classicTheme': '經典主題',
    'menu.blog': '部落格',
    'menu.about': '關於我們',
  },
};

export const translate = (language, key) => {
  const table = translations[language] || translations.english;
  if (table && table[key]) return table[key];
  if (translations.english && translations.english[key]) {
    return translations.english[key];
  }
  return key;
};

export default translations;

