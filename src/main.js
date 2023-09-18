import { createApp } from "vue";

import App from "./App.vue";
import BaseBadge from "./components/BaseBadge.vue";
import BadgeCard from "./components/BadgeCard.vue";
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();

app.component("base-badge", BaseBadge);
app.component("badge-card", BadgeCard);

app.use(pinia);
app.mount("#app");
