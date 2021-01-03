<template>
    <div>
        <button class="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none" @click="onClick()"><slot/></button>
    </div>
</template>

<script>
export default {
    methods: {
        onClick() {
            this.$emit("click")
        }
    }   
}
</script>