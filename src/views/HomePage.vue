<template>
    <div class="app-page">
        <h1 class="title">
            {{ $t('manageYourLinks') }}..
        </h1>   
    </div>
</template>

<script>

export default {
    name: 'HomePage',
    computed: {
        loading() {
            return this.$store.getters.getLoading            
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