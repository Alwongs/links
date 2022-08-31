import { createStore } from 'vuex'
import user from '@/store/modules/user'
import general from '@/store/modules/general'

export default createStore({

    modules: {
        user,     
        general 
    }
})
