<script>
// importo store in appvue
import { store } from "../store.js";

export default {
  name: "FilmCards",
  data() {
    return {
      store,
    };
  },
  methods: {
    getFlagCode(language) {
      // `flag-icons` usa il formato "us" per gli Stati Uniti invece di "en"
      // quindi mappiamo correttamente le lingue ai codici delle bandiere
      const languageMap = {
        en: "us",
        ko: "kr",
        // Aggiungi altre mappature se necessario
      };
      return languageMap[language] || language;
    },
  },
};
</script>

<template>
  <h2>Film List</h2>
  <div class="container">
    <div
      class="film-info"
      v-for="(info, index) in store.searchedFilms"
      :key="index"
    >
      <!-- titolo del film -->
      <div>Titolo del film: {{ info.title }}</div>
      <div>Titolo originale del film: {{ info.original_title }}</div>

      <!-- Linguaggio del film -->
      <div>
        Linguaggio originale del film:
        <span :class="`fi fi-${getFlagCode(info.original_language)}`"></span>
      </div>
      <div>Linguaggio originale del film: {{ info.original_language }}</div>

      <!-- voto del film -->
      <div>Voto del film: {{ info.vote_average }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  margin: 30px;
  text-transform: uppercase;
}

.container {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 20px auto;

  .film-info {
    width: calc(100% / 5);
    margin-bottom: 20px;
    text-align: center;
  }
}
</style>
