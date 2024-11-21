import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
      lng: 'ru', // Язык по умолчанию
      fallbackLng: 'en', // Резервный язык
      ns: [ 'translation', 'home', 'about' ], // Список namespace
      defaultNS: 'translation', // Namespace по умолчанию
      backend: {
          loadPath: 'locales/{{lng}}/{{ns}}.json', // Путь к файлам перевода
      }
    });

export default i18n;
