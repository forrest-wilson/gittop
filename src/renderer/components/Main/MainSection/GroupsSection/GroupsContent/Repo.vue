<template>
  <div class="repo content">
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
            <a class="dropdown-item">Add Repo to Group</a>
            <a class="dropdown-item" @click="openLink">Open in Browser</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { remote } from 'electron'
import gitClone from 'git-clone'

const { dialog, Notification, shell } = remote

export default {
  name: 'Repo',
  props: ['searchTerm', 'repo'],
  data () {
    return {
      isDropdownShowing: false
    }
  },
  computed: {
    inAppSounds () {
      return this.$store.getters.inAppSounds
    }
  },
  methods: {
    closeDropdown () {
      this.isDropdownShowing = false
    },
    clone () {
      let path = dialog.showSaveDialog(remote.getCurrentWindow(), {buttonLabel: 'Clone', defaultPath: this.repo.name})

      if (path) {
        gitClone(this.repo.clone_url, path, () => {
          const notifySuccess = new Notification({
            title: 'Successfully cloned:',
            body: this.repo.name,
            silent: !this.inAppSounds
          })

          if (Notification.isSupported()) {
            notifySuccess.show()

            notifySuccess.once('click', () => {
              // Opens the newly created repo in finder/explorer
              shell.openItem(path)
            })
          }
        })
      }
    },
    openLink () {
      shell.openExternal(this.repo.html_url)
      this.closeDropdown()
    }
  }
}
</script>
