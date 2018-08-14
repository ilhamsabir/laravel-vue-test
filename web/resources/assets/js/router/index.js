import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../pages/Dashboard.vue'

Vue.use(VueRouter)

// const router = new Router({
const router = new VueRouter({
	// mode: 'history',
	routes: [{
			path: '/',
			name: 'Dashboard',
			component: Dashboard,
		},

		// {
		// 	path: '/builder/:id',
		// 	name: 'Builder',
		// 	component: Builder,
		// },

	],
})

export default router