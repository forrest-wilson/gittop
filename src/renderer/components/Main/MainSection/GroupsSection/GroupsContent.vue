<template>
  <div class="fit section group-content is-showing" style="position: relative;">
    <div class="inner" style="position: absolute;">
      <header class="content">
        <h1><i class="fa fa-code"></i> All Repositories</h1>
        <p>Below are your repositories</p>
      </header>
      
      <hr>

      <main>
        <app-repo v-for="repo in activeRepos" :key="repo.id">
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

import { EventBus } from '../../../event-bus'

export default {
  name: 'GroupsContent',
  components: {
    'app-repo': Repo
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
