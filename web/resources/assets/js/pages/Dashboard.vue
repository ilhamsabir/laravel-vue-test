<template>
	<div>
		<h2>Dashbord</h2>
	</div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import { mapActions, mapMutations, mapGetters } from 'vuex'
import { baseUrl, userId, CSRF_TOKEN } from '../utils/library.js'

export default {
	name: 'Dashboard',
	components: {},
	data() {
		return {
			CSRF_TOKEN,
			isLoading: true,
			BASEURL: baseUrl,
		}
	},
	computed: {
		// getters from modules store projects
		// ...mapGetters('workspace', ['projectList']),
		// filteredList() {
		// 	const item = this.projectList.filter(elem => {
		// 		elem.name = elem.name.toLowerCase()
		// 		return elem.name.indexOf(this.searchProject) !== -1
		// 	})
		// 	return item
		// },
	},
	created() {
		// this.initProjectList({
		// 	callback: () => {
		// 		this.isLoading = false
		// 	},
		// })
	},
	methods: {
		// actions from modules <stor></stor>e projects
		// ...mapMutations('workspace', ['setProjectList']),
		// ...mapActions('workspace', ['initProjectList']),
	},
}
</script>

<style scoped></style>
