const state = {
  personalAccessToken: ''
}

const mutations = {
  CHANGE_PERSONAL_ACCESS_TOKEN (state, payload) {
    state.personalAccessToken = payload
  }
}

const getters = {
  personalAccessToken: state => state.personalAccessToken
}

export default {
  state,
  mutations,
  getters
}
