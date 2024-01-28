<script setup lang="ts">
const emit = defineEmits(['search']);

const search = (e: Event) => {
    const inputValue = (e.target as HTMLInputElement)?.value;
    emit('search', inputValue);
}
</script>

<template>
    <form class="py-3 px-4 flex items-center">
        <label class="sr-only">Search</label>
        <div class="relative w-full">
            <input type="text" placeholder="Search..." @input="search" class="bg-gray-50 border border-gray-300 text-gray-900 rounded p-2">
        </div>
    </form>
</template>

<style>
</style>