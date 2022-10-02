<template>
    <li class="link-item">
        <div class="link-name">         
            <a 
                target="_blank" 
                :href="link.src"
                class="link"
            >
                {{ limitText(link.title) }}
            </a> 
        </div>
        <div class="flex-divider" @click="getWidth"></div>

        <button 
            id="button"
            class="btn-delete"
            @click="deleteLink(link)"
        ></button>
    </li>  
</template>

<script>

export default {
    name: 'LinkItem',
    props: ['link', 'number'],
    data() {
        return {
            width: window.innerWidth
        }
    },    
    computed: {
        loading() {
            return this.$store.getters.getLoading            
        }, 
    },
    watch: {
        width() {

        }
    },
    methods: {
        updateWidth() {
            this.width = window.innerWidth;
        },
        capitalizeFirstLetter(str) {
            return str[0].toUpperCase() + str.substring(1)
        },
        limitText(str) {
            let value = this.capitalizeFirstLetter(str)
            if (this.width >= 2550) {
                return value.substring(0, this.width / 20) + '...'
            } else if (this.width < 2550 && this.width >= 1980) {
                return value.substring(0, this.width / 22) + '...'
            } else if (this.width < 1980 && this.width >= 1440) {
                return value.substring(0, this.width / 30) + '...'
            } else if (this.width < 1440 && this.width >= 1024) {
                return value.substring(0, this.width / 30) + '...'            
            } else if (this.width < 1023 && this.width >= 768) {
                return value.substring(0, this.width / 30) + '...'
            } else if (this.width < 768) {
                return value.substring(0, this.width / 17) + '...'
            }
        },
        async deleteLink(link) {
            if (confirm(`Delete "${link.title}"`)) {
                await this.$store.dispatch('deleteLink', link.id)
            }
        }
    }, 
    created() {
        window.addEventListener('resize', this.updateWidth);
    },      
}
</script>

<style lang="scss" scoped>

.link-item {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    max-width: 100%;
    .link-name {
        font-size: 22px;
        //flex: 0 0 auto;        
        margin-right: 24px;
        //padding: 0;       
        cursor: pointer;        
        &:hover  {
            color: red;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
        }  
        &:before {
            display: inline-flex;
            content: '';
            background-image: url('~@/assets/img/svg/link.svg');
            background-size: contain;
            background-repeat: no-repeat;
            height: 24px;
            width: 24px;
            margin-right: 4px; 
            @media (max-width: $mobile-max) {
                display: none;
            }                              
        } 
        @media (max-width: $mobile-max) {
            margin-right: 4px;
        }                      
    }   
    .flex-divider {
        flex: 1 1 auto;       
        border-bottom: 1px dotted grey;   
        margin-right: 8px;             
    }
}
</style>