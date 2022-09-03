<template>
    <p 
        v-if="!isFormOpen"
        href="#" 
        class="form-trigger"
        @click="isFormOpen = true"
    >
        Add new link
    </p>
    <form 
        v-if="isFormOpen"    
        class="form"
        @submit.prevent="saveLink"
    >
        <ul class="input-list">
            <li class="input-item">
                <input 
                    v-model="link.title" 
                    type="text" 
                    placeholder="link title.."
                >
            </li>
            <li class="input-item">
                <input 
                    v-model="link.src" 
                    type="text" 
                    placeholder="link src.."
                >
            </li>
            <li class="input-item submit-item">
                <input 
                    type="submit" 
                    :value="btnTitle" 
                    class="submit"
                >
            </li>
        </ul>
    </form> 
</template>

<script>
export default {
    name: 'CreateLink',
    data() {
        return {
            isFormOpen: false, 
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
        btnTitle() {
            if (this.link.title && this.link.src) {
                return 'Save'
            } else {
                return 'Close'
            }

        }         
    },
    methods: {
        async saveLink() {
            if (!this.link.title || !this.link.src) {
                this.isFormOpen = false
                return
            }            
            await this.$store.dispatch('saveLink', this.link)
            await this.$store.dispatch('getLinkList', this.categoryId); 
            this.link.title = ''
            this.link.src = ''
        },
    },        
}
</script>

<style lang="scss" scoped>

.form-trigger {
    color: rgb(18, 72, 189);
    font-size: 15px;
    margin-bottom: 32px;
    cursor: pointer;
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