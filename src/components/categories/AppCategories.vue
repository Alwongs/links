<template>
    <div 
        class="app-categories" 
    >
        <h2 class="title">
            Caterories
        </h2>

        <form 
            class="form"
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
        },
        getCategoryList() {
            return this.$store.getters.getCategoryList
        },        
    },
    methods: {
        showCategory(category) {
            this.$store.commit('UPDATE_CATEGORY', category);
            this.$store.commit('UPDATE_LINK_LIST', category.links);
            this.$router.push({name: 'links-page', params: {id: category.id}})
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
    font-weight: 500;
    text-align: center;
    padding: 32px 0;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        padding: 16px 0;
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        padding: 16px 0;
    }     
    @media (max-width: $mobile-max) {
        padding: 16px 0;          
    }      
}


.form {
    display: flex;
    padding: 0 32px;
    height: 38px;
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
        @media (min-width: $tablet-min) and (max-width: $tablet-max) {
            font-size: 16px;
        }     
        @media (max-width: $mobile-max) {
            font-size: 16px;        
        }         
    } 
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        padding: 0 16px;
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        padding: 0 16px;
    }     
    @media (max-width: $mobile-max) {
        padding: 0 16px;         
    }     
}
input::placeholder { /* Most modern browsers support this now. */
   color:    rgb(127, 127, 127);
   font-size: 18px;
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        font-size: 16px;
    }     
    @media (max-width: $mobile-max) {
        font-size: 16px;        
    }    
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
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        padding: 16px;
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        padding: 12px;
    }     
    @media (max-width: $mobile-max) {
        padding: 12px;         
    }       
}
</style>
