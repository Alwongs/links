<template>
    <div class="app-page">
        <p v-if="loading" class="loading">Загрузка...</p> 
        <create-link />  

        <main class="main">
            <h1 class="title">
                {{ getCategory.name }}
            </h1>

            <ul class="link-list">
                <link-item 
                    v-for="(link, index) in getLinkList"
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
        getLinkList() {
            return this.$store.getters.getLinkList
        },
       
    },
    async mounted() {
        if (!this.$store.getters.getCategoryList.length) {
            await this.$store.dispatch('getCategoryList') 
        }       
        await this.$store.dispatch('getCategory', this.categoryId) 
        if (!this.getLinkList.length) {
            await this.$store.dispatch('getLinkList', this.categoryId)            
        }
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
    margin-bottom: 32px;
}
</style>