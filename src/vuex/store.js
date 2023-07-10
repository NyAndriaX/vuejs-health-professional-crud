import Vuex from "vuex";
import action from "@/store/action";

const store = new Vuex.Store({
	state: {
		tableau: [],
	},
	mutations: {
		SET_TABLEAU(state, tableau) {
			state.tableau = tableau;
		},
	},
	action,
	getters: {
		tableau: (state) => state.tableau,
	},
});

export default store;
