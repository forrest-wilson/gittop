const state = {
  inAppSounds: true
}

const mutations = {
  SET_IN_APP_SOUNDS (state, payload) {
    state.inAppSounds = payload
  }
}

const getters = {
  inAppSounds: state => state.inAppSounds
}

export default {
  state,
  mutations,
  getters
}
