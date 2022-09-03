<template>
    <p 
        v-if="!isFormOpen"
        href="#" 
        class="form-trigger"
        @click="isFormOpen = true"
    >
        Add new category
    </p>
    <form  
        v-if="isFormOpen"
        class="form"
        @submit.prevent="saveCategory"
    >
        <ul class="input-list">
            <li class="input-item">
                <input 
                    v-model="categoryName" 
                    type="text" 
                    placeholder="add new category.."
                >
            </li>
            <li class="input-item">
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
    name: 'CategoryList',
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
        btnTitle() {
            return this.categoryName ? 'Save' : 'Close'
        }    
    },
    methods: {
        async saveCategory() {
            if (!this.categoryName) {
                this.isFormOpen = false
                return
            }
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

.form-trigger {
    position: absolute;
    left: 0;
    top: 0;
    height: 38px;
    line-height: 38px;
    border-radius: 0 0 10px 0;
    background-color: rgba(255, 233, 206, 0.7);
    box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.3);
    
    color: rgb(18, 72, 189);
    font-size: 16px;
    padding: 0 12px;
    margin-bottom: 16px;
    cursor: pointer;
}
.form {
    display: flex;
    padding: 32px;
    background-color: rgba(255, 233, 206, 0.7);
    box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.3);    
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        padding: 16px;
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        padding: 16px;
    }     
    @media (max-width: $mobile-max) {
        padding: 32px;         
    }     
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
        width: 90%;  
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
        height: 44px;
    }     
}
input {
    font-size: 22px;        
    width: 100%;
    height: 100%;
    margin-right: 8px;
    padding: 0 8px;
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
