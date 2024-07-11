<script>
import AppHeader from "./components/AppHeader.vue";
import FilmListContent from "./components/FilmListContent.vue";

// importo store in appvue
import { store } from "./store.js";

export default {
  components: {
    AppHeader,
    FilmListContent,
  },
};
</script>

<template>
  <!-- header app -->
  <header>
    <AppHeader />
  </header>
  <!-- main content app -->
  <main>
    <FilmListContent />
  </main>
</template>

<style lang="scss">
@use "./style/general.scss";
</style>
