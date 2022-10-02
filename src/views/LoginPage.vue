<template>
    <div class="app-page">
        <h1 class="title">{{ $t('login') }}</h1>    
        <div 
            v-if="error" 
            class="error-block"
        >
            {{ error }}
        </div>            
        <form 
            class="form" 
            @submit.prevent="login"
        >
        
            <ul class="input-list">
                <li class="form-item">
                    <input 
                        v-model.trim="email"
                        type="text" 
                        :placeholder="$t('email')"
                        :class="{invalid: (v$.email.$dirty && v$.email.$error)}"
                    >
                    <small 
                        v-for="error of v$.email.$errors"
                        :key="error.$uid"
                        class="error"
                    >
                        {{ error.$message }}
                    </small> 
                </li>
                <li class="form-item">
                    <input 
                        v-model.trim="password"
                        type="text" 
                        :placeholder="$t('password')"
                        :class="{invalid: (v$.password.$dirty && v$.password.$error)}"                       
                    >
                    <small 
                        v-for="error of v$.password.$errors"
                        :key="error.$uid"
                        class="error"
                    >
                        {{ error.$message }}. Now: {{ password.length }}
                    </small>                    
                </li>
            </ul>

            <div class="btn-block">
                <router-link 
                    :to="{name: 'register'}"
                    class="link"
                >
                    {{ $t('do_not_have_account') }}
                </router-link>                 
                <button
                    v-if="!loading" 
                    type="submit"
                    class="btn btn-submit"
                >
                    {{ $t('login') }}
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { email, required, minLength  } from '@vuelidate/validators'

export default {
    setup() {
        return { v$: useVuelidate() }
    },    
    data() {
        return {
            email: '',
            password: ''
        }
    },
    validations() {
        return {
            email: {email, required},
            password: {required, minLength: minLength(8)}
        }
    },
    computed: {
        error() {
            return this.$store.getters.getError
        },
        loading() {
            return this.$store.getters.getLoading            
        }, 
        isUserAuthenticated() {
            return this.$store.getters.isUserAuthenticated;
        }        
    },
    watch: {
        isUserAuthenticated(val) {
            if (val === true) {
                this.$router.push('/');
            }  
        }                
    },
    methods: {
        login() {
            if (this.v$.email.$invalid) {
                this.v$.email.$touch()
                return
            }
            if (this.v$.password.$invalid) {
                this.v$.password.$touch()
                return
            }            
            this.$store.dispatch('login',  {
                email: this.email, 
                password: this.password
            })           
        }
    }
}
</script>

<style lang="scss" scoped>

.title {
    font-size: 28px;
    text-align: center;
    margin: 32px 0;      
}
.form {
    margin: 0 auto;
    width: 500px;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        width: 400px; 
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        width: 70%; 
    }     
    @media (max-width: $mobile-max) {
        width: 100%; 
        padding: 16px;
    } 
}
.input-list {
    margin-bottom: 16px;
}
.form-item {
    margin-bottom: 16px;    
}
.form-item > input {
    font-size: 18px;     
    width: 100%;
    height: 40px;
    padding-left: 8px;
    outline: none;
    border: none;
    border-bottom: 1px solid rgb(1, 67, 190);
    color: rgb(1, 67, 190);
    @media (max-width: $mobile-max) {
        font-size: 22px;        
        min-height: 50px;
    }     
}
.error {
    font-size: 13px;
    color: red;
}
.invalid {
    border-bottom: 1px solid red !important;
}
.btn-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .link {
        font-size: 14px;
    }
}
.btn-submit {
    background-color: rgb(20, 161, 102);
    font-size: 16px;
    color: white;
}
</style>