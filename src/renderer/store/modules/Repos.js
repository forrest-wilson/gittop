const octokit = require('@octokit/rest')()

const state = {
  repos: []
}

const mutations = {
  ADD_REPOS (state, repos) {
    state.repos = repos
  }
}

const actions = {
  async PAGINATE ({ commit }, { method, options }) {
    let res = await method(options)
    let { data } = res

    while (octokit.hasNextPage(res)) {
      res = await octokit.getNextPage(res)
      data = data.concat(res.data)
    }

    return data
  },
  async REQUEST_REPOS ({ commit, dispatch }) {
    if (this.getters.personalAccessToken) {
      octokit.authenticate({
        type: 'token',
        token: this.getters.personalAccessToken
      })

      dispatch('PAGINATE', { method: octokit.repos.getAll, options: { per_page: 100 } }).then(repos => {
        commit('ADD_REPOS', repos)
      }, err => {
        // Unhandled error. Currently fails silently
        throw new Error(JSON.parse(err).message)
      })
    }
  }
}

const getters = {
  repos: state => state.repos
}

export default {
  state,
  mutations,
  actions,
  getters
}
