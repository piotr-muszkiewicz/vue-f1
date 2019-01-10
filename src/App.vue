<template>
  <div id="app">
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-logo" to="/">
          <img src="./assets/img/f1_logo.png" alt>
        </router-link>
      </div>

      <div id="navbar-menu" class="navbar-menu">
        <div class="navbar-start is-centered">
          <router-link class="navbar-item" to="/seasons">Seasons</router-link>
          <router-link class="navbar-item" to="/drivers">Drivers</router-link>
          <router-link class="navbar-item" to="/teams">Teams</router-link>
        </div>
      </div>
    </nav>
    <main class="container">
      <router-view/>
    </main>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>F1 Data</strong> by
          <a href="https://piotr-m.pl">rFront Piotr Muszkiewicz</a>.
        </p>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  main {
    padding-top: 20px;
    padding-bottom: 20px;
    flex: 1;
    position: relative;
  }
}
.navbar {
  flex-wrap: wrap;
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
