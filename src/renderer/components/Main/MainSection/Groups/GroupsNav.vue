<template>
  <nav class="app-column static nav-bg">
    <section class="repo-section">
      <!-- Section Label -->
      <div class="section-label">
        <label>Groups</label>
      </div>

      <div class="groups">
        <div class="group selected" data-request="groupAll">
          <span class="group-title">All Repos</span>
          <span class="icon is-small">
            <i class="fa fa-angle-right"></i>
          </span>
        </div>
      </div>

      <div class="app-nav-item no-shrink bottom" @click="showAddGroupModalModal">
        <span class="nav-title" style="text-align: center;">+</span>
      </div>
    </section>
  </nav>
</template>

<script>
export default {
  name: 'GroupsNav',
  methods: {
    showAddGroupModalModal () {
      this.$parent.$emit('isAddGroupModalActive', true)
    }
  }
}
</script>
