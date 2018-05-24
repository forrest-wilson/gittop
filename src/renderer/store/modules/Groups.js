import uuid from 'uuid'
import _ from 'lodash'

const state = {
  groups: [
    {
      id: uuid.v4(),
      name: 'All Repos',
      children: []
    }
  ]
}

const mutations = {
  ADD_GROUP (state, payload) {
    const group = {
      id: uuid.v4(),
      name: payload,
      children: []
    }

    state.groups.push(group)
  },
  ADD_CHILDREN (state, { idx, repos }) {
    let repoIds = []

    if (!Array.isArray(repos)) repos = [repos]

    repos.forEach(repo => {
      repoIds.push(repo.id)
    })

    state.groups[idx].children = _.uniq(_.concat(state.groups[idx].children, repoIds))
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
