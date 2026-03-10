const translations = {
  english: {
    'header.banner': 'Kids and Baby Photography Studio in Hong Kong',
    'search.title': 'What are you looking for?',
  },
  german: {
    'header.banner': 'Kinder- und Babyfotostudio in Hongkong',
    'search.title': 'Wonach suchst du?',
  },
  mandarin: {
    'header.banner': '香港儿童及婴儿摄影工作室',
    'search.title': '你在寻找什么？',
  },
  traditionalchinese: {
    'header.banner': '香港兒童及嬰兒攝影工作室',
    'search.title': '你在尋找什麼？',
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

