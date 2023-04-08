<template>
    <div>
        <input placeholder="Enter color code" type="text" v-model="colorCode">
    </div>
</template>

<script>
export default {
    computed: {
        colorCode: {
            get() {
                return this.$store.state.colorCode
            },
            set(newValue) {
                this.$store.dispatch('setColorCode', newValue)
            }
        }
    }
}
</script>
