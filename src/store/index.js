import axios from "axios"
import { createStore } from 'vuex'

export default createStore({
  state: {
    paginator: {},
    items: []
  },
  mutations: {

    updateData(state, data) {
      state.paginator = data.info;
      state.items = data.results;
    },
  },
  actions: {

    async getData({ commit }, { name, status, species, gender, location, page }) {
      const url = "https://rickandmortyapi.com/api/character"
      try {
        const { data } = await axios.get(url, {
          params: {
            name,
            status,
            species,
            gender,
            location,
            page,
          },
        });

        commit("updateData", data)

      } catch (error) {
        console.log(error);


      }
    }
  },
  modules: {
  }
})
