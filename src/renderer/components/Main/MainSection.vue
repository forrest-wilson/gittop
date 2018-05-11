<template>
  <div class="app-columns">
      <app-section-navigator></app-section-navigator>
      <main class="app-column main">
        <app-profile :activeNavItem="activeNavItem"></app-profile>
        <app-groups :activeNavItem="activeNavItem"></app-groups>
        <app-settings v-if="isSettingsModalActive"></app-settings>
        <app-token-modal v-if="isTokenModalActive"></app-token-modal>
      </main>
  </div>
</template>

<script>
import SectionNavigator from './MainSection/SectionNavigator.vue'
import Profile from './MainSection/Profile.vue'
import Groups from './MainSection/Groups.vue'
import Settings from './MainSection/Settings.vue'
import HowToGetTokenModal from './MainSection/HowToGetTokenModal.vue'

const settings = require('electron-settings')

export default {
  name: 'MainSection',
  data () {
    return {
      activeNavItem: settings.get('active-nav-item') || 'profile',
      isSettingsModalActive: false,
      isTokenModalActive: false
    }
  },
  components: {
    'app-section-navigator': SectionNavigator,
    'app-profile': Profile,
    'app-groups': Groups,
    'app-settings': Settings,
    'app-token-modal': HowToGetTokenModal
  },
  created () {
    this.$on('main-section-change', item => {
      this.activeNavItem = item
    })

    this.$on('settings-modal-change', state => {
      this.isSettingsModalActive = state
    })

    this.$on('token-modal-change', state => {
      this.isTokenModalActive = state
    })
  }
}
</script>
