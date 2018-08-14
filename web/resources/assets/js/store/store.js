import Vue from 'vue'
import Vuex from 'vuex'

// import builder from './modules/builder'
import crud from './modules/crud'

Vue.use(Vuex)

// = combineReducers in redux
const store = new Vuex.Store({
	// actions,
	modules: {
		crud,
	},
})


export default store