<template>
    <form-trigger 
        :isFormOpen="isFormOpen"
        :title="$t('newLink')"
        :zIndex="1"
        @toggleForm="toggleForm"
    />
    <form    
        class="form"
        :class="{active: isFormOpen}"
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
                <input 
                    type="submit" 
                    value="Save" 
                    class="submit"
                >
            </li>
        </ul>
    </form> 
</template>

<script>
import FormTrigger from '@/components/common/FormTrigger.vue'

export default {
    name: 'CreateLink',
    components: { FormTrigger },
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
        isAsideOpen() {
            return this.$store.getters.isAsideOpen
        }       
    },
    methods: {
        toggleForm() {
            this.isFormOpen = !this.isFormOpen
        },
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
    background-color: rgba(255, 233, 206, 0.7);
    box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.3);
    padding: 34px;
    border-radius: 0 0 10px 0;
    width: 50%;

    transition: 0.4s;
    margin-top: -207px;

    &.active {
        margin-top: 0;
    }   
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        width: 75%;
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        width: 90%;
    }     
    @media (max-width: $mobile-max) {
        width: 100%; 
        border-radius: 0;        
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
    cursor: pointer;
    &:hover {
        background-color: #fff;
    }
    @media (max-width: $mobile-max) {
        width: 100%;         
    }   
}  
</style>