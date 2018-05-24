<template>
  <div class="group" @click="setActive(); populateContent();" :class="{ 'selected': isActive }">
    <slot name="groupName"></slot>
    <span class="icon is-small">
      <i class="fa fa-angle-right"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Group',
  props: ['groupInfo'],
  computed: {
    isActive () {
      return this.$store.getters.activeGroup === this.groupInfo.id
    },
    repos () {
      return this.$store.getters.repos
    }
  },
  mounted () {
    if (this.isActive) this.populateContent()
  },
  methods: {
    setActive () {
      this.$store.commit('CHANGE_ACTIVE_GROUP', this.groupInfo.id)
    },
    populateContent () {
      let reposToRender = []

      for (let i = 0; i < this.groupInfo.children.length; i++) {
        let childId = this.groupInfo.children[i]

        for (let j = 0; j < this.repos.length; j++) {
          if (this.repos[j].id === childId) {
            reposToRender.push(this.repos[j])
            break
          }
        }
      }

      this.$store.commit('ACTIVATE_REPOS', reposToRender)
    }
  }
}
</script>
