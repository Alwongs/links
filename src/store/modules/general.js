export default {
    getters: {
        getLoading(state) {
            return state.loading
        }, 
        getError(state) {
            return state.error
        }, 
        isAsideOpen(state) {
            return state.isAsideOpen
        } 
    },
    state: {
        loading: false,
        error: null,
        isAsideOpen: false
    },
    mutations: {
        CLOSE_ASIDE(state) {
            state.isAsideOpen = false;
        },
        TOGGLE_ASIDE(state) {
            state.isAsideOpen = !state.isAsideOpen;
        },
        SET_LOADING(state, payload) {
            state.loading = payload;
        },
        SET_ERROR(state, payload) {
            state.error = payload;
        },
        CLEAR_ERROR(state) {
            state.error = null;
        },
    },
}