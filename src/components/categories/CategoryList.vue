<template>
    <div 
        class="app-categories" 
    >
        <h2 class="title">
            Caterories
        </h2>

        <ul class="category-list">
            <li 
                v-for="category in categoryList" 
                :key="category.id"
                class="category-item"
            >
                <div 
                    class="category-name"
                    @click="showCategory(category)"
                >
                    {{ category.name }}
                </div>
                <button 
                    class="btn-delete"
                    @click="deleteCategory(category.id)"
                >
                    Del
                </button>
            </li>
        </ul>
        <p v-if="loading" class="loading">Загрузка...</p>        
    </div>
</template>

<script>

export default {
    name: 'CategoryList',
    data() {
        return {
            categoryName: ''
        }
    },
    computed: {
        loading() {
            return this.$store.getters.getLoading            
        },
        categoryList() {
            return this.$store.getters.getCategoryList
        },
        isAsideOpen() {
            return this.$store.getters.isAsideOpen
        },
        getCategoryList() {
            return this.$store.getters.getCategoryList
        },        
    },
    methods: {
        async deleteCategory(id) {
            await this.$store.dispatch('deleteCategory', id)
        },
        showCategory(category) {
            this.$store.commit('UPDATE_CATEGORY', category);
            this.$store.commit('UPDATE_LINK_LIST', category.links);
            this.$router.push({name: 'links-page', params: {id: category.id}})
            this.$store.commit('CLOSE_ASIDE')            
        },
        async saveCategory() {
            await this.$store.dispatch('saveCategory', {
                name: this.categoryName
            })
            this.categoryName = ''
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

.title {
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    padding: 32px 0 8px 0;
    //margin-bottom: 32px;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        //margin-bottom: 16px;
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        //margin-bottom: 16px;
    }     
    @media (max-width: $mobile-max) {
        //margin-bottom: 16px;         
    }      
}
.category-list {
    margin-bottom: 32px;
}
.category-item {
    display: flex;
    justify-content: space-between;
    padding: 16px 32px;
    border-bottom: 1px solid rgba(136, 136, 136, 0.3);
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        padding: 16px;
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        padding: 12px;
    }     
    @media (max-width: $mobile-max) {
        padding: 12px;         
    }   
    .category-name {
        flex: 1 1 auto;
        cursor: pointer;        
        &:hover  {
            color: red;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
        }         
    }
    button {
        font-size: 12px;
        font-weight: 500;
        width: 30px;
        height: 30px;
        color:red;
        background-color: rgb(255, 237, 237);
        border: 1px solid rgba(255, 67, 67, 0.7);
        border-radius: 50%;
        box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.5);
        cursor: pointer;
        &:hover  {
            color: white;
            background-color: rgb(234, 91, 91);
            border: 1px solid red;
            box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.5);            
        }         
    }    
}
</style>
