<template>
	<div class="modal" tabindex="-1" role="dialog" 	id="deleteModal">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">Delete</h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body">
				<div class="confirm-text">
					Are you sure want to delete this news ?
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
				<button
					type="button"
					class="btn btn-danger"
					@click="submitDelete">Yes</button>
			</div>
		</div>
	</div>
	</div>
</template>
<script>
import { mapActions, mapMutations, mapGetters } from 'vuex'
import bus from '../utils/bus.js'
import { deleteNews } from '../api/api-news.js'

export default {
	name: 'ModalDelete',
	props: [''],
	components: {},
	data() {
		return {
			isLoadingCreated: false,
			isError: false,
			id: '',
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
			bus.$emit('open-modal-delete', status)
		},

		submitDelete() {
			this.processDelete()
		},

		async processDelete() {
			try {
				const response = await deleteNews(this.id)

				if (response.data.error === 0) {
					this.successDelete(response.data.data)
				}
			} catch (error) {}
		},

		successDelete(data) {
			const newData = this.listNews.filter(item => parseInt(item.id) !== parseInt(data))
			this.setListNews(newData)
			this.toggleModal(false)
		},

		useNextTick() {
			this.$nextTick(
				function() {
					this.eventBusHandler()
				}.bind(this),
			)
		},

		eventBusHandler() {
			bus.$on('open-modal-delete', (status, id) => {
				this.id = id
				if (status) {
					$('#deleteModal').modal('show')
				} else {
					$('#deleteModal').modal('hide')
				}
			})
		},
	},
}
</script>
<style scoped>
.modal-footer {
	display: inline-block !important;
	text-align: center;
}

.confirm-text {
	font-size: 18px;
}
</style>


