import { reactive } from "vue";

// Importa i CSS delle icone delle bandiere
import "flag-icons/css/flag-icons.min.css";

export const store = reactive({
  api_key: "0d45d000208b6b8d8d6aaa02a6ab41ad",
  search: "",
  api_endPoint: "https://api.themoviedb.org/3/search/movie?language=it-IT",
  searchedFilms: [],
});
