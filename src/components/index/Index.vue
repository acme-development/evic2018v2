<template>

<div  class="content-align">
  <section id="index" class="titleImg hero is-large">
    <div class="hero-body">
      <Title/>
    </div>
  </section>
  <section id = "about" class="hero is-medium is-primary is-bold">
  <div class="hero-body">
    <div class="container">
      <About/>
    </div>
  </div>
  </section>
  <section id="program" class="hero is-large">
    <Program/>
  </section>
</div>


</template>

<script>
import About from "../about/About";
import Title from "../title/Title";
import Program from "../program/Program";
export default {
  name: 'Index',
  components: {About, Title,Program},


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

