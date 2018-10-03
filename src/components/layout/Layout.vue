
<template>
  <div id="app-layout">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<style>

</style>

<script>

  import Header from '../header/Header'
  import Footer from '../footer/Footer'
  export default {
    
    components: {
      Header,
      Footer,
    }
  }
</script>