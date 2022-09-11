<template>
    <p 
        href="#" 
        class="form-trigger"
        :styles="{'z-index': zIndex}"
        @click="$emit('toggleForm')"
    >
        {{ !isFormOpen ? title : 'Close' }}
    </p>  
</template>

<script>
export default {
    name: 'FormTrigger',
    props: ['isFormOpen', 'title', 'zIndex']
}
</script>

<style lang="scss" scoped>

.form-trigger {
    //z-index: 4;
    position: absolute;
    left: 0;
    top: 0;
    height: 34px;
    line-height: 34px;
    border-radius: 0 0 10px 0;
    background-color: rgba(255, 233, 206, 0.7);
    box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.3);
    color: rgb(18, 72, 189);
    font-size: 16px;
    padding: 0 12px;
    margin-bottom: 16px;
    cursor: pointer;
    &:hover {
        line-height: 38px;        
        height: 36px;        
    }
}
</style>