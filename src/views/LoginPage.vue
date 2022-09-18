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
                        v-model="email"
                        type="text" 
                        :placeholder="$t('email')"
                        required
                    >
                </li>
                <li class="form-item">
                    <input 
                        v-model="password"
                        type="text" 
                        :placeholder="$t('password')"
                        required
                    >
                </li>
            </ul>

            <div class="btn-block">
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
export default {
    data() {
        return {
            email: '',
            password: ''
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
            if (this.email && this.password) {
                this.$store.dispatch('login',  {
                    email: this.email, 
                    password: this.password
                });
            } else {
                alert('fill all fields please...')
            }
        }
    }
}
</script>

<style lang="scss" scoped>

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
.title {
    font-size: 28px;
    text-align: center;
    margin: 32px 0;      
}
.input-list {
    margin-bottom: 16px;
}
.form-item > input {
    font-size: 18px;     
    width: 100%;
    height: 40px;
    margin-bottom: 16px;
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
.btn-block {
    text-align: end;
}
.btn-submit {
    background-color: rgb(20, 161, 102);
    font-size: 16px;
    color: white;
}
</style>