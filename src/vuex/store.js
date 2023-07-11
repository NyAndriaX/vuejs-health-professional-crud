import Vuex from "vuex";
import actions from "@/store/actions";

const store = new Vuex.Store({
	state: {
		tableau: [],
	},
	mutations: {
		SET_TABLEAU(state, tableau) {
			state.tableau = tableau;
		},
	},
	actions,
	getters: {
		tableau: (state) => state.tableau,
	},
});

export default store;
