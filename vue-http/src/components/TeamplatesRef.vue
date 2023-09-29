<template>
    <div>
        <input ref="inputRef" type="text">
    </div>
</template>

<script>
    export default {
        name:"TemplateRef",
        mounted () {
            this.$.refs.inputRef.focus()
        },
    }
</script>

<style lang="scss" scoped>

</style>