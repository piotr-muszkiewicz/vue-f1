<template>
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-logo" to="/">
          <img src="../assets/img/f1_logo.png" alt>
        </router-link>
      </div>

      <div id="navbar-menu" class="navbar-menu">
        <div class="navbar-start is-centered">
          <router-link class="navbar-item" to="/seasons">{{$t('title.seasons')}}</router-link>
          <router-link class="navbar-item" to="/drivers">{{$t('title.drivers')}}</router-link>
          <router-link class="navbar-item" to="/teams">{{$t('title.teams')}}</router-link>
        </div>
      </div>
      <LangSelect></LangSelect>
    </nav>
</template>

<script>
  import LangSelect from "@/components/LangSelect";
  export default {
    name: "header",
    components: {
      LangSelect
    }
  };
</script>

<style lang="scss">
.navbar {
  flex-wrap: wrap;
  .locale-changer {
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);
  }
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