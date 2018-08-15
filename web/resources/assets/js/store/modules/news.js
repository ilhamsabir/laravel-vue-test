import {
	requestApinews
} from '../../api/api-news.js'

// identify state
const state = {
	listNews: [],
}

// action request init block el
const initFecthData = async ({
	commit
}) => {
	try {

		const response = await requestApinews()

		if (response.data.error === 0) {
			commit('setListNews', response.data.data)
		}

	} catch (e) {
		throw e
	}
}


// defined actions
const actions = {
	initFecthData,
}

const getters = {
	listNews: state => state.listNews,
}

// modify state in store
const mutations = {
	setListNews(state, value) {
		state.listNews = value
	},

}

export default {
	state,
	mutations,
	actions,
	getters,
	namespaced: true,
}