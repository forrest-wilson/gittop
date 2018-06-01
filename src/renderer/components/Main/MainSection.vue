<template>
  <div class="app-columns">
      <app-section-navigator></app-section-navigator>
      <main class="app-column main">
        <app-profile :activeNavItem="activeNavItem"></app-profile>
        <app-groups :activeNavItem="activeNavItem"></app-groups>
        <app-settings v-if="isSettingsModalActive"></app-settings>
        <app-token-modal v-if="isTokenModalActive"></app-token-modal>
        <app-add-group-modal v-if="isAddGroupModalActive"></app-add-group-modal>
        <app-add-repo-to-group-modal v-if="isAddRepoToGroupModalActive"></app-add-repo-to-group-modal>
      </main>
  </div>
</template>

<script>
import SectionNavigator from './MainSection/SectionNavigator.vue'
import ProfileSection from './MainSection/ProfileSection.vue'
import GroupsSection from './MainSection/GroupsSection.vue'
import SettingsModal from './Modals/SettingsModal.vue'
import HowToGetTokenModal from './Modals/HowToGetTokenModal.vue'
import AddGroupModal from './Modals/AddGroupModal.vue'
import AddRepoToGroupModal from './Modals/AddRepoToGroupModal.vue'

import { EventBus } from '../event-bus'

export default {
  name: 'MainSection',
  data () {
    return {
      activeNavItem: this.$store.getters.activeNavItem || 'profile',
      isSettingsModalActive: false,
      isTokenModalActive: false,
      isAddGroupModalActive: false,
      isAddRepoToGroupModalActive: false
    }
  },
  components: {
    'app-section-navigator': SectionNavigator,
    'app-profile': ProfileSection,
    'app-groups': GroupsSection,
    'app-settings': SettingsModal,
    'app-token-modal': HowToGetTokenModal,
    'app-add-group-modal': AddGroupModal,
    'app-add-repo-to-group-modal': AddRepoToGroupModal
  },
  created () {
    this.$on('main-section-change', item => {
      this.activeNavItem = item
    })

    EventBus.$on('settings-modal-change', state => {
      this.isSettingsModalActive = state
    })

    EventBus.$on('token-modal-change', state => {
      this.isTokenModalActive = state
    })

    EventBus.$on('add-group-modal-change', state => {
      this.isAddGroupModalActive = state
    })

    EventBus.$on('add-repo-to-group-modal-change', state => {
      this.isAddRepoToGroupModalActive = state
    })
  }
}
</script>
