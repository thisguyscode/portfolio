import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    scrolling: false,
    scrollPosition: null
  },
  mutations: {
    updateScroll: (state) => {
      state.scrolling = !state.scrolling
      state.scrollPosition = window.scrollY
    }
  }
})

export default store
