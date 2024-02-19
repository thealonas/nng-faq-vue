import { defineClientConfig } from '@vuepress/client';
import VueGoodTablePlugin from 'vue-good-table-next';
import 'vue-good-table-next/dist/vue-good-table-next.css';

export default defineClientConfig({
  enhance({ app }) {
    app.use(VueGoodTablePlugin)
  }
})
