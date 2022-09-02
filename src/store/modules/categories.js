import { getDatabase, set, ref, child, get, /*update, /**/remove } from "firebase/database"

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
        async deleteCategory({getters, commit, dispatch}, id) {
            commit('SET_LOADING', true);            
            const db = getDatabase();
            const uid = getters.userId;             

            await remove(ref(db, `${uid}/categories/${id}`));
            await dispatch('getCategoryList');
            commit('SET_LOADING', false);
        },
        async getCategory({getters, commit}, id) { 
            commit('SET_LOADING', true);
            const dbRef = ref(getDatabase());
            const uid = getters.userId;             

            await get(child(dbRef, `${uid}/categories/${id}`)).then((data) => {
                if (data.exists()) {
                    const category = data.val()                      
                    commit('UPDATE_CATEGORY', category);
                    if(category.links) {
                        commit('UPDATE_LINK_LIST', category.links)
                    }
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
            //const categoryId = Date.now()
            category.id = Date.now()

            await set(ref(db, `${uid}/categories/${category.id}`), category);

            dispatch('getCategoryList'); 
            commit('SET_LOADING', false);            
        },
    }
}