<template>
  <div class="utilities-bar">
    <div class="field has-addons">
      <div class="control has-icons-left search">
        <input class="input" type="text" placeholder="Search for a Repository" v-model="searchTerm">
        <span class="icon is-small is-left">
          <i class="fa fa-search"></i>
        </span>
      </div>
      <div class="control">
        <div class="buttons has-addons">
          <span class="button" @click="clearSearch">
            <span class="fa fa-close"></span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UtilitiesBar',
  data () {
    return {
      searchTerm: ''
    }
  },
  watch: {
    searchTerm () {
      this.$parent.$emit('search-term-updated', this.searchTerm)
    }
  },
  methods: {
    clearSearch () {
      this.searchTerm = ''
    }
  }
}
</script>
