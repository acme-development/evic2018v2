<template>

<div class="content-align">
  <section id="index" class="hero is-medium">
    <section class="hero-body">
      <Title/>
    </section>
  </section>

  <section id = "about" class="hero is-medium is-primary is-bold">
  <div class="hero-body about">    
      <About/>
  </div>
  </section>

  <section id="program" class="hero is-large">
    <Program/>
  </section>

  <section id="experts" class="hero is-large">
    <Experts/>
  </section>

  <section id="competition" class="hero is-large">
    <section>
      <Competition/>
    </section>
  </section>

  <section id="inscription" class ="hero is-large">
    <Inscription/>
  </section>

  <section id="ubication" class ="hero is-medium" >
    <section class="hero-body">
        <Ubication/>
    </section>
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
import Inscription from '../inscription/Inscription';
export default {
  name: 'Index',
  components: {
    About, 
    Title,
    Program,
    Ubication,
    Experts,
    Competition,
    Inscription,
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

