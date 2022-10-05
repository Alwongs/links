<template>
    <div 
        class="app-menu" 
        :class="{active: isAsideOpen}"
    >
        <nav>
            <ul class="nav-list">
                <li 
                    title="Push to change"
                    class="nav-item"
                    @click="switchLang"
                >
                    <span
                        :class="{
                            eng: $i18n.locale == 'en', 
                            rus: $i18n.locale == 'ru'
                        }"
                    >
                        {{ $t('language') }}:
                    </span> 
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

                <li 
                    v-if="isUserAuthenticated"
                    class="nav-item search-item"
                >
                    <input 
                        v-model.trim="searchText"
                        type="text" 
                        placeholder="Search"
                    > 
                    <button 
                        class=""
                        @click="clearSearch"
                        :title="$t('clear')"
                    ></button>
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
            searchText: ''
        }
    },
    computed: {
        isUserAuthenticated() {
            return this.$store.getters.isUserAuthenticated;
        },  
        isAsideOpen() {
            return this.$store.getters.isAsideOpen
        }, 
        getCategory() {
            return this.$store.getters.getCategory
        },         
        getCategoryFilter() {
            return this.$store.getters.getCategoryFilter
        },         
    }, 
    watch: {
        searchText: function() {
            this.search()
        }
    },    
    methods: {
        clearSearch() {
            this.searchText = ''
        },
        search() {
            const links = this.getCategory.links

            const linksArray = Object.keys(links).map(key => ({...links[key], id: key}))
            let newAarray = []            

            linksArray.map(link => {
                if(link.title.toLowerCase().includes(this.searchText.toLowerCase())) {
                    newAarray.push(link)
                }
            })
            let categoryFilter = {...this.getCategory}
            categoryFilter.links = newAarray
            this.$store.commit('UPDATE_CATEGORY_FILTER', categoryFilter)

        },
        goTo(path) {
            this.$router.push(path);
            this.$store.commit('TOGGLE_ASIDE')            
        },          
        switchLang() {
            if (this.$i18n.locale === 'en') {
                this.$i18n.locale = 'ru'
                localStorage.setItem('local', 'ru')
                this.lang = 'ru'
                this.$store.commit('TOGGLE_ASIDE') 
                return                
            }
            if (this.$i18n.locale === 'ru') {
                this.$i18n.locale = 'en' 
                localStorage.setItem('local', 'en')
                this.lang = 'en'    
                this.$store.commit('TOGGLE_ASIDE')                             
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
    background-color: rgba(58, 138, 182, .9);
    width: 400px;
    padding-top: 64px;
    border-radius: 0 0 0 5px;
    color: white;
    transition: 0.4s;
    transform: translateY(-100%);  
    a {
        color: white;
    }    
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
    border-bottom: 1px solid rgb(66, 128, 178);
    border-radius: 0 0 0 5px;   
    cursor: pointer;
    &:hover {
        background-color: rgb(68, 162, 213);
    }   
}
.search-item {
        display: flex;
        align-items: center;
        padding: 9px 16px;
    input {
        padding-left: 8px;
        margin-right: 8px;
        font-size: 16px;
        flex: 1;
        height: 44px;
        outline: none;
        &::placeholder {
            color: grey;
        }
    }
    button {
        background-image: url('~@/assets/img/svg/reset.svg');
        background-repeat: no-repeat; 
        background-size: 24px;  
        background-position: 50% 50%;     
        font-size: 18px;
        height: 42px;
        width: 42px;
        padding: 16px;
        border: none;
        box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.4);
        border-radius: 50%;
        cursor: pointer;
    }
}


@mixin arrow-icon() {
    position: absolute;
    display: inline-flex;
    content: '';
    background-size: contain;
    background-repeat: no-repeat; 
    height: 32px;
    width: 32px; 
    right: 32px;
}
.nav-item .eng {
    &:after {
        @include arrow-icon();        
        background-image: url('~@/assets/img/png/us_flag.png');           
    }
} 
.nav-item .rus {
    &:after {
        @include arrow-icon();
        background-image: url('~@/assets/img/png/rus_flag.png');               
    }   
}
</style>
