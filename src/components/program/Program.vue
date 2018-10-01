<template>
    <div>
        <div v-if="spinner">
        <div class="spinner">
            <breeding-rhombus-spinner
            :size="65"
            color="#EA771D"
            />
        </div>
        </div>
        <div v-else class="container imageProgram">
        <div class ="containerImg">
            <img :src="this.imgProgram.img">
        </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase';
import { BreedingRhombusSpinner } from 'epic-spinners';

export default {
    name:'Program',
    components:{
        BreedingRhombusSpinner,
        },

  
  data() {
    return {
      title: 'Program',
      users: [],
      spinner: true,
      imgProgram: '',
      fecha: '',
      programa: {},
      days: 0,
      temporal: {},
      firebaseInformacion: {},
    };
  },
  methods: {
    setData() {
      const starCountRef = firebase.database().ref('/');
      starCountRef.once('value', (snapshot) => {
        this.fecha = snapshot.val().fecha;
        this.programa = snapshot.val().programa;
        this.imgProgram = snapshot.val().imagenPrograma;

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
@import './Program.css';
</style>

