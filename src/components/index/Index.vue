<template>

<div class="content-align">
  <section class="titleImg hero is-large">
    <div class="hero-body">
      <Title/>
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
import About from "../about/About";
import Title from "../title/Title";
export default {
  name: 'Index',
  components: {About, Title},


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

