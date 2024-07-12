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
  <div>
    <h2>Film List</h2>
    <FilmCards />
  </div>
  <div>
    <h2>TV Series List</h2>
    <TvSeriesCard />
  </div>
</template>

<style lang="scss" scoped></style>
