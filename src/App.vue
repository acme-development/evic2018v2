<template>
  <div class="page">
    <router-view></router-view>
  </div>
</template>
<script>
import Header from './components/header/Header';


export default {
  components: {
    'Header':Header,
  },
  
  };
</script>

<style>

@import './App.css';
</style>
