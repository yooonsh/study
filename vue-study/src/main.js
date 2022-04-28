import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "v-calendar/dist/style.css";
import VCalendar from "v-calendar";
import axios from "axios";

const app = createApp(App);
app.config.globalProperties.$axios = axios;
app.use(store).use(router).use(VCalendar, {}).mount("#app");
