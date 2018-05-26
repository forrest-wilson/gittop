<template>
  <section class="nav-section app-section" :class="{ 'is-showing': isActive('profile') }">
    <div class="inner">
        <header class="content">
          <h1><i class="fa fa-user"></i> Account</h1>
          <p>Here's your account information</p>
        </header>
        <hr>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Profile',
  props: ['activeNavItem'],
  methods: {
    isActive (item) {
      return this.activeNavItem === item
    }
  }
}
</script>
