import Vue from 'vue'
import App from './App.vue'
import Ricardo from './Ricardo.vue'
import "./assets/styles/tailwind.css";

Vue.config.productionTip = false
Vue.config.ignoredElements = [
  "df-messenger"
]


// Routes
const routes = {
  '/': App,
  '/ricardo': Ricardo
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || App
    }
  },
  render (h) { return h(this.ViewComponent) }
}).$mount('#app')
