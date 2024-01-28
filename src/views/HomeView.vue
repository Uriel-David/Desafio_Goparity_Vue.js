<script setup lang="ts">
import DataTable from '@/components/DataTable.vue';
import { useStore } from '@/stores/amortizations';
import type Amortizations from '@/types/amortizations';

const store = useStore();
const items: Array<Amortizations> = store.items;
</script>

<template>
  <main class="p-8 bg-gray-100 min-h-screen w-screen">
    <div class="bg-white relative border rounded-lg">
      <div class="flex items-center justify-between">
        <!-- Search Bar -->
        <!-- List of filters for statuses -->
      </div>
      <DataTable :items="items" />
    </div>
  </main>
</template>

<style>
</style>