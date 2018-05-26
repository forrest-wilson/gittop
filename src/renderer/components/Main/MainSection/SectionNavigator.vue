<template>
  <nav class="app-column section-navigator window-drag">
    <div class="navigator-icon" @click="setActive('profile')" :class="{ 'active-icon': isActive('profile') }">
      <img class="profile-image" :src="avatarUrl" alt="Avatar">
    </div>
    <div class="navigator-icon" @click="setActive('repos')" :class="{ 'active-icon': isActive('repos') }">
      <i class="fa fa-code"></i>
    </div>
    <div class="navigator-icon bottom" @click="showSettingsModal">
      <i class="fa fa-gear"></i>
    </div>
  </nav>
</template>

<script>
import { EventBus } from '../../event-bus'

export default {
  name: 'SectionNavigator',
  data () {
    return {
      avatarUrl: 'static/images/avatar@2x.png'
    }
  },
  computed: {
    activeNavItem: {
      get () {
        // Returns the vuex store activeNavItem if the property exists, otherwise return 'profile'
        return this.$store.getters.activeNavItem || 'profile'
      },
      set (val) {
        this.$store.commit('CHANGE_ACTIVE_NAV_ITEM', val)
      }
    }
  },
  methods: {
    isActive (menuItem) {
      // Returns a true/false value
      return this.activeNavItem === menuItem
    },
    setActive (menuItem) {
      // This line invokes the set() method on activeNavItem
      this.activeNavItem = menuItem

      // Emits an event with the activeNavItem string
      this.$parent.$emit('main-section-change', this.activeNavItem)
    },
    showSettingsModal () {
      // Sends an event to MainSection.vue
      EventBus.$emit('settings-modal-change', true)
    }
  }
}
</script>
