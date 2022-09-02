<template>
    <div class="app-page">
        <h1 class="title">Manage your useful links..</h1>
        <category-list v-if="!isAsideOpen" class="home-page-categories" />
    </div>

</template>

<script>
import CategoryList from '@/components/categories/CategoryList.vue'

export default {
    name: 'HomePage',
    components: { CategoryList },
    computed: {
        loading() {
            return this.$store.getters.getLoading            
        },        
        getCategoryList() {
            return this.$store.getters.getCategoryList
        },
        isAsideOpen() {
            return this.$store.getters.isAsideOpen
        }        
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