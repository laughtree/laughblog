<template>
  <div id="frame">
      {{tag}}
  </div>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
#frame{
    background-color: rgba(176,205,143,0.5);
    width: auto;
    padding: 2px 2px 2px 2px;
}
</style>