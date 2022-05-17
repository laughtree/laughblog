<template>
  <div>
    <img :src="NotDone">
  </div>
</template>

<script>
import NotDone from "@/assets/notdone.svg";
export default {
  data() {
    return {
      NotDone,
    }
  }
}
</script>

<style scoped>

</style>