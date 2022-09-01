<template>
    <div class="app-page">
        <h1 class="title">Home Page</h1>



        <app-categories class="home-page-categories" />
    </div>

</template>

<script>
import AppCategories from '@/components/categories/AppCategories.vue'

export default {
    name: 'HomePage',
    components: { AppCategories },
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

.home-page-categories {
    @media (min-width: $mobile-max) {
        display: none;             
    }    
}
.title {
    text-align: center;
    margin-bottom: 16px;
}


</style>