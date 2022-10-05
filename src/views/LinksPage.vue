<template>
    <div class="app-page">
        <create-link />  
        
        <main class="main">
            <h1 
                v-if="!loading" 
                class="title"
            >
                {{ getCategory.name || 'not found category name' }}
            </h1>

            <ul class="link-list">
                <li 
                    v-if="!getCategoryFilter.links"
                    class="no-items"
                >
                    Link list is empty..
                </li>
                <link-item 
                    v-for="(link, index) in getCategoryFilter.links"
                    :key="link.id"
                    :link="link"
                    :number="index"
                />
            </ul>
        </main>
    </div>
</template>

<script>
import CreateLink from '@/components/links/CreateLink.vue'
import LinkItem from '@/components/links/LinkItem.vue'

export default {
    name: 'LinksPage',
    components: {
        CreateLink,
        LinkItem
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
        getCategoryFilter() {
            return this.$store.getters.getCategoryFilter
        },            
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

.main {
    padding: 32px 128px;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        padding: 32px 64px;
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        padding: 32px;
    }     
    @media (max-width: $mobile-max) {
        padding: 16px; 
    }     
}
.title {
    font-size: 28px;    
    text-align: center;
    padding: 32px;
    @media (max-width: $mobile-max) {
        font-size: 26px; 
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