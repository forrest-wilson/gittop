<template>
  <section class="nav-section section" :class="{ 'is-showing': isActive('repos') }">
    <!-- Add Repo to Group Modal Window -->
    <div id="addRepoToGroupModal" class="modal">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="modal-card">
          <div class="modal-card-head" style="background-color: rgb(37, 37, 37); border-bottom: 1px solid #1e1e1e;">
            <p class="modal-card-title" style="color: white;">Please choose a group:</p>
          </div>
          <div id="addRepoToGroupBody" class="modal-card-body" style="background-color: rgb(57, 57, 57);"></div>
          <div class="modal-card-foot" style="background-color: rgb(37, 37, 37); border-top: 1px solid #1e1e1e;">
            <button id="addRepoToGroup" class="button is-success">Add to Group</button>
            <button id="cancelAddRepoToGroup" class="button is-danger">Cancel</button>
          </div>
        </div>
      </div>
    </div>

    <app-groups-nav></app-groups-nav>
    <app-groups-content></app-groups-content>
  </section>
</template>

<script>
import GroupsNav from './Groups/GroupsNav.vue'
import GroupsContent from './Groups/GroupsContent.vue'

export default {
  name: 'Groups',
  props: ['activeNavItem'],
  components: {
    'app-groups-nav': GroupsNav,
    'app-groups-content': GroupsContent
  },
  methods: {
    isActive (item) {
      return this.activeNavItem === item
    }
  }
}
</script>
