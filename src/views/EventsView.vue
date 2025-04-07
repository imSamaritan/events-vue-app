<script setup>
import { ref, onMounted } from "vue"
import EventService from "@/services/EventService.js"
import EventCard from "@/components/EventCard.vue"

const events = ref(null)

onMounted(async () => {
  const response = await EventService.getEvents()
  events.value = response.data
})
</script>

<template>
  <main>
    <div v-if="events">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
    </div>
  </main>
</template>
