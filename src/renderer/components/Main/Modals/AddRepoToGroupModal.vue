<template>
  <transition name="add-repos-to-group-modal">
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title"><i class="fa fa-code"></i> Add Repo to Group</p>
          <button class="delete" aria-label="close" @click="closeModal"></button>
        </header>
        <section class="modal-card-body">

        </section>
        <footer class="modal-card-foot">
          <button class="button is-success">Add</button>
          <button class="button" @click="closeModal">Cancel</button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
import { EventBus } from '../../event-bus'

export default {
  name: 'AddRepoToGroupModal',
  computed: {
    groups () {
      return this.$store.getters.groups
    }
  },
  methods: {
    closeModal () {
      EventBus.$emit('add-repo-to-group-modal-change', false)
    }
  }
}
</script>

<style>
  .add-repos-to-group-modal-enter {
    opacity: 0;
  }

  .add-repos-to-group-modal-leave-active {
    opacity: 0;
  }

  .add-repos-to-group-modal-enter .modal-card,
  .add-repos-to-group-modal-leave-active .modal-card {
    transform: scale(1.05);
  }
</style>
