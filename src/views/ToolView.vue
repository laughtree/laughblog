<template>
  <div>
    <img :src="NotDone">
  </div>
</template>

<script>
import NotDone from "@/assets/notdone.svg";
export default {
  components: {},
  data() {
    return {
      NotDone,
    }
  }
}
</script>

<style scoped>

</style>