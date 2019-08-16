import Vue from 'vue'
import VueI18n from 'vue-i18n'
import vi from './vi'
import en from './en'

Vue.use(VueI18n)

const messages = {
    vi,
    en
}

export default new VueI18n({
    locale: 'vi', // set locale
    messages, // set locale messages
})