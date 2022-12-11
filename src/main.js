import { createApp } from "vue";
import { createPinia } from 'pinia'
import App from "./App.vue";

const pinia = createPinia()
const app = createApp(App)

import "./assets/base.css";

app.use(pinia)
app.mount("#app")
