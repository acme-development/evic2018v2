
<template>
  <div id="app-layout">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<style>

</style>

<script>

  import Header from '../header/Header'
  export default {
    
    components: {
      Header,
    }
  }
</script>