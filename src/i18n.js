import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import {initReactI18next} from 'react-i18next'
import Backend from 'i18next-http-backend'

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng: localStorage.getItem('language') || 'en',
        fallbackLng: 'en',
        debug: true,
        ns: ['translate', 'header', 'admin'],
        defaultNS: 'translate',
        keySeparator: '.',
        interpolation: {
            escapeValue: false,
            formatSeparator: ','
        },
        backend: {
            loadPath: `/locales/{{lng}}/{{ns}}.json`
        },
        react: {
            useSuspense: false,
            bindI18n: 'languageChanged loaded',
            bindStore: 'added removed',
            nsMode: 'default'
        }
    })

export default i18n