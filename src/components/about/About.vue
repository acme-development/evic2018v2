<template>
    <div class="content">
    <div class= "contenedor-exterior">
      <div class ="contenedor-nombre">
        <div>
          <h3>¿Qué es EVIC?</h3>
        </div>
        <div>
          <hr>
        </div>
      </div>
    
    <div>
      <div class="overlay" v-if="spinner">
        <div>
          <breeding-rhombus-spinner :animation-duration="2000" :size="65" color="#EA771D"/>
        </div>
      </div>
      <div v-else class= "contenedor-exterior">
        <div
            class ="contenedor-interior"
            v-for="(value, index) in informacion"
            v-bind:key="index">
            <div v-if="value.mostrar">
              <div class="name">
                <h3>
                  {{ value.titulo }}
                </h3>
              </div>
              <div class="info">
                <h4 v-html="value.contenido"></h4>
              </div>
            </div>
        </div>
      </div>
      <div class ="contenedor-exterior">
        <div class="contenedor-interior">
          <div class="name"><h3>Cómite organizador USACH</h3></div>
          <div class="info">
            <h3 v-for="(value, index) in comite" v-bind:key="index">
              {{value.nombre}}
              <a :href="'mailto:' + value.correo">{{value.correo}}</a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div style = "height: 500px; width: 100%;">
    <ubication></ubication>
  </div>
  </div>
</template>


<script>
import firebase from 'firebase';
import { BreedingRhombusSpinner } from 'epic-spinners';
import Ubication from '../ubication/Ubication.vue'


export default {
  name: 'About',
  components: {
    BreedingRhombusSpinner,
    ubication: Ubication,
  },
  data() {
    return {
      title: 'About',
      spinner: true,
      informacion: [],
      comite: [],
    };
  },
  methods: {
    setData() {
      const starCountRef = firebase.database().ref('/');
      starCountRef.once('value', (snapshot) => {
        const contexto = snapshot.val().acerca.contexto;
        const evic = snapshot.val().acerca.evic;
        const publico = snapshot.val().acerca.publico;
        this.informacion = [contexto, evic, publico];
        this.comite = snapshot.val().acerca.comite;
        this.spinner = false;
      });
    },
  },
  mounted() {
    console.log("Me llamaron ? About");
    this.setData();
  },
}
</script>

<style >
    @import './About.scss';
</style>
