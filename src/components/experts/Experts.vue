<template>  
  <div class="section-margin">
    <div class="container"> 
      <div class ="title">Plenarias</div>
      <div class="separator-title"></div>
      
      <div class="overlay" v-if="spinner">
          <breeding-rhombus-spinner :animation-duration="2000" :size="65" color="#EA771D"/>
      </div>  
      <div v-else id="item-content">
      
        <div        
        class="expert-content"
        v-for="(value) in firebaseInformacion"
        v-bind:key="value.name">
          <div class="columns">
            <div class="name-expert column is-one-quarter">
                <h3> {{value.name}} </h3>
            </div>
          </div>
          <div class="columns"> 
            <div class="column is-one-quarter details-expert">
              <img :src ="value.foto"/>
              <div class="info-expert">
                <a v-bind:href="value.link"><h4> {{ value.corta }}</h4></a>
              </div>
            </div>
            <div class="column ">
              <div id="info-expert">
                <h3>
                {{ value.larga}}
                </h3>
              </div>
            </div>
          </div>
          <div class="separator-experts">
          </div>
      </div>
    </div>
  </div>

  </div>
    <!--
    <div>
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
      <div class ="contenedor-nombre">
        <div>
          <h3>Oradores/as de Plenarias</h3>
        </div>
        <div>
          <hr>
        </div>
      </div>
        <div
        class ="contenedor-interior"
        v-for="(value) in firebaseInformacion"
        v-bind:key="value.name">
          <div class="name">
            <h3>
              {{ value.name }}
            </h3>
          </div>
          <div class="info">
            <h3>
              {{ value.larga}}
            </h3>
          </div>
        </div>
    </div>
  </div>
  -->
</template>

<script>    
import firebase from 'firebase';
import { BreedingRhombusSpinner } from 'epic-spinners';

export default {
    name:'Experts',
    components: {
        BreedingRhombusSpinner,
    },
data() {
    return {
    title: 'Program',
    users: [],
    spinner: true,
    firebaseInformacion: {},
    textAboutEvic: 'El objetivo de la Escuela de Verano es promover la Inteligencia Computacional, reuniendo áreas más amplias tales como Control Inteligente y Sistemas, Robótica, Visión por Computador, Neurociencia Computacional, Ciencia de Datos y Big Data, entre otros, y difundir tanto los conocimientos básicos como las últimas investigaciones entre estudiantes de pregrado y postgrado, profesores universitarios y profesionales de Chile y otros países latinoamericanos.',
    center: { lat: -33.4504466, lng: -70.6827894 },
    markers: [
        {
        position: { lat: -33.4504466, lng: -70.6827894 },
        },
    ],
    };
},
methods: {
    setData() {
    const starCountRef = firebase.database().ref('/oradores');
    starCountRef.once('value', (snapshot) => {
        this.firebaseInformacion = snapshot.val();
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
    @import './Experts.css';
</style>


