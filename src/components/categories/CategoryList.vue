<template>
    <div class="app-categories">
        <ul class="category-list">
            <li 
                v-if="!categoryList.length"
                class="no-items"
            >
                Category list is empty..
            </li>

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
                ></button>
            </li>
        </ul>     
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
    },
    methods: {
        async deleteCategory(id) {
            await this.$store.dispatch('deleteCategory', id)
            if (this.$route.params.id === id) {
                this.$router.push('/')
            }
        },
        showCategory(category) {
            this.$emit('closeList')            
            this.$router.push({name: 'links-page', params: {id: category.id}}) 
            this.$store.commit('UPDATE_CATEGORY', category); 
        },
        async saveCategory() {
            await this.$store.dispatch('saveCategory', {
                name: this.categoryName
            })
            this.categoryName = ''
        },
    },
    async mounted() {
        if (!this.categoryList.length) {
            await this.$store.dispatch('getCategoryList') 
        } 
    }
}
</script>

<style lang="scss" scoped>

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
        flex: 0 0 85%;

        word-break: break-all;
        white-space: nowrap;
        overflow: hidden; 
        text-overflow: ellipsis;

        cursor: pointer;        
        &:hover  {
            color: red;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
        }  
        &:before {
            display: inline-flex;
            content: '';
            background-image: url('~@/assets/img/svg/folder.svg');
            background-size: contain;
            background-repeat: no-repeat;
            height: 18px;
            width: 18px;
            margin-right: 16px;                  
        }       
    }  
}

.no-items {
    text-align: center;
    padding: 32px 0 8px 0;    
    font-style: italic;
    color: grey;
    font-weight: 400;
}
</style>
