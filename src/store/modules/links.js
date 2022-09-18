import { getDatabase, set, ref, /*child, get, update,*/ remove } from "firebase/database"

export default {

    actions: {
        async deleteLink({getters, commit, dispatch}, id) {
            commit('SET_LOADING', true); 

            const db = getDatabase();
            const uid = getters.userId;             
            const catId = getters.getCategory.id

            await remove(ref(db, `${uid}/categories/${catId}/links/${id}`))
            await dispatch('getCategoryList')                
            await dispatch('getCategory', catId)            
            commit('SET_LOADING', false)
        },   

        async saveLink({getters, commit, dispatch}, link) {
            commit('SET_LOADING', true)

            const db = getDatabase();
            const uid = getters.userId
            const catId = getters.getCategory.id
            const linkId = Date.now()
            link.id = linkId

            await set(ref(db, `${uid}/categories/${catId}/links/${linkId}`), link)
            await dispatch('getCategoryList')
            await dispatch('getCategory', catId);             
            commit('SET_LOADING', false)              
        },   
    }
}