<template>
    <div class="app-page">
        <h1 class="title">
            {{ $t('manage_your_links') }}..
        </h1>
        <p 
            v-if="!isUserAuthenticated" 
            class="text-center"
        >Вы не авторизованы. Откройте меню на панели и нажмите "Войти"</p>   
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

</style>