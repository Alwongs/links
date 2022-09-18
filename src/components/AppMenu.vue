<template>
    <div 
        class="app-menu" 
        :class="{active: isAsideOpen}"
    >
        <nav>
            <ul class="nav-list">
                <li 
                    class="nav-item"
                    @click="switchLang"
                >
                    {{ $t('language') + ': ' + $t(lang)  }} 
                </li>

                <li 
                    v-if="!isUserAuthenticated"                 
                    class="nav-item"
                    @click="goTo('/register')"                    
                >
                    <router-link 
                        :to="'/register'"
                    >
                        {{ $t('register') }}
                    </router-link>
                </li>

                <li 
                    v-if="!isUserAuthenticated"                
                    class="nav-item"
                    @click="goTo('/login')"                    
                >
                    <router-link 
                        :to="'/login'"
                    >
                        {{ $t('login') }}
                    </router-link>
                </li>

                <li 
                    v-if="isUserAuthenticated"
                    class="nav-item"
                    @click="logout()"
                >
                    {{ $t('logout') }} 
                </li>
            </ul>                
        </nav>
    </div>
</template>

<script>

export default {
    name: 'AppAside',
    data() {
        return {
            lang: 'ru'
        }
    },
    computed: {
        isUserAuthenticated() {
            return this.$store.getters.isUserAuthenticated;
        },  
        isAsideOpen() {
            return this.$store.getters.isAsideOpen
        }, 
    }, 
    methods: {
        goTo(path) {
            this.$router.push(path);
            this.$store.commit('TOGGLE_ASIDE')            
        },          
        switchLang() {
            if (this.$i18n.locale === 'en') {
                this.$i18n.locale = 'ru'
                this.lang = 'ru'
                return                
            }
            if (this.$i18n.locale === 'ru') {
                this.$i18n.locale = 'en' 
                this.lang = 'en'                
                return                                 
            }
        },
        logout() {
            if (confirm('Вы уверены?')) {
                this.$store.dispatch('logOut');
                this.$router.push('/'); 
                this.isMenuOpen = false; 
                this.$store.commit('CLOSE_ASIDE')                    
                return                                      
            } else {
                return
            }
        },        
    },
    async mounted() {
        await this.$store.dispatch('getCategoryList')
    }    
}
</script>

<style lang="scss" scoped>

.app-menu {
    z-index: 5;
    position: absolute;
    right: 0;
    top: 0;
    background-color: rgb(58, 138, 182);
    height: 100%;
    width: 400px;
    padding-top: 64px;
    color: white;
    a {
        color: white;
    }

    transition: 0.4s;
    transform: translateY(-100%);  
    &.active {
        transform: translateY(0%);
    } 

    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        width: 350px;
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        width: 250px;
    }          
    @media (max-width: $mobile-max) {
        width: 100%;             
    }      
}
.nav-list {
    font-size: 22px;      
}
.nav-item {
    padding: 16px;
    cursor: pointer;
    &:hover {
        background-color: rgb(68, 162, 213);
    }    
}
</style>
