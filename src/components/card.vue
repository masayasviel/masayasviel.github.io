<template>
  <div class="card">
    <img :src="imgPath" :alt="node.imgAlt" id="thumbnail">
    <input :id="node.id" class="acd-check" type="checkbox">
    <label class="acd-label" :for="node.id" @click="toggleIsOpenMenu">{{ node.title }} {{ isOpenMenu ? "▲": "▼"}}</label>
    <div class="acd-content">
      <a class="acd-element" :href="node.URL"><button>play</button></a>
      <a class="acd-element" :href="node.code"><button>code</button></a>
      <button @click="alertHow">how</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      node: this.obj,
      imgPath: require("../assets/" + this.obj.imgPass),
      isOpenMenu: false
    }
  },
  props: ["obj"],
  methods: {
    alertHow() {
      window.alert(this.node.how);
    },
    toggleIsOpenMenu() {
      this.isOpenMenu = !this.isOpenMenu;
    }
  }
}
</script>

<style scoped>
.card {
  width: 250px;
  margin: 1rem;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 3px 6px #ccc;
  text-align: center;
}

#thumbnail {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
}

.acd-check{
  display: none;
}

.acd-label {
  font-size: 120%;
  margin: 10px;
  color: #444;
  display: block;
}

.acd-label:hover {
  color: aqua;
}

.acd-content{
  height: 0;
  opacity: 0;
  transition: .2s;
  visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.acd-check:checked + .acd-label + .acd-content{
  height: auto;
  opacity: 1;
  padding: 10px;
  visibility: visible;
}

.acd-content button {
  width: 5rem;
  background-color: transparent;
}

.acd-element {
  text-decoration: none;
  color: black;
}

.acd-content button:hover {
  background-color: black;
  color: azure;
}
</style>