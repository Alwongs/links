import { getDatabase, set, ref, child, get, update, /*remove*/ } from "firebase/database"

export default {
    getters: {
        getCategoryList(state) {
            return state.categoryList;
        },
        getCategory(state) {
            return state.category;
        },
    },
    state: {
        categoryList: [],
        category: {}
    },
    mutations: {
        UPDATE_CATEGORY_LIST(state, payload) {
            state.categoryList = payload
        },
        UPDATE_CATEGORY(state, payload) {
            state.category = payload
        },
    },
    actions: {
        async updateCategory({getters, commit}, category) {
            try {              
                const db = getDatabase();
                const uid = getters.userId;

                const updates = {};
                updates[`${uid}/categories/${category.id}`] = category;

                return await update(ref(db), updates);
            } catch (e) {
                commit('SET_ERROR', e)
                throw e                
            }                
        },
        async getCategory({getters, commit}, id) { 
            commit('SET_LOADING', true);
            const dbRef = ref(getDatabase());

            const uid = getters.userId;             

            await get(child(dbRef, `${uid}/categories/${id}`)).then((data) => {
                if (data.exists()) {
                    const category = data.val()                      
                    commit('UPDATE_CATEGORY', category);
                    commit('SET_LOADING', false);
                } else {
                    commit('UPDATE_CATEGORY', {})
                    commit('SET_LOADING', false);
                }
            }).catch((error) => {
                console.error(error);
            });
        },        
        async getCategoryList({getters, commit}) { 
            commit('SET_LOADING', true);
            const dbRef = ref(getDatabase());

            const uid = getters.userId;            

            await get(child(dbRef, `${uid}/categories`)).then((data) => {
                if (data.exists()) {
                    const categories = data.val()                 
                    const categoryArray = Object.keys(categories).map(key => ({...categories[key], id: key}));
                    
                    commit('UPDATE_CATEGORY_LIST', categoryArray);
                    commit('SET_LOADING', false);
                } else {
                    commit('UPDATE_CATEGORY_LIST', [])
                    commit('SET_LOADING', false);
                }
            }).catch((error) => {
                console.error(error);
            });
        },
        async saveCategory({getters, commit, dispatch}, category) { 
            commit('SET_LOADING', true);            
            const db = getDatabase();

            const uid = getters.userId;
            const categoryId = Date.now();
            category.id = categoryId
            await set(ref(db, `${uid}/categories/${categoryId}`), category);

            dispatch('getCategoryList'); 
            commit('SET_LOADING', false);            
        },
    }
}