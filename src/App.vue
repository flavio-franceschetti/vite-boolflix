<script>
// importo axios per la chiamata all'API
import axios from "axios";

import AppHeader from "./components/AppHeader.vue";
import FilmListContent from "./components/FilmListContent.vue";

// importo store in app.vue
import { store } from "./store.js";

export default {
  components: {
    AppHeader,
    FilmListContent,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    searchedFilms() {
      let endPoint = `${store.api_endPoint}&api_key=${store.api_key}&query=${store.search}`;
      axios
        .get(endPoint)
        .then(function (response) {
          // handle success
          console.log(response.data.results);
          store.searchedFilms = response.data.results;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    },
  },
};
</script>

<template>
  <!-- header app -->
  <header>
    <AppHeader @search="searchedFilms" />
  </header>
  <!-- main content app -->
  <main>
    <FilmListContent />
  </main>
</template>

<style lang="scss">
@use "./style/general.scss";
</style>
