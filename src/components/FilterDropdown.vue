<script setup lang="ts">
import type Amortizations from '@/types/amortizations';
import { computed, ref, defineProps, defineEmits } from 'vue';
import { useFilterStore } from '@/stores/filter';

const emit = defineEmits(['filter']);
const show = ref(false);
const filterStore = useFilterStore();
const props = defineProps({
  items: {
    type: Array<Amortizations>,
    required: true,
  },
});

const statuses = computed(() => {
  return [...new Set(props.items.map((item) => item.state))];
});

const filter = (status: string) => {
  emit('filter', status);
};
</script>

<template>
  <div class="relative flex items-center w-full px-4">
    <button @click="show = !show" class="w-full flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900">
      Filter
    </button>
    <div v-show="show" class="absolute top-12 right-0 z-10 w-48 p-3 bg-white rounded-lg shadow">
      <h6 class="mb-3 text-sm font-medium text-gray-900">Status</h6>
      <ul class="space-y-2 text-sm">
        <li v-for="(status, index) in statuses" :key="index">
          <input
            :id="`filter_option_${index}`"
            @change="() => filter(status)"
            type="checkbox"
            :value="status"
            :checked="filterStore.getCheckboxStatus(status)"
            class="w-4 h-4 bg-gray-100 border-gray-300 rounded"
          />
          <label :for="`filter_option_${index}`" class="ml-2 text-sm font-medium text-gray-900">{{ status }}</label>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
</style>
