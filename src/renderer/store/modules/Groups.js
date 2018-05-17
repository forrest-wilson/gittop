import uuid from 'uuid'

const state = {
  groups: []
}

const mutations = {
  ADD_GROUP (state, payload) {
    const group = {
      id: uuid.v4(),
      name: payload,
      children: []
    }

    state.groups.push(group)
  }
}

const getters = {
  groups: state => state.groups
}

export default {
  state,
  mutations,
  getters
}
