<template>
  <nav class="app-column section-navigator window-drag">
    <div class="navigator-icon active-nav-item" data-showsection="profile">
      <img id="profileImage" class="profile-image" src="/static/images/avatar.png" alt="Avatar">
    </div>
    <div class="navigator-icon" data-showsection="repositories">
      <i class="fa fa-code"></i>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'SectionNavigator'
}
</script>
