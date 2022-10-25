<template>
  <div class="showX">
    <div class="loading">
      <span>H</span>
      <span>e</span>
      <span>l</span>
      <span>l</span>
      <span>o</span>
    </div>
    <div id="preloader"></div>
  </div>
</template>

<script>
import loadingPace from "../../common/loadingPace";
export default {
  mounted() {
    if (window.Pace) {
      loadingPace();
    }
  },
};
</script>

<style scoped>
</style>
