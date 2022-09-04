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
        >
            Del
        </button>
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
        getCategory() {
            return this.$store.getters.getCategory
        },
        getLinkList() {
            return this.$store.getters.getLinkList
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
    }   
    .flex-divider {
        flex: 1 1 auto;       
        border-bottom: 1px dotted grey;   
        margin-right: 8px;             
    }
    button {
        flex: 0 0 30px; 
        font-size: 12px;
        font-weight: 500;
        width: 30px;
        height: 30px;
        color:red;
        background-color: rgb(255, 229, 229);
        border: 1px solid rgba(255, 67, 67, 0.7);
        border-radius: 50%;
        box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.5);
        cursor: pointer;
        &:hover  {
            color: white;
            background-color: rgb(234, 91, 91);
            border: 1px solid red;
            box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.5);            
        }        
    } 
}
</style>