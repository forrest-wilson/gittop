const state = {
  activeNavItem: ''
}

const mutations = {
  CHANGE_ACTIVE_NAV_ITEM (state, navItem) {
    state.activeNavItem = navItem
  }
}

const getters = {
  activeNavItem: state => state.activeNavItem
}

export default {
  state,
  mutations,
  getters
}
