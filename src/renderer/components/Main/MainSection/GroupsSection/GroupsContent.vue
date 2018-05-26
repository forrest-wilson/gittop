<template>
  <div class="app-column fit group-content is-showing">
    <div class="inner">
      <main v-if="token">
        <app-utilities-bar></app-utilities-bar>
        <app-repo v-for="repo in activeRepos" :key="repo.id" :searchTerm="searchTerm" :name="repo.name">
          <template slot="name">{{ repo.name }}</template>
          <template slot="visibility" v-if="repo.private"><small class="repo-attr">PRIVATE</small></template>
          <template slot="language">{{ repo.language }}</template>
        </app-repo>
      </main>

      <div class="inner no-content" v-if="!token">
        <div class="content">
          <h1 class="has-text-centered">Hey there!</h1>
          <p class="has-text-centered">If you want to manage your GitHub repos, <a @click="showHowToGetTokenModal">get a personal access token</a> on GitHub and paste it into <a @click="showSettings">Settings</a>.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Repo from './GroupsContent/Repo.vue'
import UtilitiesBar from './GroupsContent/UtilitiesBar.vue'

import { EventBus } from '../../../event-bus'

export default {
  name: 'GroupsContent',
  components: {
    'app-repo': Repo,
    'app-utilities-bar': UtilitiesBar
  },
  data () {
    return {
      searchTerm: ''
    }
  },
  computed: {
    token () {
      return this.$store.getters.personalAccessToken
    },
    groups () {
      return this.$store.getters.groups
    },
    repos () {
      return this.$store.getters.repos
    },
    activeRepos () {
      return this.$store.getters.activeRepos
    }
  },
  watch: {
    token () {
      this.getRepos()
    }
  },
  mounted () {
    this.getRepos()
    this.$on('search-term-updated', searchTerm => {
      this.searchTerm = searchTerm
    })
  },
  methods: {
    getRepos () {
      this.$store.dispatch('REQUEST_REPOS')
    },
    showSettings () {
      EventBus.$emit('settings-modal-change', true)
    },
    showHowToGetTokenModal () {
      EventBus.$emit('token-modal-change', true)
    }
  }
}
</script>
