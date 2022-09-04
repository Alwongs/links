<template>
    <app-panel />

    <div class="wrapper">
        <app-aside class="aside-block" />
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
    },
}
</script>

<style lang="scss" scoped>

.wrapper {
    position: relative;
    min-height: 200px;
    height: calc(100vh - 128px);
    display: flex;
    max-width: 100vw;   
}
.aside-block {
    flex: 0 0 400px;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        flex: 0 0 350px;
    }     
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        flex: 0 0 250px;
    }     
    @media (max-width: $mobile-max) {
        width: 100%; 
    } 
}
</style>