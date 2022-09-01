<template>
    <div class="app-page">
        <h1>Profile</h1>
    </div>
</template>

<script>

export default {
    name: 'ProfilePage',
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


</style>