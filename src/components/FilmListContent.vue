<script>
import FilmCards from "./FilmCards.vue";

// importo store in appvue
import { store } from "../store.js";

export default {
  name: "FilmListContent",
  data() {
    return {
      store,
    };
  },
  components: {
    FilmCards,
  },
};
</script>

<template>
  <FilmCards />
</template>

<style lang="scss" scoped></style>
