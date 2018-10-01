<template>
    <div>
    <div class= "contenedor-exterior">
      <div class ="contenedor-nombre">
        <div>
          <h3>Concurso de posters</h3>
        </div>
        <div>
          <hr>
        </div>
      </div>
    </div>
    <div>
      <div v-if="moreInformation==0">
        <div class="overlay" v-if="spinner">
          <div>
            <breeding-rhombus-spinner
              :animation-duration="2000"
              :size="65"
              color="#EA771D"
            />
          </div>
        </div>
        <div v-else class= "contenedor-exterior">
            <div
            class ="contenedor-interior"
            v-for="(value, index) in firebaseInformacion"
            v-bind:key="index">
            <div v-if="value.mostrar==1">
              <div class="name">
                <h3>
                  {{ value.titulo }}
                </h3>
              </div>
              <div class="info"
                v-for="(info, index) in value.informacion"
                v-bind:key="index">
                <h4>
                  {{info.nombre}}
                </h4>
                <h3>
                  {{info.data}}
                </h3>
              </div>
            </div>
            </div>
        </div>
      </div>
      <div v-else class ="pantalla-mas-informacion">
        <h3>
          {{msjeMasInformacion}}
        </h3>
      </div>
    </div>
  </div>
</template>


<script>
import firebase from 'firebase';
import { BreedingRhombusSpinner } from 'epic-spinners';

export default {
	name:'Competition',
  components: {
    BreedingRhombusSpinner,
  },
  data() {
    return {
      title: 'Program',
      users: [],
      direccion: '',
      spinner: true,
      infoUbicacion: {},
      txtMark: 'EVIC',
      firebaseInformacion: {},
      showWinner: '0',
      msjeMasInformacion: '',
      moreInformation: '',
    };
  },
  methods: {
    setData() {
      const starCountRef = firebase.database().ref('/');
      starCountRef.once('value', (snapshot) => {
        this.firebaseInformacion = snapshot.val().concurso;
        this.moreInformation = snapshot.val().cortina.mostrar;
        this.msjeMasInformacion = snapshot.val().cortina.texto;
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
@import './Competition.css';
</style>


