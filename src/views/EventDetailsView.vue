<script setup>
import { ref, onMounted } from "vue"
import EventService from "@/services/EventService.js"

const event = ref(null)
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})

onMounted(async () => {
  const response = await EventService.getEvent(props.id)
  event.value = response.data
})
</script>

<template>
  <main v-if="event">
    <div>
      <h2>{{ event.title }}</h2>
      <p>{{ event.description }}</p>
      <p><strong>Location:</strong> {{ event.location }}</p>
      <p>
        <small>@{{ event.time }} on {{ event.date }}</small>
      </p>
    </div>
  </main>
</template>

<style scoped>
main {
  text-align: center;
}
</style>
