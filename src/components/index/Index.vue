<style src="./Index.scss"></style>
<template>
  <div class="content-align">

    <div id="index" class="hero is-medium">
      <section class="hero-body">
        <Title/>
      </section>
    </div>

    <div id = "about" class="hero is-medium">
      <section class="about hero-body">    
        <About/>
      </section>
    </div>

    <div id="program" class="hero is-medium">
      <section class="hero-body">
        <Program/>
      </section>
    </div>

    <div id="experts" class="hero is-medium">
      <section class="hero-body">
        <Experts/>
      </section>
    </div>

    <div id="competition" class="hero is-medium">
      <section class="hero-body">
        <Competition/>
      </section>
    </div>

    <div id="inscription" class ="hero is-medium">
      <section class="hero-body">
        <Inscription/>
      </section>
    </div>

    <div id="ubication" class ="hero is-medium" >
      <section class="hero-body">
          <Ubication/>
      </section>
    </div>
    <div id="exhibitors" class="hero is-medium">
      <section class="hero-body">
        <Exhibitors/>
      </section>
    </div>
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
import Exhibitors from '../exhibitors/Exhibitors';
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
    Exhibitors,
    },
  created(){
    //console.log("He sido llamado");
  },
  mounted() {
    //console.log("He sido llamado");
  },
}
</script>

