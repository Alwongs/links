import { auth } from '@/firebase'
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'

export default {
    getters: {
        isUserAuthenticated(state) {
            return state.user.isAuthenticated;
        },
        userId(state) {
            return state.user.uid;
        }
    },
    state: {
        user: {
            isAuthenticated: false,
            uid: null,
        },
        unsubscribeAuth: null
    },
    mutations: {
        SET_USER(state, payload) {
            state.user.isAuthenticated = true;
            state.user.uid = payload;
        },
        UNSET_USER(state) {
            state.user = {
                isAuthenticated: false,
                uid: null
            }
        },
        SET_UNSUBSCRIBE_AUTH(state, payload) {
            state.unsubscribeAuth = payload;
        }
    },
    actions: {
        initAuth({dispatch, commit, state}) {
            return new Promise((resolve) => {
                if (state.unsubscribeAuth) {
                    state.unsubscribeAuth();
                }
                let unsubscribe = onAuthStateChanged(auth, (user) => {
                    dispatch('stateChanged', user );

                    resolve(user);
                }); 
                commit('SET_UNSUBSCRIBE_AUTH', unsubscribe)
            })
        },
        async register({commit}, {email, password}) {
            commit('SET_LOADING', true);
            commit('CLEAR_ERROR');
            try {
                await createUserWithEmailAndPassword(auth, email, password); 
                commit('SET_LOADING', false);
            } catch (error) {
                commit('SET_LOADING', false);
                commit('SET_ERROR', error.message);
            }       
        },
        async login({commit}, {email, password}) {
            commit('SET_LOADING', true);              
            commit('CLEAR_ERROR');            
            try {
                await signInWithEmailAndPassword(auth, email, password);
                commit('SET_LOADING', false);
            } catch (error) {
                commit('SET_LOADING', false);
                commit('SET_ERROR', error.message);          
            }        
        },
        async logOut() {
            await signOut(auth);
        },
        stateChanged({commit}, payload) {
            if (payload) {
                commit('SET_USER', payload.uid);               
            } else {
                commit('UNSET_USER')   ;             
            }
        }
    },
}