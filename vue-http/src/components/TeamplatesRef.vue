<template>
    <div>
        <input ref="inputRef" type="text">
    </div>
</template>

<script>
    export default {
        name:"TemplateRef",
        mounted () {
            this.$.ref
        },
    }
</script>

<style lang="scss" scoped>

</style>