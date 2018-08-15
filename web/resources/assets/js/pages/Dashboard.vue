<template>
	<div>
		<div class="container">
			 <div class="row justify-content-around">
				<div class="col-6">
					<div class="header">
						<div class="text">News</div>
						<div class="action">
							<button class="btn btn-primary" @click="openAddModal(true, 'new')">
								<i class="fa fa-plus-square-o"></i> Add
							</button>
						</div>
					</div>

					<div class="search-content">
						<div class="form-group">
							<input type="text" class="form-control" placeholder="Search...">
						</div>
					</div>

					<div class="card" v-for="item in listNews" :key="item.id">
						<div class="card-body">
							<h5 class="card-title">{{ item.title }}</h5>
							<p class="card-text">{{ item.description }}</p>
						</div>
						<div class="card-footer ">
							<div class="btn-group">
								<button type="button" class="btn btn-sm btn-outline-secondary btn-delete">
									<i class="fa fa-trash"></i> Delete
								</button>
								<button
									type="button"
									class="btn btn-sm btn-outline-secondary btn-edit"
									@click="openAddModal(true, 'edit', item.id)">
									<i class="fa fa-pencil"></i> Edit
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<NewsForm />
	</div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import { mapActions, mapMutations, mapGetters } from 'vuex'
import { baseUrl, userId, CSRF_TOKEN } from '../utils/library.js'
import bus from '../utils/bus.js'
import NewsForm from '../components/NewsForm.vue'

const dummy = [
	{
		id: 1,
		title: 'Lorem Ipsum',
		desc:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eum amet placeat magni, alias, iusto, esse recusandae ab reiciendis ducimus ipsam animi natus exercitationem dolorum asperiores! Similique facilis nostrum maxime?',
	},
	{
		id: 2,
		title: 'Lorem Ipsum',
		desc:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eum amet placeat magni, alias, iusto, esse recusandae ab reiciendis ducimus ipsam animi natus exercitationem dolorum asperiores! Similique facilis nostrum maxime?',
	},
	{
		id: 3,
		title: 'Lorem Ipsum',
		desc:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eum amet placeat magni, alias, iusto, esse recusandae ab reiciendis ducimus ipsam animi natus exercitationem dolorum asperiores! Similique facilis nostrum maxime?',
	},
	{
		id: 4,
		title: 'Lorem Ipsum',
		desc:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eum amet placeat magni, alias, iusto, esse recusandae ab reiciendis ducimus ipsam animi natus exercitationem dolorum asperiores! Similique facilis nostrum maxime?',
	},
	{
		id: 5,
		title: 'Lorem Ipsum',
		desc:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eum amet placeat magni, alias, iusto, esse recusandae ab reiciendis ducimus ipsam animi natus exercitationem dolorum asperiores! Similique facilis nostrum maxime?',
	},
	{
		id: 6,
		title: 'Lorem Ipsum',
		desc:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eum amet placeat magni, alias, iusto, esse recusandae ab reiciendis ducimus ipsam animi natus exercitationem dolorum asperiores! Similique facilis nostrum maxime?',
	},
]

export default {
	name: 'Dashboard',
	components: {
		NewsForm,
	},
	data() {
		return {
			CSRF_TOKEN,
			isLoading: true,
			BASEURL: baseUrl,
			dummy,
		}
	},
	computed: {
		...mapGetters('news', ['listNews']),

		// filteredList() {
		// 	const item = this.projectList.filter(elem => {
		// 		elem.name = elem.name.toLowerCase()
		// 		return elem.name.indexOf(this.searchProject) !== -1
		// 	})
		// 	return item
		// },
	},
	created() {
		this.initFecthData()
	},
	methods: {
		// actions from modules <stor></stor>e projects
		...mapMutations('news', ['setListNews']),
		...mapActions('news', ['initFecthData']),

		openAddModal(status, type, id) {
			bus.$emit('open-modal-add', status, type, id)
		},
	},
}
</script>

<style scoped>
.header {
	display: flex;
	flex-grow: 1;
	margin-bottom: 1rem;
}

.text {
	flex: 1;
	text-align: left;
	font-size: 30px;
	font-weight: bold;
}

.action {
	flex: 1 1 30%;
	float: right;
	text-align: right;
}

.search-content {
	margin-bottom: 1rem;
	padding: 1rem;
	background-color: #fff;
	background-clip: border-box;
	border: 1px solid rgba(0, 0, 0, 0.125);
	border-radius: 0.25rem;
}

.card {
	margin-bottom: 1rem;
}

.card-body {
	text-align: left;
}

.card-footer {
	padding: 0.75rem 1.25rem;
	background-color: #fff;
	border-top: 0px solid rgba(0, 0, 0, 0.125);
	text-align: right;
}

.form-group {
	margin-bottom: 0 !important;
}

.btn-edit:focus,
.btn-edit:hover {
	color: #fff;
	background-color: #f0ad4e;
	border-color: #eea236;
}

.btn-delete:focus,
.btn-delete:hover {
	color: #fff;
	background-color: #d9534f;
	border-color: #d43f3a;
}

.card-title {
	text-transform: capitalize;
}
</style>
