<template>
    <div class="app-page">
        <p v-if="loading" class="loading">Загрузка...</p>        
        <ul>
            <li 
                v-for="link in getLinkList" 
                :key="link.id"
            >
                {{ link.title }}
            </li>
        </ul>
    </div>

</template>

<script>

export default {
    name: 'LinksPage',
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
        await this.$store.dispatch('getCategoryList')        
        await this.$store.dispatch('getLinkList', this.getCategory.id)
    }

}
</script>

<style lang="scss" scoped>


</style>