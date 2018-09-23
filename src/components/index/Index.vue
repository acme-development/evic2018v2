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
  <section id="experts" class="hero is-large">
    <Experts/>
  </section>
  <section id="competition" class="hero is-large">
    <Competition/>
  </section>
  <section id="ubication" class =" hero is-large" >
    <div class="hero-body">
      <div class="container">
        <Ubication/>
      </div>
    </div>
  </section>
  
</div>


</template>

<script>
import About from "../about/About";
import Title from "../title/Title";
import Program from "../program/Program";
import Ubication from "../ubication/Ubication";
import Experts from "../experts/Experts";
import Competition from '../competition/Competition';
export default {
  name: 'Index',
  components: {
    About, 
    Title,
    Program,
    Ubication,
    Experts,
    Competition,
    },


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

