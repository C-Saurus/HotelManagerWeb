import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import transE from '../locales/en.json'
import transV from '../locales/vi.json'

const resources = {
    en: {
        translation: transE
    },
    vi: {
        translation: transV
    }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng:'en-US',
    debug: true,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;