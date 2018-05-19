<template>
  <div class="fit section group-content is-showing" style="position: relative;">
    <app-content></app-content>
  </div>
</template>

<script>
import Repo from './GroupsContent/Repo.vue'
import Content from './GroupsContent/Content.vue'

export default {
  name: 'GroupsContent',
  components: {
    'app-repo': Repo,
    'app-content': Content
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
    }
  }
}
</script>
