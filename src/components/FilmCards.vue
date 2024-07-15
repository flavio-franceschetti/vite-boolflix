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

    vote(vote) {
      return Math.round(vote / 2);
    },
  },
};
</script>

<template>
  <h2>Film List</h2>
  <div class="container">
    <div class="empty-list">{{ store.emptyList }}</div>
    <div
      class="films"
      v-for="(info, index) in store.searchedFilms"
      :key="index"
    >
      <div class="poster">
        <img :src="store.posterUrl + info.poster_path" :alt="info.title" />
      </div>
      <div class="film-info">
        <!-- titolo del film -->
        <div><b>Titolo del film:</b> {{ info.title }}</div>
        <div><b>Titolo originale del film:</b> {{ info.original_title }}</div>

        <!-- Linguaggio del film -->
        <div>
          <b>Linguaggio originale del film: </b>
          <span :class="`fi fi-${getFlagCode(info.original_language)}`"></span>
        </div>
        <!-- <div>Linguaggio originale del film: {{ info.original_language }}</div> -->

        <!-- voto del film -->
        <!-- <div>Voto del film: {{ this.vote(info.vote_average) }}</div> -->
        <div class="star-rate">
          <i
            v-for="i in 5"
            :key="i"
            class="fa-star"
            :class="
              this.vote(info.vote_average) >= i ? 'fa-solid' : 'fa-regular'
            "
          ></i>
        </div>

        <div><b>Overview:</b> {{ info.overview }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.empty-list {
  color: #fff;
  font-size: 25px;
}

.poster {
  align-content: center;
  height: 100%;
  width: 100%;
  img {
    height: 100%;
    width: 100%;
  }
}

h2 {
  color: #fff;
  margin: 30px;
  text-transform: uppercase;
}

.container {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 90%;
  margin: 20px auto;

  .films {
    width: calc(100% / 5);
    height: 500px;
    margin-bottom: 20px;
    cursor: pointer;
  }
}

.film-info {
  background-color: rgb(76, 76, 76);
  padding: 30px 20px;
  color: #fff;
  height: 100%;
  width: 100%;
  display: none;
  align-content: center;
  overflow-y: scroll;
  // hide scroll bar
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  div {
    margin-bottom: 5px;
  }
}

.film-info::-webkit-scrollbar {
  display: none;
}

.poster {
  display: block;
}

.films:hover .film-info {
  display: block;
}

.films:hover .poster {
  display: none;
}

.fa-solid {
  color: #f7bb15;
}

.star-rate {
  text-align: center;
}
</style>
