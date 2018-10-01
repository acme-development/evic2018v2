<template>
  <div class="page">
    <router-view></router-view>
  </div>
</template>
<script>
import Layout from './components/layout/Layout';

export default {
  components: {
    Layout,
  },
   created(){
      //this.$store.dispatch( 'loadCafes' );
      //this.$store.dispatch( 'loadUser' );
    }
  };
</script>

<style>
@import './App.css';
</style>
