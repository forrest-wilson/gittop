<template>
  <section class="nav-section section" :class="{ 'is-showing': isActive('repos') }">
    <!-- Add Group Modal Window -->
    <app-add-group-modal :isActive="isAddGroupModalActive"></app-add-group-modal>

    <!-- Add Repo to Group Modal Window -->
    <div id="addRepoToGroupModal" class="modal">
      <div class="modal-background"></div>
      <div class="modal-content">
        <!-- Any other Bulma elements you want -->
        <div class="modal-card">
          <div class="modal-card-head" style="background-color: rgb(37, 37, 37); border-bottom: 1px solid #1e1e1e;">
              <p class="modal-card-title" style="color: white;">Please choose a group:</p>
          </div>
          <div id="addRepoToGroupBody" class="modal-card-body" style="background-color: rgb(57, 57, 57);"></div>
          <div class="modal-card-foot" style="background-color: rgb(37, 37, 37); border-top: 1px solid #1e1e1e;">
            <button id="addRepoToGroup" class="button is-success">Add to Group</button>
            <button id="cancelAddRepoToGroup" class="button is-danger">Cancel</button>
          </div>
        </div>
      </div>
    </div>

    <app-groups-nav></app-groups-nav>

    <div class="app-repo-groups" style="position: relative; width: 100%;">
      <div class="fit section group-content is-showing">
        <div class="inner" v-if="groups">
          <header class="content">
            <h1><i class="fa fa-code"></i> All Repositories</h1>
            <p>Below are your repositories</p>
          </header>
          <hr>
          <main id="reposWrapper"></main>
        </div>

        <div class="inner no-content" v-else>
          <div class="content">
            <h1 class="has-text-centered">Hey there!</h1>
            <p class="has-text-centered">If you want to manage your GitHub repos, <a @click="showHowToGetTokenModal">get a personal access token</a> on GitHub and paste it into <a @click="showSettings">Settings</a>.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import GroupsNav from './Groups/GroupsNav.vue'
import AddGroupModal from './Modals/AddGroupModal.vue'

const settings = require('electron-settings')
// const store = require('electron-store')
const octokit = require('@octokit/rest')()

export default {
  name: 'Groups',
  props: ['activeNavItem'],
  components: {
    'app-groups-nav': GroupsNav,
    'app-add-group-modal': AddGroupModal
  },
  created () {
    // Event listeners
    this.$on('isAddGroupModalActive', state => {
      this.isAddGroupModalActive = state
    })
  },
  mounted () {
    let token = settings.get('personalAccessToken')

    // Access token logic
    if (token) {
      octokit.authenticate({
        type: 'token',
        token: token
      })

      octokit.repos.getAll({visibility: 'all', per_page: 100, page: 1}).then(repos => {
        console.log(repos)
      })
    }
  },
  data () {
    return {
      isAddGroupModalActive: false,
      groups: settings.get('groups')
    }
  },
  methods: {
    isActive (item) {
      return this.activeNavItem === item
    },
    showSettings () {
      this.$parent.$emit('settings-modal-change', true)
    },
    showHowToGetTokenModal () {
      this.$parent.$emit('token-modal-change', true)
    }
  }
}
</script>

<style lang="sass" scoped>
  .no-content
    display: flex
    align-items: center
    justify-content: center

    .content
      max-width: 400px
</style>
