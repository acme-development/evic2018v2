<template>

<div class="content">
  <section class="titleImg hero is-large">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Large title
        </h1>
        <h2 class="subtitle">
          Large subtitle
        </h2>
      </div>
    </div>
  </section>
  <section class="hero is-medium is-primary is-bold">
  <div class="hero-body">
    <div class="container">
      <About/>
    </div>
  </div>
</section>
</div>


</template>

<script>
import About from "../about/About"
export default {
  name: 'Index',
  components: {About},


  created(){
    console.log("He sido llamado");
  },
  mounted() {
    console.log("He sido llamado");
  },
}
</script>

<style>
  @import './Index.scss';
</style>

