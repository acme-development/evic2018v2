<template>

    <div class="overlay" v-if="spinner">
        <breeding-rhombus-spinner
          :animation-duration="2000"
          :size="65"
          color="#EA771D"
        />
      </div>
      <div v-else class="elses">
        
    
        
      <div>
 <header class="header-align">
    <div class ="logo">
      <a href="/"><img :src="logo"></a>
    </div>
    <i class="fa fa-bars hamburger"></i>
    
    <nav class="navContent">
      <a><router-link :to="{ name: 'Index'}">INICIO</router-link></a>
      <a><router-link :to="{ name: 'About'}">QUÉ ES EVIC</router-link></a>
      <a><router-link :to="{ name: 'Program'}">PROGRAMA</router-link></a>
      <a><router-link :to="{ name: 'Speakers'}">EXPERTOS</router-link></a>
      <a><router-link :to="{ name: 'Competition'}">CONCURSO</router-link></a>
      <a><router-link :to="{ name: 'Inscription'}">INSCRIPCIÓN</router-link></a>
      <a><router-link :to="{ name: 'Location'}">UBICACIÓN</router-link></a>
    </nav>
</header>
   <div class = "putmargin">
      <transition name="fade-down" mode="out-in" appear>
      
        <section class="hero"> 


        </section>

      <router-view></router-view>
      
    </transition>
   </div>
<footer>
    <p> {{footer}}</p>
</footer>
  </div>
  </div>
</template>

<script>
import firebase from 'firebase';


export default {
  name: 'Header',
  data () {
    return {
      msg: 'hello, i\' m the header'
    }
  },data() {
      return {
        titulo: '',
        footer: '',
        logo: '',
        image : '',
        spinner:true,
      };
    },
    methods: {
      setData() {
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
