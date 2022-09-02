<template>
    <div class="app-page">
        <p v-if="loading" class="loading">Загрузка...</p>         
        <h1 class="title">
            {{ getCategory.name }}
        </h1>

        <create-link />

        <ul class="link-list">
            <li 
                v-for="link in getLinkList" 
                :key="link.id"
            >
                <a :href="link.src">- {{ link.title }}</a>
                
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
    text-align: center;
    margin-bottom: 16px;
}
.link-list {

}
</style>