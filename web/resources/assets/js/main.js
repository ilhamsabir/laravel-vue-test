// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/store.js'
import VuePaginate from 'vue-paginate'
import vueDragAndDropList from 'vue-drag-and-drop-list'
import vuescroll from 'vuescroll'
import vueScrollTo from 'vue-scrollto'
import Notifications from 'vue-notification'
import vSelect from 'vue-select'
import VeeValidate from 'vee-validate'
import VTooltip from 'v-tooltip'
import VueHighcharts from 'vue-highcharts'
import Highcharts from 'highcharts'

// import BootstrapVue from 'bootstrap-vue'


// Vue.use(BootstrapVue)
Vue.use(VueHighcharts, {
	Highcharts
});
Vue.use(VTooltip)
Vue.use(VuePaginate)
Vue.use(vueDragAndDropList)
Vue.use(vuescroll)
Vue.use(vueScrollTo)
Vue.use(Notifications)
Vue.use(VeeValidate)
// Vue.use(VueSweetalert2)

Vue.component('v-select', vSelect)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: {
		App
	},
}).$mount('#app')