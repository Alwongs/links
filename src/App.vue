<template>
    <app-panel />
    <div class="wrapper">
        <app-aside />
        <router-view />
    </div>
    <app-footer />
</template>

<script>
import AppPanel from '@/components/AppPanel.vue'
import AppAside from '@/components/AppAside.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
    name: 'App',
    components: {
        AppPanel,
        AppAside,
        AppFooter,
    }
}
</script>

<style lang="scss" scoped>

.wrapper {
    min-height: 200px;
    height: calc(100vh - 128px);
    //background-color: rgb(111, 198, 130); 
    display: flex;   
}
</style>