<template>
  <div class="not-found">
  </div>
</template>

<script lang="ts">
export default {
  name: "404"
}
</script>

<style scoped>
.not-found {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: url("../assets/404.gif");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>