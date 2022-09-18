<template>
    <aside class="app-aside">
        <create-category />
        <h2 
            class="title"
            @click="toggleList"
        >
            {{ $t('categories') }}
        </h2> 
        <div 
            :class="{ active: isListOpen }"         
            class="list-wrap"
        >
            <category-list @closeList="closeList"/>
        </div>       
    </aside>
</template>

<script>
import CategoryList from '@/components/categories/CategoryList.vue'
import CreateCategory from '@/components/categories/CreateCategory.vue'

export default {
    name: 'AppAside',
    components: { 
        CategoryList, 
        CreateCategory 
    },
    data() {
        return {
            isListOpen: true
        }
    },
    methods: {
        closeList() {
            this.isListOpen = false
        },
        toggleList() {
            this.isListOpen = !this.isListOpen
        }
    },
    async mounted() {
        await this.$store.dispatch('getCategoryList')
    }    
}
</script>

<style lang="scss" scoped>

.app-aside {
    z-index: 4;
    background-color: rgb(207, 234, 223);
    box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.2);    
}
.title {
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    padding: 32px 0 8px 0;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {

    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {

    }     
    @media (max-width: $mobile-max) {
        cursor: pointer;        
    }      
}
.list-wrap {
    @media (max-width: $mobile-max) {
        overflow: hidden;
        max-height: 0;     
        transition: max-height 1s ease-in-out;           
        &.active {
            max-height: 1000px;       
        }          
    }      
}
</style>
