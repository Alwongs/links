<template>
    <form 
        class="form"
        @submit.prevent="saveLink"
    >
        <ul class="input-list">
            <li class="input-item">
                <input 
                    v-model="link.title" 
                    type="text" 
                    placeholder="link title.."
                    required
                >
            </li>
            <li class="input-item">
                <input 
                    v-model="link.src" 
                    type="text" 
                    placeholder="link src.."
                    required
                >
            </li>
            <li class="input-item submit-item">
                <button 
                    type="submit" 
                    value="Save" 
                    class="submit"
                >Save</button>
            </li>
        </ul>
    </form> 
</template>

<script>
export default {
    name: 'CreateLink',
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
        getLinkList() {
            return this.$store.getters.getLinkList
        },
    },
    methods: {
        async saveLink() {
            await this.$store.dispatch('saveLink', this.link)
            await this.$store.dispatch('getLinkList', this.categoryId); 
            this.link.title = ''
            this.link.src = ''
        },
    },        
}
</script>

<style lang="scss" scoped>

.form {
    width: 50%;
    margin: 0 auto;
    margin-bottom: 32px;
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
.input-item {
    width: 100%;
    height: 38px;
    margin-bottom: 8px;
    input {
        font-size: 22px;        
        width: 100%;
        height: 100%;
        margin-right: 8px;
        padding: 0 8px;
    }   
}
input::placeholder { /* Most modern browsers support this now. */
   color:    rgb(127, 127, 127);
   font-size: 18px;
}
.submit-item {
    width: 100%;
    height: 38px;
    text-align: end;
}    
.submit {
    font-size: 22px;          
    width: 150px;
    height: 100%;
    &:hover {
        background-color: #fff;
    }
    @media (max-width: $mobile-max) {
        width: 100%;         
    }   
}  
</style>