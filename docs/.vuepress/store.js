import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
	state: {
		currentIndex: 0,
		activeTab: 0,
		activeTab2: 0,
		articleData:null,
	},
	mutations: {
		currentIndex(state,currentIndex){
			state.currentIndex = currentIndex;
		},
		activeTab(state,activeTab){
			state.activeTab = activeTab;
		},
		activeTab2(state,activeTab2){
			state.activeTab2= activeTab2;
		},
		articleData(state,articleData){
			state.articleData = articleData;
		}
	}
})
