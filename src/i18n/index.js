import en from './en.json'
import ru from './ru.json'

export const defaultLocale = localStorage.getItem('local') || 'en' 

export const languages = {
    en,
    ru
}