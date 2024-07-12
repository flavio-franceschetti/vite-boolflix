<script>
import FilmCards from "./FilmCards.vue";
import TvSeriesCard from "./TvSeriesCard.vue";

// importo store in appvue
import { store } from "../store.js";

export default {
  name: "ContentList",
  data() {
    return {
      store,
    };
  },
  components: {
    FilmCards,
    TvSeriesCard,
  },
};
</script>

<template>
  <div class="container">
    <FilmCards />
  </div>
  <div class="container">
    <TvSeriesCard />
  </div>
</template>

<style lang="scss" scoped></style>
