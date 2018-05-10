<template>
  <nav class="app-column section-navigator window-drag">
    <div class="navigator-icon" @click="setActive('profile')" :class="{ 'active-nav-item': isActive('profile') }">
      <img id="profileImage" class="profile-image" src="/static/images/avatar.png" alt="Avatar">
    </div>
    <div class="navigator-icon" @click="setActive('repos')" :class="{ 'active-nav-item': isActive('repos') }">
      <i class="fa fa-code"></i>
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
      activeNavItem: settings.get('active-nav-item') || 'profile'
    }
  },
  methods: {
    isActive (menuItem) {
      return this.activeNavItem === menuItem
    },
    setActive (menuItem) {
      this.activeNavItem = menuItem

      // Emits an event with the activeNavItem string
      EventBus.$emit('main-section-change', this.activeNavItem)

      // Sets the 'active-nav-item' property in electron-settings for persistance
      settings.set('active-nav-item', this.activeNavItem)
    }
  }
}
</script>
