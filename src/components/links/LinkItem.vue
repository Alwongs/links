<template>
    <li class="link-item">
        <div class="link-name">         
            <a 
                target="_blank" 
                :href="link.src"
            >
                {{ link.title }}
            </a> 
        </div>
        <div class="flex-divider"></div>

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
    computed: {
        loading() {
            return this.$store.getters.getLoading            
        }, 
    },
    methods: {
        async deleteLink(link) {
            if (confirm(`Delete "${link.title}"`)) {
                await this.$store.dispatch('deleteLink', link.id)
            }
        }
    }   
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
        flex: 0 1 auto;        
        margin-right: 24px;
        //-- ниже возможно имеются лишние свойства...
        word-break: break-all;
        white-space: nowrap;
        overflow: hidden; 
        text-overflow: ellipsis;
        //-----------------------------------
        padding: 0 5px;       
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
        }              
    }   
    .flex-divider {
        flex: 1 1 auto;       
        border-bottom: 1px dotted grey;   
        margin-right: 8px;             
    }
}
</style>