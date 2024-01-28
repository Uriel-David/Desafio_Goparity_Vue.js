<script setup lang="ts">
const emit = defineEmits(['paginate']);
const props = defineProps({
    pages: {
        type: Number,
        required: true
    },
    currentPage: {
        type: Number,
        required: true
    }
});

const paginate = (pageSelected: number) => {
    emit('paginate', pageSelected);
};

const prevPaginate = () => {
    const page = props.currentPage === 1 ? props.currentPage : props.currentPage - 1;
    emit('paginate', page);
};

const nextPaginate = () => {
    const page = props.currentPage >= props.pages ? props.pages : props.currentPage + 1;
    emit('paginate', page);
};
</script>

<template>
    <div class="text-center my-4">
        <nav aria-label="Page navigation example">
            <ul class="inline-flex -space-x-px text-sm">
                <li @click="prevPaginate()">
                    <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                </li>
                <li v-for="page in pages" @click="paginate(page)">
                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{{ page }}</a>
                </li>
                <li @click="nextPaginate()">
                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style>
</style>