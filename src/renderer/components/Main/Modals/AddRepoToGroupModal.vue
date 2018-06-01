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
          <!-- Conditionally render all groups except for the first one as this contains all repos anyway -->
          <div class="group content" v-for="(group, idx) in groups" :key="group.id" v-if="idx !== 0" @click="selectedGroup = group.id" :class="{ selected: isSelected(group.id) }">
            <p>{{ group.name }}</p>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="addRepoToGroup">Add</button>
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
  props: ['repo'],
  data () {
    return {
      selectedGroup: ''
    }
  },
  computed: {
    groups () {
      return this.$store.getters.groups
    }
  },
  methods: {
    closeModal () {
      EventBus.$emit('add-repo-to-group-modal-change', {state: false, repo: null})
    },
    isSelected (id) {
      return this.selectedGroup === id
    },
    addRepoToGroup () {
      for (let i = 0; i < this.groups.length; i++) {
        if (this.groups[i].id === this.selectedGroup) {
          this.$store.commit('ADD_CHILDREN', {idx: i, repos: this.repo})
          break
        }
      }

      this.closeModal()
    }
  }
}
</script>

<style scoped>
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

  .group {
    padding: 20px;
    border-radius: 5px;
    cursor: pointer;
  }

  .group:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  .group:hover {
    background-color: grey;
  }

  .group.selected {
    background-color: gray;
  }
</style>
