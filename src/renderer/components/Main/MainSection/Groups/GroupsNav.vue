<template>
  <nav class="app-column static nav-bg">
    <section class="repo-section">
      <!-- Section Label -->
      <div class="section-label">
        <label>Groups</label>
      </div>

      <div class="groups">
        <app-group>
          <span class="group-title" slot="groupName">All Repos</span>
        </app-group>
      </div>

      <div class="app-nav-item no-shrink bottom" @click="showAddGroupModalModal">
        <span class="nav-title" style="text-align: center;">+</span>
      </div>
    </section>
  </nav>
</template>

<script>
import Group from './Group/Group.vue'

export default {
  name: 'GroupsNav',
  components: {
    'app-group': Group
  },
  methods: {
    showAddGroupModalModal () {
      this.$parent.$emit('isAddGroupModalActive', true)
    }
  }
}
</script>
