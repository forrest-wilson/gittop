<template>
  <div class="wrapper">
    <app-toolbar></app-toolbar>
    <app-main-section></app-main-section>
  </div>
</template>

<script>
import Toolbar from './Main/Toolbar.vue'
import MainSection from './Main/MainSection.vue'

export default {
  name: 'Main',
  components: {
    'app-toolbar': Toolbar,
    'app-main-section': MainSection
  }
}
</script>

<style>
  .wrapper {
    height: 100%;
  }
</style>
