<template>
    <div class="app-page">
        <app-categories class="home-page-categories" />
    </div>

</template>

<script>
import AppCategories from '@/components/categories/AppCategories.vue'

export default {
  components: { AppCategories },

  name: 'HomePage',
    async mounted() {
        await this.$store.dispatch('getCategoryList')
    } 
}
</script>

<style lang="scss" scoped>

.home-page-categories {
    @media (min-width: $mobile-max) {
        display: none;             
    }    
}
</style>