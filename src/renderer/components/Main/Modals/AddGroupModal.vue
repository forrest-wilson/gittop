<template>
  <transition name="add-group-modal">
    <!-- Add Group Modal Window -->
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title"><i class="fa fa-folder"></i> Add a new group</p>
          <button class="delete" aria-label="close" @click="hideAddGroupModal"></button>
        </header>
        <section class="modal-card-body">
          <div class="field">
            <div class="control">
              <input class="input" type="text" placeholder="New Folder Name" ref="folderName" v-model="groupName">
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="addGroup">Add</button>
          <button class="button" @click="hideAddGroupModal">Cancel</button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
import { EventBus } from '../../event-bus'

export default {
  name: 'AddGroupModal',
  props: ['isActive'],
  data () {
    return {
      groupName: ''
    }
  },
  mounted () {
    this.$refs.folderName.focus()
  },
  methods: {
    hideAddGroupModal () {
      EventBus.$emit('add-group-modal-change', false)
    },
    addGroup () {
      this.$store.commit('ADD_GROUP', this.groupName)
      this.hideAddGroupModal()
    }
  }
}
</script>

<style scoped>
  .add-group-modal-enter {
    opacity: 0;
  }

  .add-group-modal-leave-active {
    opacity: 0;
  }

  .add-group-modal-enter .modal-card,
  .add-group-modal-leave-active .modal-card {
    transform: scale(1.05);
  }
</style>
