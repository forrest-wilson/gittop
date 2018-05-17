<template>
  <div class="group" data-request="groupAll"> <!-- Active class is 'active' -->
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
