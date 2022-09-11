<template>
    <div class="app-page">
        <h1 class="title">
            Manage your useful links..
        </h1>
        <div class="create-category-wrap">
            <create-category /> 
        </div>

        <category-list 
            v-if="!isAsideOpen" 
            class="home-page-categories" 
        />
    </div>

</template>

<script>
import CreateCategory from '@/components/categories/CreateCategory.vue'
import CategoryList from '@/components/categories/CategoryList.vue'

export default {
    name: 'HomePage',
    components: { 
        CategoryList, 
        CreateCategory 
    },
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
    font-size: 28px;
    text-align: center;
    margin-bottom: 32px;
    @media (max-width: $mobile-max) {
        display: none;             
    }        
}
.create-category-wrap {
    @media (min-width: $mobile-max) {
        display: none;             
    }     
}

</style>