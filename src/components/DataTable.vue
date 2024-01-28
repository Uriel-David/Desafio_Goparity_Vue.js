<script setup lang="ts">
import type Amortizations from '@/types/amortizations';

defineProps({
    items: {
        type: Array<Amortizations>,
        required: true
    }
});
</script>

<template>
    <table class="w-full">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
                <th class="px-4 py-3">Schedule Date</th>
                <th class="px-4 py-3">State</th>
                <th class="px-4 py-3">Amount</th>
                <th class="px-4 py-3">Project ID</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in items" :key="index" class="border-b">
                <td class="px-4 py-3 font-medium text-gray-900 text-center">
                    {{ item.schedule_date }}
                </td>
                <td class="px-4 py-3 font-medium text-gray-900 text-center">
                    {{ item.state }}
                </td>
                <td class="px-4 py-3 font-medium text-gray-900 text-center">
                    {{ item.amount }}
                </td>
                <td class="px-4 py-3 font-medium text-gray-900 text-center">
                    {{ item.project_id }}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style>
</style>
