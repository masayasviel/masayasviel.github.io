<template>
  <div id="app">
    <commonHeader class="fix-header"></commonHeader>
    <div id="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
import commonHeader from "./components/commonHeader.vue"

export default {
  name: "App",
  components: {
    commonHeader
  }
}
</script>

<style scoped>
#app {
  width: 100%;
}

#main {
  margin: auto;
  width: 90%;
}

.fix-header {
  position: -webkit-sticky; /* Safariに対応 */
  position: sticky;
  top: 0;
  z-index: 1;
}
</style>
