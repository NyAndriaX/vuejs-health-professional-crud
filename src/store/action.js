import axios from "axios";
import { api } from "@/service/api";

const getTableau = async ({ commit }) => {
	try {
		const response = await api.get("/");
		const data = await response.data;
		commit("SET_TABLEAU", data);
	} catch (error) {
		console.error(error);
	}
};

const updateTableau = async (_, item) => {
	try {
		await axios.put(`/${item?.id}`, {
			title: item?.title,
			auhor_id: item?.author.id,
		});
	} catch (error) {
		console.error(error);
	}
};

const deleteTableau = async ({ commit, state }, item) => {
	try {
		await axios.delete(`/${item?.id}`);
		const index = state.tableau.findIndex((element) => element.id === item?.id);
		if (index !== -1) {
			state.tableau.splice(index, 1);
			commit("SET_TABLEAU", state.tableau);
		}
	} catch (error) {
		console.error(error);
	}
};
const postTableau = async ({ commit, state }, name) => {
	try {
		const response = await axios.post(`/`, {
			title: name,
		});

		const newItem = response.data;
		// Ajouter le nouvel élément à votre tableau dans le store
		state.tableau.push(newItem);

		commit("SET_TABLEAU", state.tableau);
	} catch (error) {
		console.error(error);
	}
};

export default {
	getTableau,
	updateTableau,
	deleteTableau,
	postTableau,
};
