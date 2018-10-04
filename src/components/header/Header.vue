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
          
          <nav class="navContent columns">
            <div class ="logo column is-2  a-logo">
              <a href="/" class ="a-logo"><img class="img-fit" :src="logo"></a>
            </div>
            <a class="column is-1  is-offset-one-quarter nav-item" id="nav-item" v-scroll-to="'#index'" >INICIO</a>
            <b-dropdown class ="nav-item is-1 column" hoverable >
              <a id="nav-item" class ="nav-item" v-scroll-to="'#about'" href ="#" slot="trigger">
                QUÉ ES EVIC
              </a>
              <b-dropdown-item><a class="nav-item item-scroll" v-scroll-to="'#about'"> ¿Qué es EVIC? </a></b-dropdown-item>
              <b-dropdown-item><a class="nav-item item-scroll" v-scroll-to="'#organization'"> Organizadores </a></b-dropdown-item>
              <b-dropdown-item><a class="nav-item item-scroll" v-scroll-to="'#sponsors'"> Auspiciadores </a></b-dropdown-item>
            </b-dropdown>
            <a class="column is-1 nav-item" id="nav-item" href ="#" v-scroll-to="'#program'" >PROGRAMA</a>
            <!-- <a class="column nav-item" id="nav-item" href ="#" v-scroll-to="'#experts'" >EXPERTOS</a> -->
            <b-dropdown class ="column is-1" hoverable>
              <a  class="nav-item" id="nav-item" href ="#" v-scroll-to="'#experts'" slot="trigger">
                EXPERTOS
              </a>
                <b-dropdown-item id="secondary-item"><a id="secondary-item" class="nav-item item-scroll" v-scroll-to="'#experts'" > Oradores/as plenarias </a></b-dropdown-item>
                <b-dropdown-item id="secondary-item"><a id="secondary-item" class="nav-item item-scroll" v-scroll-to="'#exhibitors'" > Expositores </a></b-dropdown-item>
            </b-dropdown>
            <a class="column is-1 nav-item" id="nav-item" href ="#" v-scroll-to="'#inscription'" >INSCRIPCIÓN</a>
            <a class="column is-1 nav-item" id="nav-item" href ="#" v-scroll-to="'#competition'">CONCURSO</a>
            <a class="column is-1 nav-item" id="nav-item" href ="#" v-scroll-to="'#ubication'" >UBICACIÓN</a>
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
        logo: 'https://firebasestorage.googleapis.com/v0/b/evic-2018-usach.appspot.com/o/Evic_2018.png?alt=media&token=ce492e24-1373-42db-a7b0-e8f2c2bb2281',
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
        const starCountRef = firebase.database().ref('/');
        starCountRef.once('value', (snapshot) => {
          this.titulo = snapshot.val().titulo;
          this.image = snapshot.val().fondo;
          console.log("Se obtiene el valor");
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
