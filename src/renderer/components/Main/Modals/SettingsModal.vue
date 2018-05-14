<template>
  <transition name="settings-modal">
    <div class="modal is-active" transition="modal">
      <div class="modal-background" @click="hideSettingsModal"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title"><i class="fa fa-gear"></i> Settings</p>
          <button class="delete" aria-label="close" @click="hideSettingsModal"></button>
        </header>
        <section class="modal-card-body">
          <div class="field">
            <label class="label">Personal Access Token</label>
            <div class="control">
              <input class="input" type="text" placeholder="Your GitHub Personal Access Token" ref="token" v-model="personalAccessToken">
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="savePersonalAccessToken">Save</button>
          <button class="button" @click="hideSettingsModal">Cancel</button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
const settings = require('electron-settings')

export default {
  name: 'SettingsModal',
  props: ['isActive'],
  data () {
    return {
      personalAccessToken: settings.get('personalAccessToken')
    }
  },
  mounted () {
    this.$refs.token.focus()
  },
  methods: {
    hideSettingsModal () {
      this.$parent.$emit('settings-modal-change', false)
    },
    savePersonalAccessToken () {
      settings.set('personalAccessToken', this.personalAccessToken)
      this.hideSettingsModal()
    }
  }
}
</script>

<style scoped>
  .modal {
    transition: opacity 200ms ease;
  }

  .modal-card {
    transition: all 200ms ease;
  }

  .settings-modal-enter {
    opacity: 0;
  }

  .settings-modal-leave-active {
    opacity: 0;
  }

  .settings-modal-enter .modal-card,
  .settings-modal-leave-active .modal-card {
    transform: scale(1.05);
  }
</style>
