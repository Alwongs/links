<template>
    <form-trigger 
        :isFormOpen="isFormOpen"
        :title="$t('new_link')"
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
                    :placeholder="$t('link_title')"
                    :class="{ invalid: (v$.link.title.$dirty && v$.link.title.$error) }"                     
                >
            </li>
            <li 
                v-for="error of v$.link.title.$errors"
                :key="error.$uid"            
                class="error-item"
            >
                <small 
                    v-if="error.$params.type == 'minLength'" 
                    class="error"
                >
                    {{ $t('min_number_of_letters') }} {{ error.$params.min }}
                </small> 
                <small 
                    v-else-if="error.$params.type == 'required'" 
                    class="error"
                >
                    {{ $t('field_should_be_filled') }}
                </small> 
            </li>


            <li class="input-item">
                <input 
                    v-model="link.src" 
                    type="text" 
                    :placeholder="$t('link_src')"  
                    :class="{ invalid: (v$.link.src.$dirty && v$.link.src.$error) }"            
                >                  
            </li>
            <li 
                v-for="error of v$.link.src.$errors"
                :key="error.$uid"            
                class="error-item"
            >
                <small class="error">
                    {{ error.$message }}
                </small> 
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
import { useVuelidate } from '@vuelidate/core'
import { required, url, minLength } from '@vuelidate/validators'

export default {
    name: 'CreateLink',
    components: { FormTrigger },
    setup() {
        return { v$: useVuelidate() }
    },     
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
    validations() {
        return {
            link: {
                title: { required, minLength: minLength(3) },
                src: { url }
            },
        }
    },    
    computed: {
        loading() {
            return this.$store.getters.getLoading            
        },      
    },
    methods: {
        toggleForm() {
            this.link = {}
            this.v$.link.$reset()
            this.isFormOpen = !this.isFormOpen
        },
        async saveLink() {
            if (this.v$.link.title.$invalid) {
                this.v$.link.title.$touch()            
                return
            }            
            if (this.v$.link.src.$invalid) {
                this.v$.link.src.$touch()
                return
            }   
            await this.$store.dispatch('saveLink', this.link)
            this.link = {}
            //this.link.title = ''
            //this.link.src = ''
            this.isFormOpen = false
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
    border-radius: 5px;
    input {
        border-radius: 5px;
        font-size: 22px;        
        width: 100%;
        height: 100%;
        margin-right: 8px;
        padding: 0 8px;
    }  
}
.invalid {
    border: 1px solid red;
    color: red;
} 
.error-item {
    height: 38px;
    margin-top: -10px;    
}
input::placeholder { /* Most modern browsers support this now. */
   color:    rgb(127, 127, 127);
   font-size: 18px;
}
.error {
    font-size: 13px;
    color: red;
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