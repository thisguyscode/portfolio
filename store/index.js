import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    scrolling: false,
    windowWidth: null,
    scrollPosition: null,
    navHeight: null
  },
  mutations: {
    updateScroll: (state) => {
      state.scrolling = !state.scrolling
      state.scrollPosition = window.scrollY
    },
    updateWindowWidth: (state) => {
      state.windowWidth = window.innerWidth
    },
    updateNavHeight: (state, number) => {
      state.navHeight = number
    }
  }
})

export default store
