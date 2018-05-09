<template>
  <div class="app-columns">
      <app-section-navigator></app-section-navigator>
      <main class="app-column main">
        <app-profile></app-profile>
        <app-groups></app-groups>
      </main>
  </div>
</template>

<script>
import SectionNavigator from './MainSection/SectionNavigator.vue'
import Profile from './MainSection/Profile.vue'
import Groups from './MainSection/Groups'

export default {
  name: 'MainSection',
  components: {
    'app-section-navigator': SectionNavigator,
    'app-profile': Profile,
    'app-groups': Groups
  }
}
</script>
