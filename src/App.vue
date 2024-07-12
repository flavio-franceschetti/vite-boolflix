<script>
// importo axios per la chiamata all'API
import axios from "axios";

import AppHeader from "./components/AppHeader.vue";
import ContentList from "./components/ContentList.vue";

// importo store in app.vue
import { store } from "./store.js";

export default {
  components: {
    AppHeader,
    ContentList,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    searchedFilms() {
      let endPoint = `${store.api_MovieEndPoint}&api_key=${store.api_key}&query=${store.search}`;
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

    searchedTvSeries() {
      let endPoint = `${store.api_SeriesEndPoint}&api_key=${store.api_key}&query=${store.search}`;
      axios
        .get(endPoint)
        .then(function (response) {
          // handle success
          console.log(response.data.results);
          store.searchedTvSeries = response.data.results;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    },
    // funzione per richiamare sia film che serie tv con lo stesso click
    globalSearch() {
      this.searchedFilms();
      this.searchedTvSeries();
    },
  },
};
</script>

<template>
  <!-- header app -->
  <header>
    <AppHeader @search="globalSearch" />
  </header>
  <!-- main content app -->
  <main>
    <ContentList />
  </main>
</template>

<style lang="scss">
@use "./style/general.scss";
</style>
