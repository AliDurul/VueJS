<template>
    <div>
<h1>component F username {{  username }}</h1>
<h2>the channel {{ channel }}</h2>
    </div>
</template>

<script>
    export default {
        name:'ComponentF',
        inject:['username','channel']
    }
</script>

<style lang="scss" scoped>

</style>