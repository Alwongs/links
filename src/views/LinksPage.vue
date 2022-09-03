<template>
    <div class="app-page">
        <p v-if="loading" class="loading">Загрузка...</p> 

        <create-link />                
        <h1 class="title">
            {{ getCategory.name }}
        </h1>


        <ul class="link-list">
            <li 
                v-for="link in getLinkList" 
                :key="link.id"
                class="link-item"
            >
                <a 
                    id="link"
                    target="_blank"
                    :href="link.src"
                    class="link-name"
                >
                    - {{ link.title }}
                </a>
                <div class="flex-divider"></div>
                <button 
                    id="button"
                    class="btn-delete"
                    @click="deleteLink(link)"
                >
                    &times;
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
import CreateLink from '@/components/links/CreateLink.vue'

export default {
    name: 'LinksPage',
    components: {
        CreateLink
    },
    data() {
        return {
            categoryId: this.$route.params.id,
        }
    },
    computed: {
        loading() {
            return this.$store.getters.getLoading            
        }, 
        getCategory() {
            return this.$store.getters.getCategory
        },
        getLinkList() {
            return this.$store.getters.getLinkList
        },
    },
    methods: {
        async deleteLink(link) {
            if (confirm(`Delete "${link.title}"`)) {
                await this.$store.dispatch('deleteLink', link.id)
            }
        }
    },
    async mounted() {
        if (!this.$store.getters.getCategoryList.length) {
            await this.$store.dispatch('getCategoryList') 
        }       
        await this.$store.dispatch('getCategory', this.categoryId)    
    }
}
</script>

<style lang="scss" scoped>

.title {
    font-size: 28px;    
    text-align: center;
    margin-bottom: 16px;
}
.link-list {
    width: 50%;
    margin: 0 auto;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        width: 75%;
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        width: 90%;
    }     
    @media (max-width: $mobile-max) {
        width: 100%; 
    }     
}
.link-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    .link-name {
        margin-right: 8px;
        cursor: pointer;        
        &:hover  {
            color: red;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
        }       
    }   
    .flex-divider      {
        flex: 1 1 auto;        
        border-bottom: 1px dotted grey;   
        margin-right: 8px;             
    }
    button {
        font-size: 22px;
        width: 30px;
        height: 30px;
        color:red;
        background-color: rgb(255, 229, 229);
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