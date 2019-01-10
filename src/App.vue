<template>
  <div id="app">
    <Header></Header>
    <main class="container">
      <router-view/>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "@/components/Header";
  import Footer from "@/components/Footer";
    export default {
    name: "App",
    components: {
      Header,
      Footer
    }
  };
</script>

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

</style>
