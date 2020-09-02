<template>
  <div class="nav-header">
    <h1 class="title"><router-link to="/" style="color: azure;">masayasviel</router-link></h1>
    <nav class="menu">
      <router-link to="/works" class="nav-item">Works</router-link>
      <router-link to="/skills" class="nav-item">Skills</router-link>
    </nav>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
}

.nav-header {
  padding: 2vh;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  background-color: #343a40;
}

.title {
  font-size: 1.5rem;
  margin-left: 1rem;
}

.menu {
  margin-left: auto;
}

/* タブレットサイズだったら */
@media (min-width: 600px) {
  .menu{ margin-right: 1em; }
}

/* PCサイズだったら */
@media (min-width: 992px) {
  .menu{ margin-right: 2em; }
}

.nav-item {
  margin-right: 1em;
  font-size: 1rem;
  color: #BDBDBD;
}

.nav-item:hover {
  color: #E6E6E6;
}
</style>