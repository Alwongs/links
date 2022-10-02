<template>
    <p 
        href="#" 
        class="form-trigger"
        :styles="{'z-index': zIndex}"
        @click="$emit('toggleForm')"
    >
        {{ !isFormOpen ? title : $t('close') }}
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
    position: absolute;
    left: 0;
    top: 0;
    height: 36px;
    line-height: 34px;
    border-radius: 0 0 10px 0;
    background-color: rgba(255, 233, 206, 0.7);
    box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.3);
    color: rgb(18, 72, 189);
    font-size: 18px;
    padding: 0 14px;
    margin-bottom: 16px;
    cursor: pointer;
    &:hover {
        line-height: 38px;        
        height: 36px;        
    }
}
</style>