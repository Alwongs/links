<template>
    <aside 
        class="app-aside" 
        :class="{active: isAsideOpen}"
    >
        <app-categories />
    </aside>
</template>

<script>
import AppCategories from '@/components/categories/AppCategories.vue'
export default {
    components: { AppCategories },
    name: 'AppAside',
    computed: {
        isAsideOpen() {
            return this.$store.getters.isAsideOpen
        }
    },
    async mounted() {
        await this.$store.dispatch('getCategoryList')
    }    
}
</script>

<style lang="scss" scoped>

.app-aside {
    background-color: rgb(207, 234, 223);
    height: 100%;
    box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.2);
    @media (max-width: $mobile-max) {
        
        z-index: 1;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        
        transition: 0.4s;
        transform: translateX(-100%);  
        &.active {
            transform: translateX(0%);
        }              
    }      
}
</style>
