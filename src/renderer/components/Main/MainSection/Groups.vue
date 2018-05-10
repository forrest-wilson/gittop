<template>
  <section id="repositoriesSection" class="nav-section section" :class="{ 'is-showing': isActive('repos') }">
    <!-- Add Group Modal Window -->
    <div id="addGroupModal" class="add-group-modal">
      <div class="field">
        <div class="control">
          <input id="groupNameInput" class="input" type="text" placeholder="Group name">
        </div>
        <p id="newGroupError" class="help is-danger"></p>
      </div>
      <div class="field">
        <div class="control">
          <button id="addGroup" class="button is-success">Create Group</button>
          <button id="cancelAddGroup" class="button is-danger">Cancel</button>
        </div>
      </div>
    </div>

    <!-- Add Repo to Group Modal Window -->
    <div id="addRepoToGroupModal" class="modal">
      <div class="modal-background"></div>
      <div class="modal-content">
        <!-- Any other Bulma elements you want -->
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

    <div class="app-repo-groups" style="position: relative; width: 100%;">
      <div id="groupAll" class="fit section group-content is-showing">
        <div class="inner">
          <header class="content">
            <h1><i class="fa fa-code"></i> All Repositories</h1>
            <p>Below are your repositories</p>
          </header>
          <hr>
          <main id="reposWrapper"></main>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import GroupsNav from './Groups/GroupsNav.vue'

export default {
  name: 'Groups',
  props: ['activeNavItem'],
  components: {
    'app-groups-nav': GroupsNav
  },
  methods: {
    isActive (item) {
      return this.activeNavItem === item
    }
  }
}
</script>
