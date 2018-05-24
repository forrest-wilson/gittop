const state = {
  activeGroup: undefined
}

const mutations = {
  CHANGE_ACTIVE_GROUP (state, payload) {
    state.activeGroup = payload
  }
}

const getters = {
  activeGroup: state => state.activeGroup
}

export default {
  state,
  mutations,
  getters
}
