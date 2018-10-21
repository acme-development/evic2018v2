<style src="./Header.css"></style>
<template >
    <div class="overlay" v-if="spinner">
        <breeding-rhombus-spinner
          :animation-duration="2000"
          :size="65"
          color="#EA771D"
        />
    </div>
    <div v-else class="elses" >
      <header class="header-align" id="navbar" >
          <div class ="logo">
            <a href="/" class="img-fit"><img :src="logo"></a>
          </div>
          <nav class="navContent columns">
            <div class="column">
              <a class="nav-item" href ="#" v-scroll-to="'#index'" >INICIO</a>
            </div>
            <div class="column">
              <!--<a class="nav-item" href ="#" v-scroll-to="'#about'" >QUÉ ES EVIC</a>-->
              <b-dropdown class ="nav-item" hoverable>
                <a class  = "nav-item-hover" v-scroll-to="'#about'" href ="#" slot="trigger">QUÉ ES EVIC</a>
                <b-dropdown-item><a class="nav-item item-scroll" v-scroll-to="'#about'"> ¿Qué es EVIC? </a></b-dropdown-item>
                <b-dropdown-item><a class="nav-item item-scroll" v-scroll-to="'#organization'"> Comité Nacional </a></b-dropdown-item>
                <b-dropdown-item><a class="nav-item item-scroll" v-scroll-to="'#sponsors'"> Auspiciadores </a></b-dropdown-item>
              </b-dropdown>
            </div>
            <div class="column">  
              <a class="nav-item" href ="#" v-scroll-to="'#program'" >PROGRAMA</a>
            </div>
            <div class="column">  
              <!--<a class="nav-item" href ="#" v-scroll-to="'#experts'" >EXPERTOS</a>-->
              <b-dropdown class ="nav-item" hoverable>
              <a  class="nav-item-hover" href ="#" v-scroll-to="'#experts'" slot="trigger">EXPERTOS</a>
                <b-dropdown-item><a class="nav-item item-scroll" v-scroll-to="'#experts'"> Plenarias </a></b-dropdown-item>
                <b-dropdown-item><a class="nav-item item-scroll" v-scroll-to="'#exhibitors'" > Tutoriales </a></b-dropdown-item>
              </b-dropdown>
            </div>
            <div class="column">  
              <a class="nav-item" href ="#" v-scroll-to="'#inscription'" >INSCRIPCIÓN</a>
            </div>
            <div class="column">  
              <a class="nav-item" href ="#" v-scroll-to="'#competition'">CONCURSO POSTERS</a>
            </div>
            <div class="column">  
              <a class="nav-item" href ="#" v-scroll-to="'#ubication'" >UBICACIÓN</a>
            </div>    
          </nav>
      </header>
    </div> 
</template>

<script>
import firebase from 'firebase';
import { BreedingRhombusSpinner } from 'epic-spinners';


export default {
  name: 'Header',
  components: {
    BreedingRhombusSpinner
  },
  data() {
      return {
        titulo: '',
        footer: '',
        logo: '',
        image : '',
        spinner:true,
      };
    },
    methods: {
      handleScroll () {
        this.scrolled = window.scrollY > 0;
        const nav = document.querySelector('#navbar');
        if(window.scrollY <= 10) nav.className = 'header-align'; else nav.className = 'scroll';
      },
      setData() {
        window.addEventListener('scroll', this.handleScroll);
        const starCountRef = firebase.database().ref('/inico');
        starCountRef.once('value', (snapshot) => {
          this.titulo = snapshot.val().titulo;
          this.image = snapshot.val().fondo;
          this.logo = snapshot.val().logo;
          this.footer = snapshot.val().footer;
          //this.logo = snapshot.val().logo;
          this.spinner = false;
        });
      },
    },
    mounted() {
      this.setData();
    },
}
</script>
