<script>
// importo store in appvue
import { store } from "../store.js";

export default {
  name: "AppHeader",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <header>
    <input type="text" placeholder="Nome del film..." v-model="store.search" />
    <button @click="$emit('search')">Search</button>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: black;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 20px;
}
</style>
