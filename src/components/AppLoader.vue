<template>
    <div class="wrapper">
        <div class="waviy">
            <span style="--i:1">L</span>
            <span style="--i:2">o</span>
            <span style="--i:3">a</span>
            <span style="--i:4">d</span>
            <span style="--i:5">i</span>
            <span style="--i:6">n</span>
            <span style="--i:7">g</span>
            <span style="--i:8">.</span>
            <span style="--i:9">.</span>
            <span style="--i:10">.</span>
        </div>
    </div>
</template>

<script>

export default {
    name: 'AppLoader'
}
</script>

<style lang="scss" scoped>

.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
}
.waviy {
    position: relative;
}
.waviy span {
    position: relative;
    display: inline-block;
    font-size: 24px;
    font-weight: 500;
    color: yellow;
    animation: flip 2s infinite;
    animation-delay: calc(.2s * var(--i))
}
@keyframes flip {
    0%,80% {
        transform: rotateY(360deg) 
    }
}
</style>