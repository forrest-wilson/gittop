<template>
  <div class="repo content">
    <div class="details">
      <h2 class="repo-name"><slot name="name"></slot><slot name="visibility"></slot></h2>
      <span><slot name="language"></slot></span>
    </div>
    <div class="actions">
      <button class="button is-success clone-button">Clone Repo</button>
      <div class="options-dropdown dropdown is-right" style="margin-left: 15px" :class="{ 'is-active': isDropdownShowing }">
        <div class="dropdown-trigger" style="display: flex; align-items: center;">
          <button class="button" @click="isDropdownShowing = !isDropdownShowing">
            <span class="icon is-small">
              <i class="fa fa-angle-down"></i>
            </span>
          </button>
        </div>
        <div class="dropdown-menu">
          <div class="dropdown-content">
            <a class="dropdown-item open-add-repo-to-group-modal">Add Repo to Group</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Repo',
  props: ['repo'],
  data () {
    return {
      repoInfo: this.repo,
      isDropdownShowing: false
    }
  }
}
</script>
