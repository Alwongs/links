import { createStore } from 'vuex'
import user from '@/store/modules/user'
import general from '@/store/modules/general'
import categories from '@/store/modules/categories'
import links from '@/store/modules/links'

export default createStore({

    modules: {
        user,     
        general,
        categories,
        links
    }
})
