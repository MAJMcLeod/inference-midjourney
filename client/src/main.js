// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import { createApp } from 'vue';

import router from './router';
import store from './store';

import api from './services/api';

// Mixins

import { _getPathAPI } from './utils/helpers';

import App from './App.vue';

const app = createApp(App);

app.config.globalProperties.$http = api;

// console.log(app.config.globalProperties);

app.mixin({
  methods: { _getPathAPI },
});

const vuetify = createVuetify({
  theme: {
      defaultTheme: 'dark'
    },
  components,
  directives
});

app.use(store).use(vuetify).use(router)
  .mount('#app');
