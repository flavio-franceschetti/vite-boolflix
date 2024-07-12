<script>
// importo store in appvue
import { store } from "../store.js";

export default {
  name: "TvSeriesCard",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="series-info"></div>
  </div>
</template>

<style lang="scss" scoped></style>
