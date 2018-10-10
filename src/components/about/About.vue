
<style src="./About.css"></style>
<template>
  <div class="section-margin">
    <div class = "container">
      <h2 class="title">¿Qué es EVIC?</h2>
      <div class="separator-title"></div>
      <div class="overlay" v-if="spinner">
        <breeding-rhombus-spinner :animation-duration="2000" :size="65" color="#EA771D"/>
      </div>
      <div v-else>
        <div
          class="item-content"
          v-for="(value, index) in informacion"
          v-bind:key="index">
          <div v-if="value.mostrar">
            <div class="subtitle">
              <h3>
                <i class="fas fa-angle-right"></i>
                {{ value.titulo }}
              </h3>
            </div>
            <div class="content">
                <p v-html="value.contenido"></p>
            </div>
          </div>
        </div>
        <div id="comite">
          <div class="section-margin packages">
            <h3 class="title ">Comité Local</h3>
            <div class="separator-title"></div>
            <ul id="comite-box" class="grid">
                <li
                v-for="(value, index) in this.comite"
                v-bind:key="index">
                    <h2>{{ value.chair }}</h2>
                    <h4>{{ value.nombre }}</h4>
                    <p>{{ value.correo }}</p>
                </li>
            </ul>
          </div>
        </div>
      </div>
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
      const starCountRef = firebase.database().ref('/que-es-evic');
      starCountRef.once('value', (snapshot) => {
        const contexto = snapshot.val().contexto;
        const evic = snapshot.val().evic;
        const publico = snapshot.val().publico;
        this.informacion = [contexto, evic, publico];
        this.comite = snapshot.val().comite;
        console.log(this.comite);
        this.spinner = false;
      });
    },
  },
  mounted() {
    this.setData();
  },
}
</script>
