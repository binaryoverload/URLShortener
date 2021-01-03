<template>
    <div>
        <input type="text" :value="value" class="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-blue-500 focus:z-10 sm:text-sm" @input="e => onInput(e)" :placeholder="placeholder">
    </div>
</template>

<script>
export default {
    methods: {
        onInput(e) {
            this.$emit("input", e.target.value)
        }
    },
    props: {
        value: {
            type: String,
            default: ""
        },
        placeholder: {
            type: String,
            default: ""
        }
    }
}
</script>