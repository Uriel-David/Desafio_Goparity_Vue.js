import { defineStore } from 'pinia';

export const useFilterStore = defineStore('filter', {
  state: () => ({
    checkboxStatus: {} as Record<string, boolean>,
  }),
  getters: {
    getCheckboxStatus: (state) => (status: string) => state.checkboxStatus[status] || false,
  },
  actions: {
    setCheckboxStatus(status: string, checked: boolean) {
      this.checkboxStatus = {
        ...this.checkboxStatus,
        [status]: checked ? !this.checkboxStatus[status] : checked,
      };
    }
  },
});