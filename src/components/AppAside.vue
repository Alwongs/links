<template>
    <aside class="app-aside">
        <create-category />
        <h2 
            :class="{'arrow-right': !isListOpen, 'arrow-down': isListOpen}"
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
    @media (max-width: $mobile-max) {
        font-size: 26px;
        cursor: pointer;       
    }      
}

@mixin arrow-icon($duration) {
    display: inline-flex;
    content: '';
    background-image: url('~@/assets/img/svg/arrow_right.svg');
    background-size: contain;
    background-repeat: no-repeat; 
    height: 24px;
    width: 24px; 
    transition: $duration;    
    @media (min-width: $mobile-max) {
        display: none;
    }             
}
.arrow-right {
    &:after {
        @include arrow-icon(0.5s);        
        background-position: 4px 5px;            
    }        
}
.arrow-down { 
    &:after {
        @include arrow-icon(0.3s);
        background-position: 6px -4px;
        transform: rotate(90deg);               
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
