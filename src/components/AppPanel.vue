<template>
    <div class="app-panel">
        <div 
            class="panel-item home-link" 
            @click="$router.push({name: 'home'})"
        >
            Links                        
        </div>

        <nav class="panel-item" :class="{active: isAsideOpen}">
            <ul class="nav-list">
                <li 
                    v-for="item in menuItems"
                    :key="item.route"
                    class="nav-item"
                    @click="goTo(item.route)"                    
                >
                    <router-link 
                        :to="item.route"
                    >
                        {{ item.title }}
                    </router-link>
                </li>
                <li 
                    v-if="isUserAuthenticated"
                    class="nav-item"
                    @click="logout()"
                >
                    Выйти
                </li>
            </ul>  
            <div 
                class="menu-btn" 
                :class="{opened: isAsideOpen}"
                @click="toggleMenu"
            ></div>               
        </nav>
    </div>
</template>

<script>
export default {
    name: 'AppPanel',
    computed: {
        isUserAuthenticated() {
            return this.$store.getters.isUserAuthenticated;
        },  
        isAsideOpen() {
            return this.$store.getters.isAsideOpen
        },               
        menuItems() {
            return this.isUserAuthenticated
                ? [
                {
                    title: 'Profile',
                    route: '/profile-page',
                },
            ] :
            [                       
                {
                    title: 'Вход',
                    route: '/login',
                },
                {
                    title: 'Регистрация',
                    route: '/register',
                },

            ]            
        }
    },    
    data() {
        return {

        }
    },
    methods: {
        toggleMenu() {
            this.$store.commit('TOGGLE_ASIDE')
        },
        logout() {
            if (confirm('Вы уверены?')) {
                this.$store.dispatch('logOut');
                this.$router.push('/'); 
                this.isMenuOpen = false;                     
                return                                      
            } else {
                return
            }
        },
        goTo(path) {
            this.$router.push(path);
        },      
    }
}
</script>

<style lang="scss" scoped>

.app-panel {
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

.panel-item {
    display: flex;
}
.home-link {
    cursor: pointer;
}

.nav-wrap {

    @media (max-width: $mobile-max) {
        z-index: 1;
        background-color: rgb(38, 115, 204);
        width: 100%;
        //height: 100%;
        position: absolute;
        left: 0;
        padding: 32px;
        transition: 0.4s;
        transform: translateY(-100%);  
        &.active {
            transform: translateY(0%);
        }              
    }     
}
.nav-list {
    display: flex;
    @media (max-width: $mobile-max) {
        font-size: 22px;
        //flex-direction: column;
    }         
}
.nav-item {
    margin-right: 16px;
    cursor: pointer;
    @media (max-width: $mobile-max) {
        width: 100%;
        border-bottom: 1px solid grey;

    }      
}
.menu-btn {
    display: none;
    @media (max-width: $mobile-max) {
        display: block;
        z-index: 2;        
        cursor: pointer;
        //position: absolute;
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
}
a {
    color: rgb(255, 231, 124);
}
</style>