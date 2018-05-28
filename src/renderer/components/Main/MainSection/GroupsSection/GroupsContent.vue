<template>
  <div class="app-column fit group-content is-showing">
    <app-utilities-bar></app-utilities-bar>
    <div style="overflow-y: auto;">
      <div class="inner">
        <main v-if="token">
          <div class="inner no-content" v-if="matchingRepos.length === 0 && activeRepos.length >= 1">
            <div class="content">
              <h1 class="has-text-centered">No results!</h1>
              <p class="has-text-centered">There aren't any repos that match your search!</p>
            </div>
          </div>

          <app-repo v-else v-for="repo in matchingRepos" :key="repo.id" :searchTerm="searchTerm" :repo="repo">
            <template slot="name">{{ repo.name }}</template>
            <template slot="visibility" v-if="repo.private"><small class="repo-attribute">PRIVATE</small></template>
            <template slot="language">{{ repo.language }}</template>
          </app-repo>

          <div class="inner no-content" v-if="activeRepos.length === 0">
            <div class="content">
              <h1 class="has-text-centered">No Repos!</h1>
              <p class="has-text-centered">There aren't any repos in this group!</p>
            </div>
          </div>
        </main>

        <div class="inner no-content" v-if="!token">
          <div class="content">
            <h1 class="has-text-centered">Hey there!</h1>
            <p class="has-text-centered">If you want to manage your GitHub repos, <a @click="showHowToGetTokenModal">get a personal access token</a> on GitHub and paste it into <a @click="showSettings">Settings</a>.</p>
          </div>
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
    activeRepos () {
      return this.$store.getters.activeRepos
    },
    matchingRepos () {
      let match = []

      this.activeRepos.filter(el => {
        if (el.name.toLowerCase().includes(this.searchTerm.toLowerCase())) match.push(el)
      })

      return match
    }
  },
  watch: {
    token () {
      this.fetchRepos()
    }
  },
  mounted () {
    this.fetchRepos()
    this.$on('search-term-updated', searchTerm => {
      this.searchTerm = searchTerm
    })
  },
  methods: {
    fetchRepos () {
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
