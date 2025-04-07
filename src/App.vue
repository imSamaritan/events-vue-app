<script setup>
import { RouterLink, RouterView } from "vue-router"
</script>

<template>
  <header>
    <nav>
      <RouterLink :to="{ name: 'events' }">Events</RouterLink>
      |
      <RouterLink :to="{ name: 'about' }">About</RouterLink>
    </nav>
  </header>

  <main><RouterView /></main>
</template>

<style scoped>
main {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}

header {
  padding: 1.2rem 18%;
  box-sizing: border-box;
  margin: 0;
  margin-bottom: 2.5rem;
  background-color: #f8f8f8;
  border-bottom: 1px solid #eaeaea;
}

nav {
  display: flex;
  justify-content: center;
  gap: 0.85rem;
  font-size: 1.1rem;
}

nav a {
  text-decoration: none;
  color: #0070f3;
}

@media (max-width: 755px) {
  main {
    width: 100%;
    margin: 0 auto;
  }
}
</style>
