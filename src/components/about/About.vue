<template>
    <div>
    <div class= "contenedor-exterior">
      <div class ="contenedor-nombre">
        <div>
          <h3>¿Qué es EVIC?</h3>
        </div>
        <div>
          <hr>
        </div>
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
</template>


<script>
export default {
  name: 'About',
}
</script>

<style >
    @import './About.scss';
</style>
