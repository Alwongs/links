<template>
    <div class="loader">
        Loading...
    </div>
</template>

<script>
export default {
    name: 'PreLoader'
}
</script>

<style lang="scss" scoped>
    .loader {
        background-color: #fff;
        position: absolute;
        left: 50%;
        top: 50%;
        width: 120px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border: 1px solid grey;
        box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
        border-radius: 20px;
        transform: translate(-50%, -50%);
    }
</style>