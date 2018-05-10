<template>
  <div class="app-columns">
      <app-section-navigator></app-section-navigator>
      <main class="app-column main">
        <app-profile :activeNavItem="activeNavItem"></app-profile>
        <app-groups :activeNavItem="activeNavItem"></app-groups>
      </main>
  </div>
</template>

<script>
import SectionNavigator from './MainSection/SectionNavigator.vue'
import Profile from './MainSection/Profile.vue'
import Groups from './MainSection/Groups'
import { EventBus } from '../event-bus'

const settings = require('electron-settings')

export default {
  name: 'MainSection',
  data () {
    return {
      activeNavItem: settings.get('active-nav-item') || 'profile'
    }
  },
  components: {
    'app-section-navigator': SectionNavigator,
    'app-profile': Profile,
    'app-groups': Groups
  },
  created () {
    EventBus.$on('main-section-change', item => {
      this.activeNavItem = item
    })
  }
}
</script>
