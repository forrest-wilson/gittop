<template>
  <transition name="access-token-modal">
    <div class="modal is-active" transition="modal">
      <div class="modal-background" @click="hide"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">How to get a Personal Access Token</p>
          <button class="delete" aria-label="close" @click="hide"></button>
        </header>
        <section class="modal-card-body">
          <div class="field content">
            <p>1. Verify your email address, if it hasn't been verified yet.</p>
            <p>2. In the upper-right corner of any page, click you profile photo, then click <strong class="white">Settings.</strong></p>
            <p>3. In the left sidebar, click <strong class="white">Developer settings.</strong></p>
            <p>4. In the left sidebar, click <strong class="white">Personal access tokens.</strong></p>
            <p>5. Click <strong class="white">Generate new token.</strong></p>
            <p>6. Give your token a descriptive name.</p>
            <p>7. Select the scopes, or permissions, you'd like to grant this token. To access your GitHub repositories in GitTop, select <strong class="white">repo.</strong> To access your GitHub account details, select <strong class="white">user.</strong></p>
            <p>8. Click <strong class="white">Generate token.</strong></p>
            <p>9. Click <i class="fa fa-clipboard"></i> to copy the token to your clipboard. For security reasons, after you navigate off the page, you will not be able to see the token again.</p>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="hide">Ok, got it!</button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'HowToGetTokenModal',
  methods: {
    hide () {
      this.$parent.$emit('token-modal-change', false)
    }
  }
}
</script>

<style scoped>
  .white {
    color: white;
  }

  .modal {
    transition: opacity 200ms ease;
  }

  .modal-card {
    transition: all 200ms ease;
  }

  .access-token-modal-enter {
    opacity: 0;
  }

  .access-token-modal-leave-active {
    opacity: 0;
  }

  .access-token-modal-enter .modal-card,
  .access-token-modal-leave-active .modal-card {
    transform: scale(1.05);
  }
</style>
