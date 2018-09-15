<template>
  <div>
 <header>
    <div class ="logo">
      <a href="/"><img :src="logo"></a>
    </div>
    <i class="fa fa-bars hamburger"></i>
    <nav id="menu">
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
      <router-view></router-view>
    </transition>
   </div>
<footer>
    <p> {{footer}}</p>
</footer>
  </div>
</template>
<script>
import firebase from 'firebase';


export default {
  components: {
    
  },
  data() {
    return {
      image: '',
      urlGary: '@/gary.jpeg',
      spinner: true,
      titulo: '',
      subtitulo: '',
      oradoresPlenaria: {},
      expositores: {},
      resena: '',
      direccion: '',
      fecha: '',
      auspiciadores: {},
      organizadores: {},
      imageUrl: [],
      structName: [],
      valores: {},
      txtMark: 'LUGAR DEL EVENTO',
      indexForPath: 0,
      pathImageOradores: [],
      textAboutEvic: '',
      center: { lat: 0, lng: 0 },
      markers: [
        {
          position: { lat: 0, lng: 0 },
        },
      ],
    };
  },
  methods: {
    setData() {
      const starCountRef = firebase.database().ref('/');
      starCountRef.once('value', (snapshot) => {
        this.titulo = snapshot.val().titulo;
        this.subtitulo = snapshot.val().subtitulo;
        this.textAboutEvic = snapshot.val().descripcion;
        this.center.lat = Number(snapshot.val().ubicacion.lat);
        this.center.lng = Number(snapshot.val().ubicacion.long);
        this.direccion = snapshot.val().ubicacion.direccion;
        this.markers[0].position.lat = Number(snapshot.val().ubicacion.lat);
        this.markers[0].position.lng = Number(snapshot.val().ubicacion.long);
        this.oradoresPlenaria = snapshot.val().plenaria;
        this.image = snapshot.val().fondo;
        this.fecha = snapshot.val().fecha;
        this.organizadores = snapshot.val().organizadores;
        this.auspiciadores = snapshot.val().auspiciadores;
        this.expositores = snapshot.val().expositores;
        this.spinner = false;
      });
    },
  },
  mounted() {
    this.setData();
  },
};
</script>

<style>

@import './App.scss';
</style>
