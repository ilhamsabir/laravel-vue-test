<template>
	<div class="modal" tabindex="-1" role="dialog" 	id="addNewModal">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" v-if="typeForm === 'new'">Create New</h5>
				<h5 class="modal-title" v-else>Edit</h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body">
				<div class="form-group">
					<label for="title">Title</label>
					<input
						type="text"
						class="form-control"
						id="title"
						:class="valid.title.error ? 'input-error' : ''"
						v-model="title"
						@change="onChangeInput('title')">
					<small
						class="form-text"
						:class="valid.title.error ? 'error' : ''"
						v-if="valid.title.error">{{ valid.title.message }}</small>
				</div>
				<div class="form-group">
					<label for="description">Description</label>
					<textarea
						class="form-control"
						v-model="description"
						:class="valid.description.error ? 'input-error' : ''"
						@change="onChangeInput('description')"></textarea>
					<small
						class="form-text"
						:class="valid.description.error ? 'error' : ''"
						v-if="valid.description.error">{{ valid.description.message }}</small>
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
				<button
					type="button"
					class="btn btn-primary"
					v-if="typeForm === 'new'"
					@click="createNew">Save</button>
				<button type="button" class="btn btn-primary" v-else>Update</button>
			</div>
		</div>
	</div>
</div>
</template>
<script>
import { mapActions, mapMutations, mapGetters } from 'vuex'
import bus from '../utils/bus.js'
import { createNews, updateNews } from '../api/api-news.js'

export default {
	name: 'NewsForm',
	props: [''],
	components: {},
	data() {
		return {
			isLoadingCreated: false,
			isError: false,
			projectName: '',
			editorData: '',
			typeForm: 'new',
			title: '',
			description: '',
			valid: {
				title: {
					error: false,
					message: 'This is required',
				},
				description: {
					error: false,
					message: 'This is required',
				},
			},
		}
	},
	created() {},
	updated() {
		this.useNextTick()
	},
	mounted() {
		this.useNextTick()
	},
	computed: {
		...mapGetters('news', ['listNews']),
	},
	methods: {
		// ...mapActions('image', ['initDataImage']),
		...mapMutations('news', ['setListNews']),

		toggleModal(status) {
			bus.$emit('open-modal-add', status)
		},

		initModal() {},

		onChangeInput(type) {
			if (type === 'title') {
				if (this.title !== '') {
					this.valid.title.error = false
				}
			} else {
				if (this.description !== '') {
					this.valid.description.error = false
				}
			}
		},

		// on click save create new
		createNew() {
			let valid
			if (this.title !== '' && this.description !== '') {
				this.valid.title.error = false
				this.valid.description.error = false
				valid = true
			} else if (this.title !== '' && this.description === '') {
				this.valid.title.error = false
				this.valid.description.error = true
				valid = false
			} else if (this.title === '' && this.description !== '') {
				this.valid.title.error = true
				this.valid.description.error = false
				valid = false
			} else {
				this.valid.title.error = true
				this.valid.description.error = true
				valid = true
			}

			if (valid) {
				this.postNew()
			}
		},

		// post to api
		async postNew() {
			const data = {
				title: this.title,
				description: this.description,
			}

			try {
				const response = await createNews(data)

				if (response.data.error === 0) {
					this.successPostNew(response.data.data)
				}
			} catch (err) {}
		},

		successPostNew(data) {
			this.title = ''
			this.description = ''
			this.toggleModal(false)

			const newData = [data, ...this.listNews]

			this.setListNews(newData)
		},

		useNextTick() {
			// Code that will run only after
			// the entire view has been re-rendered
			this.$nextTick(
				function() {
					this.eventBusHandler()
				}.bind(this),
			)
		},

		eventBusHandler() {
			bus.$on('open-modal-add', (status, type, id) => {
				this.typeForm = type
				if (status) {
					$('#addNewModal').modal('show')
					this.initModal()
				} else {
					$('#addNewModal').modal('hide')
				}
			})
		},
	},
}
</script>

<style scoped>
.modal-title {
	color: #333 !important;
}

.form-group {
	text-align: left;
}

.form-group label {
	font-weight: bold;
}
</style>

