import { amortizations } from '@/data/Amortizations';
import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => ({
    items: amortizations.sort((a, b) => b.schedule_date.localeCompare(a.schedule_date))
  }),
});
