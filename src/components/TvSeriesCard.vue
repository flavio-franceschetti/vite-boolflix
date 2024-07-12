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
  <h2>TV Series List</h2>
  <div class="container">
    <div
      class="series-info"
      v-for="(info, index) in store.searchedTvSeries"
      :key="index"
    >
      <div class="poster">
        <img
          :src="store.posterUrl + info.poster_path"
          :alt="info.original_name"
        />
      </div>
      <!-- titolo della serie -->
      <div>Titolo della serie: {{ info.name }}</div>
      <div>Titolo originale della serie: {{ info.original_name }}</div>

      <!-- Linguaggio della serie -->
      <div>
        Linguaggio originale della serie:
        <span :class="`fi fi-${getFlagCode(info.original_language)}`"></span>
      </div>
      <div>Linguaggio originale della serie: {{ info.original_language }}</div>

      <!-- voto della serie -->
      <div>Voto della serie: {{ info.vote_average }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.poster {
  height: 388px;
  align-content: center;
  img {
    aspect-ratio: 1 / 1.5;
  }
}

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

  .series-info {
    width: calc(100% / 5);
    margin-bottom: 20px;
    text-align: center;
  }
}
</style>
