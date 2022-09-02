<template>
    <form 
        class="form"
        @submit.prevent="saveCategory"
    >
        <ul class="input-list">
            <li class="input-item">
                <input 
                    v-model="categoryName" 
                    type="text" 
                    placeholder="add new category.."
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
</template>

<script>

export default {
    name: 'CategoryList',
    data() {
        return {
            categoryName: ''
        }
    },
    computed: {
        loading() {
            return this.$store.getters.getLoading            
        }       
    },
    methods: {
        async saveCategory() {
            await this.$store.dispatch('saveCategory', {
                name: this.categoryName
            })
            this.categoryName = ''
        }
    }
}
</script>

<style lang="scss" scoped>

.form {
    display: flex;
    padding: 0 32px;
    margin-bottom: 16px;

    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        padding: 0 16px;
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        padding: 0 16px;
    }     
    @media (max-width: $mobile-max) {
        padding: 0 16px;         
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
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        flex-direction: column; 
        width: 100%;  
        margin: 0 auto;
        margin-bottom: 8px;        
    }     
    @media (max-width: $mobile-max) {
        margin-bottom: 8px;
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
