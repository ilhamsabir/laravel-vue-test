import Vue from 'vue'
import Vuex from 'vuex'

// import builder from './modules/builder'
import news from './modules/news'

Vue.use(Vuex)

// = combineReducers in redux
const store = new Vuex.Store({
	// actions,
	modules: {
		news,
	},
})


export default store