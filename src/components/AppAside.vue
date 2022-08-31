<template>
    <aside 
        class="app-aside" 
        :class="{active: isAsideOpen}"
    >
        <h2 class="title">
            Caterories
        </h2>

        <ul class="category-list">
            <li class="category-item">
                HEALTH
            </li>
            <li class="category-item">
                DEV
            </li>
            <li class="category-item">
                AIR
            </li>
            <li class="category-item">
                SPORT
            </li>
        </ul>
        <div class="btn-block">
            <button class="btn btn-create">
                Add Category
            </button>
        </div>
    </aside>
</template>

<script>
export default {
    name: 'AppAside',
    computed: {
        isAsideOpen() {
            return this.$store.getters.isAsideOpen
        }
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
.title {
    font-weight: 500;
    text-align: center;
    padding: 32px 0;
    @media (max-width: $mobile-max) {
        padding: 16px 0;          
    }      
}
.category-list {
    margin-bottom: 32px;
}
.category-item {
    padding: 16px 32px;
    border-bottom: 1px solid rgba(136, 136, 136, 0.3);
    &:hover {
        background-color: rgb(233, 255, 246);
    }    
}
.btn-block {
    padding: 0 32px;
}
.btn-create {
    width: 100%;
    height: 52px;
    font-size: 22px;
    &:hover {
        background-color: #fff;
    }
}
</style>
