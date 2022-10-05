<template>
    <div class="create-category">
        <form-trigger 
            :isFormOpen="isFormOpen"
            :title="$t('new_сategory')" 
            @toggleForm="toggleForm"
        />
        <div
            :class="{active: isFormOpen}"  
            class="modal"
        >
            <h2 class="modal-title">Новая категория</h2> 
            <form  
                class="form"      
                @submit.prevent="saveCategory"
            >       
                <ul class="input-list">
                    <li class="input-item">
                        <input 
                            v-model="categoryName" 
                            type="text" 
                            :placeholder="$t('link_title')"
                            required
                        >
                    </li>
                    <li class="input-item">
                        <input 
                            type="submit" 
                            value="Save" 
                            class="submit"
                        >  
                    </li>
                </ul>
            </form>
        </div>
    </div>  
</template>

<script>
import FormTrigger from '@/components/common/FormTrigger.vue'

export default {
    name: 'CategoryList',
    components: { FormTrigger },
    data() {
        return {
            isFormOpen: false,            
            categoryName: '',
        }
    },
    computed: {
        loading() {
            return this.$store.getters.getLoading            
        },      
    },
    methods: {
        toggleForm() {
            this.isFormOpen = !this.isFormOpen
        },        
        async saveCategory() {
            await this.$store.dispatch('saveCategory', {
                name: this.categoryName
            })
            this.categoryName = ''
            this.isFormOpen = false
        }
    }
}
</script>

<style lang="scss" scoped>

.modal {
    padding: 0 16px 24px 16px;
    background-color: rgba(255, 233, 206, 0.7);
    box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.3);   
    transition: 0.4s;
    margin-top: -134px;
    &.active {
        margin-top: 0;
    }       
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        margin-top: -134px;
    }         
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        margin-top: -174px;        
    }     
    @media (max-width: $mobile-max) {    
        margin-top: -190px;              
    } 
}
.modal-title {
    font-size: 24px;
    padding: 16px 0;
    text-align: center;
}
.form {
    display: flex;    
}
.input-list {
    display: flex;
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        flex-direction: column; 
        width: 100%;  
        margin: 0 auto;
    } 
    @media (max-width: $mobile-max) {
        flex-direction: column; 
        width: 100%;  
        margin: 0 auto;      
    }     
}
.input-item {
    height: 38px;
    &:not(:last-child) {
        margin-bottom: 8px;
    }
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        flex-direction: column; 
        width: 100%;  
        margin: 0 auto;  
    }     
    @media (max-width: $mobile-max) {
        height: 48px;
    }  
    input {
        font-size: 22px;        
        width: 100%;
        height: 100%;
        margin-right: 8px;
        padding: 0 8px;
    }       
}
.submit {
    font-size: 22px;          
    width: 100%;
    height: 100%;
    cursor: pointer;
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

input::placeholder { /* Most modern browsers support this now. */
    color: rgb(127, 127, 127);
    font-size: 18px;
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        font-size: 16px;
    }     
    @media (max-width: $mobile-max) {
        font-size: 16px;        
    }    
}
</style>
