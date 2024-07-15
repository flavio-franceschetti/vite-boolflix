<script>
// importo store in appvue
import { store } from "../store.js";

export default {
  name: "AppHeader",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <header>
    <div class="logo">
      <img
        src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
        alt="logo"
      />
    </div>
    <div class="input">
      <input
        @keyup.enter="$emit('search')"
        type="text"
        placeholder="Nome del film..."
        v-model="store.search"
      />
      <button @click="$emit('search')">Search</button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: black;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
}

.logo {
  width: 150px;
}

.input {
  input,
  button {
    height: 30px;
    padding: 5px;
  }

  button {
    background-color: #dc1b27;
    border: none;
    color: #fff;
    cursor: pointer;
  }
}
</style>
