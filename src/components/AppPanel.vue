<template>
    <div class="app-panel">
        <div 
            class="home-link" 
            @click="goHome"
        >
            Links
        </div>

        <div 
            v-if="loading" 
            class="pre-loader"
        >
            Loading...
        </div>

        <div 
            class="menu-btn" 
            @click="toggleMenu"
        ></div>               
    </div>
</template>

<script>

export default {
    name: 'AppPanel',
    computed: {
        loading() {
            return this.$store.getters.getLoading            
        },               
    }, 
    methods: {
        goHome() {
            this.$router.push({name: 'home'})
            this.$store.commit('CLOSE_ASIDE')            
        },
        toggleMenu() {
            this.$store.commit('TOGGLE_ASIDE')
        },    
    }
}
</script>

<style lang="scss" scoped>

.app-panel {
    z-index: 5;
    position: sticky;
    background-color: rgb(58, 138, 182);
    box-shadow: 0 2px 2px 0 rgba(10, 13, 61, 0.4);
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: rgb(255, 225, 92);
    height: 64px;
    padding: 0 32px;    
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        padding: 0 16px;
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        padding: 0 16px;
    } 
    @media (max-width: $mobile-max) {
        padding: 0 16px;
        font-size: 22px;
    }      
}
.home-link {
    border: 1px solid rgb(255, 225, 92, 0.4);
    border-radius: 18px;
    box-shadow: 1px 1px 3px 1px rgba(255, 225, 92, 0.3);
    padding: 0 10px;
    letter-spacing: 2px;    
    font-size: 28px;
    font-style: italic;
    font-weight: 500;
    cursor: pointer;
}
.menu-btn {
    display: block;
    z-index: 7;        
    cursor: pointer;
    content: '';
    width: 32px;
    height: 32px;
    right: 16px;
    top: 16px;
    background-image: url('../assets/img/svg/menu_btn.svg');
    &.opened {
        background-image: url('../assets/img/svg/menu_close_btn.svg');        
    } 
}
a {
    color: rgb(255, 231, 124);
}
</style>