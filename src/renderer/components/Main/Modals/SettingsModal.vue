<template>
  <transition name="settings-modal">
    <div class="modal is-active">
      <div class="modal-background"></div>
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
import { EventBus } from '../../event-bus'

export default {
  name: 'SettingsModal',
  props: ['isActive'],
  data () {
    return {
      personalAccessToken: this.$store.getters.personalAccessToken
    }
  },
  mounted () {
    this.$refs.token.focus()
  },
  methods: {
    hideSettingsModal () {
      EventBus.$emit('settings-modal-change', false)
    },
    savePersonalAccessToken () {
      this.$store.commit('CHANGE_PERSONAL_ACCESS_TOKEN', this.personalAccessToken)
      this.hideSettingsModal()
    }
  }
}
</script>

<style scoped>
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
