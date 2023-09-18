<template>
  <header @click="headerHandler">
    <h1>More on Vue Components</h1>
  </header>
</template>

<script>
import { useProductStore } from "../store/ProductStore";

export default {
  methods: {
    headerHandler() {
      const store = useProductStore();

      console.log(1, store.$state);
      store.$patch({ id: 2, name: "Hyun" });
      console.log(2, store.$state);
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #14005e;
}

header h1 {
  color: white;
  margin: 0;
}
</style>
