import Vuex from "vuex";
import axios from "axios";

const store = new Vuex.Store({
	state: {
		tableau: [],
	},
	mutations: {
		SET_TABLEAU(state, tableau) {
			state.tableau = tableau;
		},
	},
	actions: {
		async getTableau({ commit }) {
			try {
				const response = await axios.get("http://localhost:8000/api/book/");
				const data = await response.data;
				commit("SET_TABLEAU", data);
			} catch (error) {
				console.error(error);
			}
		},

		async updateTableau(_, item) {
			try {
				await axios.put(`http://localhost:8000/api/book/${item?.id}`, {
					title: item?.title,
					auhor_id: item?.author.id,
				});
			} catch (error) {
				console.error(error);
			}
		},

		async deleteTableau({ commit, state }, item) {
			try {
				await axios.delete(`http://localhost:8000/api/book/${item?.id}`);
				const index = state.tableau.findIndex(
					(element) => element.id === item?.id
				);
				if (index !== -1) {
					state.tableau.splice(index, 1);
					commit("SET_TABLEAU", state.tableau);
				}
			} catch (error) {
				console.error(error);
			}
		},
		async postTableau({ commit, state }, name) {
			try {
				const response = await axios.post(`http://localhost:8000/api/book/`, {
					title: name,
				});

				const newItem = response.data;
				// Ajouter le nouvel élément à votre tableau dans le store
				state.tableau.push(newItem);

				commit("SET_TABLEAU", state.tableau);
			} catch (error) {
				console.error(error);
			}
		},
	},
	getters: {
		tableau: (state) => state.tableau,
	},
});

export default store;
