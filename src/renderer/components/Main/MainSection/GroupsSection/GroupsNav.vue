<template>
  <nav class="app-column static nav-bg">
    <section class="repo-section">
      <!-- Section Label -->
      <div class="section-label">
        <label>Groups</label>
      </div>

      <div class="groups">
        <app-group v-for="group in groups" :key="group.id">
          <span class="group-title" slot="groupName">{{ group.name }}</span>
        </app-group>
      </div>

      <div class="app-nav-item no-shrink bottom" @click="showAddGroupModalModal">
        <span class="nav-title has-text-centered">+</span>
      </div>
    </section>
  </nav>
</template>

<script>
import Group from './GroupsNav/Group.vue'

import { EventBus } from '../../../event-bus'

export default {
  name: 'GroupsNav',
  components: {
    'app-group': Group
  },
  computed: {
    groups () {
      return this.$store.getters.groups
    }
  },
  methods: {
    showAddGroupModalModal () {
      EventBus.$emit('add-group-modal-change', true)
    }
  }
}
</script>
