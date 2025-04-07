import axios from "axios"

const BASE_URL = "https://my-json-server.typicode.com/imsamaritan/intro-to-vue3"

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})

export default {
  async getEvents() {
    return await api.get("/events")
  },
  async getEvent(id) {
    return await api.get("/events/" + id)
  },
}
