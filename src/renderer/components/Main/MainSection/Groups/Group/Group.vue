<template>
  <div class="group selected" data-request="groupAll">
    <slot name="groupName"></slot>
    <span class="icon is-small">
      <i class="fa fa-angle-right"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Group'
}
</script>
