import {
	requestDataApi
} from './../../api/api-crud.js'

// identify state
const state = {
	listData: [],
}

// action request init block el
const initFecthData = async ({
	commit
}) => {
	try {
		// const host = Helper.useHost()

		// const url = `${host}/api/block-element`

		// const response = await fetchBlockElementData(url)

		// if (response.data.error === 0) {
		// 	// commit to load in mutatios
		// }
		commit('setBlockElement', [])

	} catch (e) {
		throw e
	}
}


// defined actions
const actions = {
	initFecthData,
}

const getters = {
	listData: state => state.listData,
}

// modify state in store
const mutations = {
	setListData(state, value) {
		state.listData = value
	},

}

export default {
	state,
	mutations,
	actions,
	getters,
	namespaced: true,
}