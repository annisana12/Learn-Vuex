import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    counter: 0,
    colorCode: ""
  },
  getters: {
    counterSquared(state) {
      return state.counter ** 2
    }
  },
  mutations: {
    decreaseCounter(state, payload) {
      state.counter -= payload
    },
    increaseCounter(state, payload) {
      state.counter += payload
    },
    setColorCode(state, payload) {
      state.colorCode = payload
    }
  },
  actions: {
    increaseCounter({ commit }) {
      axios.get('https://www.random.org/integers/?num=1&min=1&max=9&col=1&base=10&format=plain&rnd=new')
        .then(response => {
          commit('increaseCounter', response.data)
        }).catch(error => {
          console.log('Failed to fetch random integer generator API')
        })
    },
    decreaseCounter({ commit }) {
      axios.get('https://www.random.org/integers/?num=1&min=1&max=9&col=1&base=10&format=plain&rnd=new')
        .then(response => {
          commit('decreaseCounter', response.data)
        }).catch(error => {
          console.log('Failed to fetch random integer generator API')
        })
    },
    setColorCode({ commit }, newColor) {
      commit('setColorCode', newColor)
    }
  },
  modules: {
  }
})
