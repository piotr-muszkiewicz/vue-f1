<template>
  <div id="app">
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
          <router-link 
            class="navbar-logo"
            to="/"><img src="./assets/img/f1_logo.png" alt="">
          </router-link>
      </div>

      <div id="navbar-menu" class="navbar-menu">
        <div class="navbar-start is-centered">
          <router-link 
            class="navbar-item"
            to="/seasons">Seasons</router-link>
          <router-link 
            class="navbar-item"
            to="/drivers">Drivers</router-link>
          <router-link 
            class="navbar-item"
            to="/teams">Teams</router-link>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
.navbar {
  flex-wrap: wrap;
  margin-bottom: 20px
}
.navbar-brand {
  width: 100%;
  text-align: center;
  .navbar-logo {
    margin: 0 auto;
    height: 80px;
    img {
      max-width: 200px;
      margin-top: -30px;
    }
  }
}
.navbar-menu {
  .navbar-start {
    margin: 0 auto;
  }
}
</style>
