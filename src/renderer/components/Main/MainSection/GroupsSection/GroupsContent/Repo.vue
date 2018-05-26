<template>
  <div class="repo content" v-if="isSearched()">
    <div class="details">
      <h2 class="repo-name"><slot name="name"></slot><slot name="visibility"></slot></h2>
      <span><slot name="language"></slot></span>
    </div>
    <div class="actions">
      <button class="button is-success clone-button" @click="clone">Clone Repo</button>
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
import { remote } from 'electron'
import gitClone from 'git-clone'

export default {
  name: 'Repo',
  props: ['searchTerm', 'name', 'gitUrl'],
  data () {
    return {
      isDropdownShowing: false
    }
  },
  methods: {
    isSearched () {
      return this.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    },
    clone () {
      let path = remote.dialog.showSaveDialog(remote.getCurrentWindow(), {buttonLabel: 'Clone', defaultPath: this.name})

      if (path) {
        gitClone(this.gitUrl, path, () => {
          const notifySuccess = new remote.Notification({
            title: 'Successfully cloned:',
            body: `${this.name}`,
            silent: true
          })

          if (remote.Notification.isSupported()) {
            notifySuccess.show()

            notifySuccess.once('click', () => {
              // Opens the newly created repo in finder/explorer
              remote.shell.openItem(`${path}`)
            })
          }
        })
      }
    }
  }
}
</script>
