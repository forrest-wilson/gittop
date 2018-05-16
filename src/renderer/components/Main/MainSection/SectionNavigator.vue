<template>
  <nav class="app-column section-navigator window-drag">
    <div class="navigator-icon" @click="setActive('profile')" :class="{ 'active-nav-item': isActive('profile') }">
      <img class="profile-image" :src="avatarUrl" alt="Avatar">
    </div>
    <div class="navigator-icon" @click="setActive('repos')" :class="{ 'active-nav-item': isActive('repos') }">
      <i class="fa fa-code"></i>
    </div>
    <div class="navigator-icon bottom" @click="showSettingsModal">
      <i class="fa fa-gear"></i>
    </div>
  </nav>
</template>

<script>
import { EventBus } from '../../event-bus'

const settings = require('electron-settings')

export default {
  name: 'SectionNavigator',
  data () {
    return {
      activeNavItem: settings.get('active-nav-item') || 'profile',
      avatarUrl: 'static/images/avatar.png'
    }
  },
  methods: {
    isActive (menuItem) {
      return this.activeNavItem === menuItem
    },
    setActive (menuItem) {
      this.activeNavItem = menuItem

      // Emits an event with the activeNavItem string
      this.$parent.$emit('main-section-change', this.activeNavItem)

      // Sets the 'active-nav-item' property in electron-settings for persistance
      settings.set('active-nav-item', this.activeNavItem)
    },
    showSettingsModal () {
      // Sends an event to MainSection.vue
      EventBus.$emit('settings-modal-change', true)
    }
  }
}
</script>

<style scoped>
  .app-column {
    display: flex;
    flex-direction: column;
  }

  .navigator-icon.bottom {
    align-self: flex-end;
    margin-top: auto;
  }
</style>
