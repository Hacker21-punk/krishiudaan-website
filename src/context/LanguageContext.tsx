import React, { createContext, useState, useContext } from 'react';

export type Language = 'English' | 'Hindi' | 'Japanese';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<string, Record<Language, string>> = {
  // Common
  'Select Language': {
    English: 'Select Language',
    Hindi: 'भाषा चुनें',
    Japanese: '言語を選択'
  },
  'Contact us': {
    English: 'Contact us',
    Hindi: 'संपर्क करें',
    Japanese: 'お問い合わせ'
  },
  'Get Update': {
    English: 'Get Update',
    Hindi: 'अपडेट प्राप्त करें',
    Japanese: '最新情報を取得'
  },
  'Send Enquiry': {
    English: 'Send Enquiry',
    Hindi: 'पूछताछ भेजें',
    Japanese: '問い合わせ送信'
  },
  'WhatsApp': {
    English: 'WhatsApp',
    Hindi: 'व्हाट्सएप',
    Japanese: 'WhatsApp'
  },
  'Our Office': {
    English: 'Our Office',
    Hindi: 'हमारा कार्यालय',
    Japanese: 'オフィス所在地'
  },
  'Phone Numbers': {
    English: 'Phone Numbers',
    Hindi: 'फ़ोन नंबर',
    Japanese: '電話番号'
  },
  'Email Address': {
    English: 'Email Address',
    Hindi: 'ईमेल पता',
    Japanese: 'メールアドレス'
  },
  'Want some spraying?': {
    English: 'Want some spraying?',
    Hindi: 'छिड़काव करवाना चाहते हैं?',
    Japanese: 'スプレーをご希望ですか？'
  },
  // Hero Section
  'Elevating Skies, Nurturing Fields': {
    English: 'Elevating Skies, Nurturing Fields',
    Hindi: 'आसमान को छूते, खेतों को सींचते',
    Japanese: '空を高め、畑を育む'
  },
  'Hero Description': {
    English: 'Transforming Indian Agriculture with Drone Spraying. Embark on a journey into the future of agriculture with us. Our smart spraying drones will transform the way you cultivate.',
    Hindi: 'ड्रोन छिड़काव के साथ भारतीय कृषि को बदलना। हमारे साथ कृषि के भविष्य की यात्रा पर निकलें। हमारे स्मार्ट छिड़काव ड्रोन आपके खेती करने के तरीके को बदल देंगे।',
    Japanese: 'ドローンスプレーによるインド農業の変革。私たちと一緒に農業の未来への旅に出ましょう。当社のスマートスプレードローンは、あなたの栽培方法を変革します。'
  },
  'Explore Drone Farming': {
    English: 'Explore Drone Farming',
    Hindi: 'ड्रोन खेती देखें',
    Japanese: 'ドローン農業を探索'
  },
  // Footer text
  'Over a Decade in Innovation, and Our Flight Has Just Begun': {
    English: 'Over a Decade in Innovation, and Our Flight Has Just Begun',
    Hindi: 'नवाचार में एक दशक से अधिक, और हमारी उड़ान अभी शुरू हुई है',
    Japanese: 'イノベーションの10年以上、そして私たちの飛行は始まったばかりです'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    return (localStorage.getItem('lang') as Language) || 'English';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('lang', lang);
  };

  const t = (key: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLang must be used within a LanguageProvider');
  }
  return context;
};
