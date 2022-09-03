<template>
    <aside 
        class="app-aside" 
        :class="{active: isAsideOpen}"
    >
        <create-category />
        <category-list />
    </aside>
</template>

<script>
import CategoryList from '@/components/categories/CategoryList.vue'
import CreateCategory from '@/components/categories/CreateCategory.vue'

export default {
    components: { 
        CategoryList, 
        CreateCategory 
    },
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
    //padding: 32px 0;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        //padding: 32px 0;
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        //padding: 32px 0;
    }          
    @media (max-width: $mobile-max) {
       // padding: 32px 0;        
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
