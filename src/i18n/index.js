import { createI18n } from 'vue-i18n';
import Lang from '@/stores/lang.js';

import en from './locale/en.js';
import ru from './locale/ru.js';

if(!getCookie('lang'))setCookie('lang', navigator.language);

const lang = ()=>{
    switch (getCookie('lang')){
        case 'ru':
        case 'ru-RU':
            return 'ru'
        default:
            return 'en'
    }
}

const i18n = createI18n({
    locale: lang(),
    messages: {
        en,
        ru
    }
})

export default i18n;