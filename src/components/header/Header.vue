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
            <a href="/"><img :src="logo"></a>
          </div>
          <i class="fa fa-bars hamburger"></i>
          <nav class="navContent columns">
            <a class="column" href ="#" v-scroll-to="'#index'" >INICIO</a>
            <a class="column" href ="#" v-scroll-to="'#about'" >QUÉ ES EVIC</a>
            <a class="column" href ="#" v-scroll-to="'#program'" >PROGRAMA</a>
            <a class="column" href ="#" v-scroll-to="'#experts'" >EXPERTOS</a>
            <a class="column" href ="#" v-scroll-to="'#competition'">CONCURSO</a>
            <a class="column" href ="#" v-scroll-to="'#inscription'" >INSCRIPCIÓN</a>
            <a class="column" href ="#" v-scroll-to="'#ubication'" >UBICACIÓN</a>
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
        const starCountRef = firebase.database().ref('/');
        starCountRef.once('value', (snapshot) => {
          this.titulo = snapshot.val().titulo;
          this.image = snapshot.val().fondo;
          console.log("Se obtiene el valor");
          this.footer = snapshot.val().footer;
          this.logo = snapshot.val().logo;
          this.spinner = false;
        });
      },
    },
    mounted() {
      this.setData();
    },
}
</script>
<style>
@import './Header.css';
</style>
