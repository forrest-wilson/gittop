<template>
  <!-- Add Group Modal Window -->
  <div class="add-group-modal is-active">
    <div class="field">
      <div class="control">
        <input class="input" type="text" placeholder="Group name" v-model="groupName">
      </div>
      <p class="help is-danger"></p>
    </div>
    <div class="field">
      <div class="control">
        <button class="button is-success">Create Group</button>
        <button class="button is-danger" @click="hideAddGroupModal">Cancel</button>
      </div>
    </div>
  </div>
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
  created () {
    this.$on('')
  },
  methods: {
    hideAddGroupModal () {
      EventBus.$emit('add-group-modal-change', false)
      this.groupName = ''
    }
  }
}
</script>
