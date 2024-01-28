<script setup lang="ts">
import DataTable from '@/components/DataTable.vue';
import FilterDropdown from '@/components/FilterDropdown.vue';
import FilterRadio from '@/components/FilterRadio.vue';
import SearchForm from '@/components/SearchForm.vue';
import { useStore } from '@/stores/amortizations';
import type Amortizations from '@/types/amortizations';
import { computed, ref } from 'vue';

const store = useStore();
const items: Array<Amortizations> = store.items;
const searchFilter = ref('');
const radioFilter = ref('');
const checkboxFilter = ref([] as string[]);

const filteredItems = computed(() => {
  let amortizations = items;

  switch (radioFilter.value) {
    case 'today':
      amortizations = amortizations.filter(item => new Date(item.schedule_date).getDate() === new Date().getDate())
      break;
    case 'past':
      amortizations = amortizations.filter(item => new Date(item.schedule_date).getDate() < new Date().getDate())
      break;
    default:
      break;
  }

  if (checkboxFilter.value.length) {
    amortizations = amortizations.filter(item => checkboxFilter.value.includes(item.state));
  }

  if (searchFilter.value !== '') {
    amortizations = amortizations.filter(item => 
      item.amount === Number(searchFilter.value)
      || item.project_id === Number(searchFilter.value)
    );
  }

  return amortizations
});

const handleSearch = (search: string) => {
  searchFilter.value = search;
};

const handleFilter = (filter: string) => {
  radioFilter.value = filter;
};

const handleCheckboxFilter = (filter: string) => {
  const updatedCheckboxFilter = [...checkboxFilter.value];

  if (updatedCheckboxFilter.includes(filter)) {
    updatedCheckboxFilter.splice(updatedCheckboxFilter.indexOf(filter), 1);
  } else {
    updatedCheckboxFilter.push(filter);
  }

  checkboxFilter.value = updatedCheckboxFilter;
};
</script>

<template>
  <main class="p-8 bg-gray-100 min-h-screen">
    <div class="bg-white relative border rounded-lg">
      <div class="flex items-center justify-between">
        <SearchForm @search="handleSearch" />
        <div class="flex items-center justify-end text-sm font-semibold">
          <FilterRadio @filter="handleFilter" />
          <FilterDropdown :items="items" @filter="handleCheckboxFilter" />
        </div>
      </div>
      <DataTable :items="filteredItems" />
    </div>
  </main>
</template>

<style>
</style>