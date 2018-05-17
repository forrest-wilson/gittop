const state = {
  personalAccessToken: ''
}

const mutations = {
  CHANGE_PERSONAL_ACCESS_TOKEN (state, token) {
    state.personalAccessToken = token
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
