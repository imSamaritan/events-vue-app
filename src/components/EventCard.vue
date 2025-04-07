<script setup>
defineProps({
  event: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <RouterLink class="router-link" :to="{ name: 'event-details', params: { id: event.id } }">
    <div class="card">
      <h2>{{ event.title }}</h2>
      <p>
        <small>@{{ event.time }} on {{ event.date }}</small>
      </p>
    </div>
  </RouterLink>
</template>

<style scoped>
.card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 16px;
  width: 100%;
  text-align: center;
  border: 1px solid #333;
  cursor: pointer;
  transition: all 0.3s ease;
}
.card h2 {
  font-size: 1.5rem;
  margin: 0;
}

.card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-color: #bbb;
  transform: scale(1.02);
}

.router-link {
  text-decoration: none;
  color: #444;
}
</style>
