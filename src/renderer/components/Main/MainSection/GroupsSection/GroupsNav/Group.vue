<template>
  <div class="group" @click="setActive" :class="{ 'selected': activeGroup }">
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
    activeGroup () {
      return this.$store.getters.activeGroup === this.groupInfo.id
    }
  },
  methods: {
    setActive () {
      this.$store.commit('CHANGE_ACTIVE_GROUP', this.groupInfo.id)
    }
  }
}
</script>
