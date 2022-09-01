<template>
    <div class="app-page">
        <p v-if="loading" class="loading">Загрузка...</p>         
        <h1 class="title">
            {{ getCategory.name }}
        </h1>

        <form 
            class="input-block"
            @submit.prevent="saveLink"
        >
            <input 
                v-model="link.title" 
                type="text" 
                placeholder="link title.."
                required
            >
            <input 
                v-model="link.src" 
                type="text" 
                placeholder="link src.."
                required
            >
            <input 
                type="submit" 
                value="Save" 
                class="submit"
            >           
        </form>         

        <ul class="link-list">
            <li 
                v-for="link in getCategory.links" 
                :key="link.id"
            >
                <a :href="link.src">- {{ link.title }}</a>
                
            </li>
        </ul>
    </div>

</template>

<script>

export default {
    name: 'LinksPage',
    data() {
        return {
            categoryId: this.$route.params.id,
            link: {
                title: '',
                src: ''
            }
        }
    },
    computed: {
        loading() {
            return this.$store.getters.getLoading            
        },        
        getCategoryList() {
            return this.$store.getters.getCategoryList
        },
        getCategory() {
            return this.$store.getters.getCategory
        },
    },
    methods: {
        async saveLink() {
            if (this.getCategoryList.links) {
                let links = this.getCategory.links

                let newLink = {
                    id: Date.now(),
                    title: this.link.title,
                    src: this.link.src
                }
                links.push(newLink)

                let newCategory = this.getCategory
                newCategory.links = links
                await this.$store.dispatch('updateCategory', newCategory )
            } else {
                let newCategory = this.getCategory
                newCategory.links = [ this.link ]
                await this.$store.dispatch('updateCategory', newCategory )                             
            }


        },
    },
    async mounted() {
        if (!this.getCategoryList.length) {
            await this.$store.dispatch('getCategoryList') 
        }       
        if (!this.getCategory.links) {
            await this.$store.dispatch('getCategory', this.categoryId)
        }       

    }

}
</script>

<style lang="scss" scoped>

.title {
    text-align: center;
    margin-bottom: 16px;
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

.link-list {

}
</style>