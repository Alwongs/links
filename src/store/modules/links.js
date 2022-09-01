import { getDatabase, /*set,*/ ref, child, get, /*update, remove*/ } from "firebase/database"

export default {
    getters: {
        getLinkList(state) {
            return state.linkList;
        },
    },
    state: {
        linkList: [],
    },
    mutations: {
        UPDATE_LINK_LIST(state, payload) {
            state.linkList = payload
        },
    },
    actions: {
        async getLinkList({getters, commit}, catId) { 
            commit('SET_LOADING', true);
            const dbRef = ref(getDatabase());

            const uid = getters.userId;            

            await get(child(dbRef, `${uid}/categories/${catId}/links`)).then((data) => {
                if (data.exists()) {
                    const links = data.val()                 
                    const linkArray = Object.keys(links).map(key => ({...links[key], id: key}));
                    
                    commit('UPDATE_LINK_LIST', linkArray);
                    commit('SET_LOADING', false);
                } else {
                    commit('UPDATE_LINK_LIST', [])
                    commit('SET_LOADING', false);
                }
            }).catch((error) => {
                console.error(error);
            });
        },
    }
}