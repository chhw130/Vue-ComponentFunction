import { defineStore } from "pinia";

const data = { id: 1, name: "carousel" };

export const useProductStore = defineStore("ProductStore", {
  state: () => {
    return {
      data,
    };
  },
});
