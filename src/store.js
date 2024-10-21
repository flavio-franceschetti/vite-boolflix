import { reactive } from "vue";

// Importa i CSS delle icone delle bandiere
import "flag-icons/css/flag-icons.min.css";

export const store = reactive({
  api_key: "",
  search: "",
  emptyList: "non c'è nessun risultato...",
  api_MovieEndPoint: "https://api.themoviedb.org/3/search/movie?language=it-IT",
  api_SeriesEndPoint: "https://api.themoviedb.org/3/search/tv?language=it-IT",
  searchedFilms: [],
  searchedTvSeries: [],
  posterUrl: "https://image.tmdb.org/t/p/w342",
});
