<style src="./Index.scss"></style>
<template>
  <div class="content-align">

    <div id="index" class="hero is-medium">
      <div class="fullscreen-bg">
        <video autoplay muted loop playsinline  class="fullscreen-bg__video">
            <source src="https://firebasestorage.googleapis.com/v0/b/evic-2018-usach.appspot.com/o/videobackground%2Fusach.mp4?alt=media&token=72a4bf20-3615-4d51-b386-8839a985e69f" type="video/mp4">
        </video>
      </div>
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
    <div id="exhibitors" class="hero is-medium">
      <section class="hero-body">
        <Exhibitors/>
      </section>
    </div>

    <div id="inscription" class ="hero is-medium">
      <section class="hero-body">
        <Inscription/>
      </section>
    </div>
    <div id="competition" class="hero is-medium">
      <section class="hero-body">
        <Competition/>
      </section>
    </div>
    <div id="ubication" class ="hero is-medium" >
      <section class="hero-body">
          <Ubication/>
      </section>
    </div>
    <div id ="organization" class="hero is-medium" >
      <section class="hero-body">
        <Organization/>
      </section>
    </div>
    <div id ="sponsors" >
        <section >
          <Sponsors/>
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
import Sponsors from '../sponsors/Sponsors';
import Organization from '../organization/Organization';
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
    Sponsors,
    Organization,
    },
  created(){
    //console.log("He sido llamado");
  },
  mounted() {
    //console.log("He sido llamado");
  },
}
</script>

