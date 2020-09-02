<template>
  <div class="works">
    <h1>Works</h1>
    <div>つくったものをここにまとめていきます</div>
    <div class="cards">
      <div v-for="item in works" :key="item.id">
        <card :obj="item"></card>
      </div>
    </div>
  </div>
</template>

<script>
import works from "../assets/data.json"
import card from "./card.vue"

export default {
  components: {
    card
  },
  data() {
    return {
      works: works
    }
  }
}
</script>

<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>