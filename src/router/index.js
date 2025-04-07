import { createRouter, createWebHistory } from "vue-router"
import EventsView from "@/views/EventsView.vue"
import AboutView from "@/views/AboutView.vue"
import EventDetailsView from "@/views/EventDetailsView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "events",
      component: EventsView,
    },
    {
      path: "/events/:id",
      name: "event-details",
      component: EventDetailsView,
      props: true,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
  ],
})

export default router
