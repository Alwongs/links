<template>
    <div 
        class="app-categories" 
    >
        <h2 class="title">
            Caterories
        </h2>

        <form 
            class="input-block"
            @submit.prevent="saveCategory"
        >
            <input 
                v-model="categoryName" 
                type="text" 
                placeholder="add new category.."
                required
            >
            <input 
                type="submit" 
                value="Save" 
                class="submit"
            >           
        </form>

        <p v-if="loading" class="loading">Загрузка...</p>
        <ul class="category-list">
            <li 
                v-for="category in categoryList" 
                :key="category.id"
                class="category-item"
                @click="showCategory(category)"
            >
                {{ category.name }}
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'AppAside',
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
        }
    },
    methods: {
        showCategory(category) {
            this.$store.commit('UPDATE_CATEGORY', category);
            this.$router.push({name: 'links-page'})
        },
        async saveCategory() {
            await this.$store.dispatch('saveCategory', {
                name: this.categoryName
            })
            this.categoryName = ''
        },
        async getCategoryList() {
            await this.$store.dispatch('getCategoryList')
        }
    },
    async mounted() {
        await this.$store.dispatch('getCategoryList')
    }
}
</script>

<style lang="scss" scoped>

.title {
    font-weight: 500;
    text-align: center;
    padding: 32px 0;
    @media (max-width: $mobile-max) {
        padding: 16px 0;          
    }      
}


.input-block {
    display: flex;
    padding: 0 32px;
    height: 44px;
    margin-bottom: 16px;
    input {
        font-size: 22px;        
        width: 75%;
        height: 100%;
        margin-right: 8px;
        padding: 0 8px;
    }
    .submit {
        font-size: 22px;          
        width: 25%;
        height: 100%;
        &:hover {
            background-color: #fff;
        }
    }    
}
input::placeholder { /* Most modern browsers support this now. */
   color:    rgb(127, 127, 127);
   font-size: 18px;
}



.category-list {
    margin-bottom: 32px;
}
.category-item {
    padding: 16px 32px;
    border-bottom: 1px solid rgba(136, 136, 136, 0.3);
    cursor: pointer;
    &:hover {
        background-color: rgb(233, 255, 246);
    }    
}
</style>
