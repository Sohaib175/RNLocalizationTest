import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RNLocalize from 'react-native-localize';
import en from './translation/en/Index';
import fr from './translation/fr/Index';
import ar from './translation/ar/Index';

const LANGUAGES = {
  en,
  fr,
  ar,
};

const LANG_CODES = Object.keys(LANGUAGES);

const LANGUAGE_DETECTOR = {
  type: 'languageDetector',
  async: true,
  detect: callback => {
    AsyncStorage.getItem('user-language', (err, language) => {
      // if error fetching stored data or no language was stored
      // display errors when in DEV mode as console statements
      if (err || !language) {
        if (err) {
          console.log('Error fetching Languages from asyncstorage ', err);
        } else {
          console.log('No language is set, choosing English as fallback');
        }
        const findBestAvailableLanguage =
          RNLocalize.findBestAvailableLanguage(LANG_CODES);

        callback(findBestAvailableLanguage.languageTag || 'en');
        return;
      }
      callback(language);
    });
  },
  init: () => {},
  cacheUserLanguage: language => {
    AsyncStorage.setItem('user-language', language);
  },
};

i18n
  // detect language
  .use(LANGUAGE_DETECTOR)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // set options
  .init({
    compatibilityJSON: 'v3',
    resources: LANGUAGES,
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
    defaultNS: 'common',
  });

// import i18n from 'i18next';
// import {reactI18nextModule} from 'react-i18next';
// import locale from 'react-native-locale-detector';
// import {AsyncStorage} from 'react-native';

// import de from './translation/fr.json';
// import en from './translation/en.json';
// import ar from './translation/ar.json';

// const STORAGE_KEY = '@APP:languageCode';

// // creating a language detection plugin using expo
// // http://i18n.com/docs/ownplugin/#languagedetector
// const languageDetector = {
//   init: Function.prototype,
//   type: 'languageDetector',
//   async: true, // flags below detection to be async
//   detect: async callback => {
//     const savedDataJSON = await AsyncStorage.getItem(STORAGE_KEY);
//     const lng = savedDataJSON ? savedDataJSON : null;
//     const selectLanguage = lng || locale;
//     console.log('detect - selectLanguage:', selectLanguage);
//     callback(selectLanguage);
//   },
//   cacheUserLanguage: () => {},
// };

// i18n
//   .use(languageDetector)
//   .use(reactI18nextModule)
//   .init({
//     fallbackLng: 'en',
//     resources: {en, de, ar},

//     // have a common namespace used around the full app
//     ns: ['common'],
//     defaultNS: 'common',

//     debug: true,

//     //   cache: {
//     //  enabled: true
//     // },

//     interpolation: {
//       escapeValue: false, // not needed for react as it does escape per default to prevent xss!
//     },
//   });

// export default i18n;
