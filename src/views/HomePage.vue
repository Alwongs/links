<template>
    <div class="app-page">
<!--        
        <h1 class="title">
            {{ $t('manage_your_links') }}..
        </h1>
-->
        <p 
            v-if="isUserAuthenticated" 
            class="notification"
        >{{ $t('select_category') }}..</p>         

        <p 
            v-if="!isUserAuthenticated" 
            class="notification"
        >{{ $t('you_are_not_authorized') }}..</p>  

        <div 
            v-if="!isUserAuthenticated"
            class="btn-block text-center"
        >
            <button 
                class="btn login-link" 
                @click="$router.push({name: 'login'})"
            >
                Войти
            </button>
            <button 
                class="btn register-link"
                @click="$router.push({name: 'register'})"
            >
                Регистрация
            </button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'HomePage',
    computed: {
        isUserAuthenticated() {
            return this.$store.getters.isUserAuthenticated;
        },        
        getCategoryList() {
            return this.$store.getters.getCategoryList
        },       
    },   
    async mounted() {
        if (!this.getCategoryList.length) {
            await this.$store.dispatch('getCategoryList') 
        } 
    } 
}
</script>

<style lang="scss" scoped>

.title {
    font-size: 28px;
    text-align: center;
    margin: 32px 0;      
}
.notification {
    text-align: center;
    padding: 32px 0;
}
.btn-block {
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: $mobile-max) {
        flex-direction: column;       
    }     
}
.btn {
    @media (max-width: $mobile-max) {
        width: 90%;
        height: 52px;
    } 
}
.login-link {
    background-color: rgb(57, 149, 40);
    font-size: 16px;   
    color: white; 
    margin-right: 32px;
    &:hover {
        background-color: rgb(24, 79, 24);
    }    
    @media (max-width: $mobile-max) {
        margin-right: 0;
        margin-bottom: 24px;
    }     
}
.register-link {
    background-color: rgb(203, 97, 68);
    color: white;     
    font-size: 16px;
    &:hover {
        background-color: rgb(136, 48, 24);
    } 
}
</style>