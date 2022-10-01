import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles.scss'

import { languages } from './i18n'
import { defaultLocale } from './i18n'
import { createI18n, useI18n } from 'vue-i18n'

const messages = Object.assign(languages)
const i18n = createI18n({
    legacy: false,
    locale: defaultLocale,
    fallbackLocale: 'en',
    messages
})

const app = createApp(App, {
    setup() {       
        const {t} = useI18n()
        return {
            t,
        }
    }
})


app
    .use(store)
    .use(router)
    .use(i18n)
    .mount('#app')
