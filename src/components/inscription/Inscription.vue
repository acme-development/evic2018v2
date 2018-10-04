<template>
  <div class="section-margin">
    <div class="container ">
      <div id="title-box">
        <h2 class="title "> Inscripción </h2>
        <div  class="separator-title"></div>
      </div>
      <div class="table-content">
        <div class="subtitle">
          <h3>
            <i class="fas fa-angle-right"></i>
            Precios
          </h3>
        </div>
        <b-table :data="this.inscription.precios.data" :columns="columns" >
          <template slot-scope="props" slot="header">
            <div class="table-head">
                {{ props.column.label }}
            </div>
          </template>
        </b-table>
        <h3 class="students-details">{{this.inscription.precios.condicion}}</h3>
      </div>
        <!--
      <div id="payment-box">
        <div class="subtitle">
          <h3>
            <i class="fas fa-angle-right"></i>
            {{this.inscription.medioPago.titulo}}
          </h3>
        </div>
        <div id="info-payment">
          <div class="content">
              <b-table :data="data" :columns="columns"></b-table>
          </div>
        </div>
      </div>
        -->
    </div>
  </div>
</template>


<script>
import firebase from 'firebase';
export default {
	name:'Inscription',
	components:{},
  data() {
    return {
      inscription : '',
      /*data: [
        { type: 'Profesionales (3 días)', 'price-before': '$135.000', 'price-after': '$145.000' },
        { type: 'Profesionales (1 día)', 'price-before': '$50.000', 'price-after': '$55.000' },
        { type: 'Miembros IEEE', 'price-before': '$57.000', 'price-after': '$63.000' },
        { type: 'Estudiantes', 'price-before': '$35.000', 'price-after': '$39.000' },
        { type: 'Estudiantes IEEE (miembro activo)', 'price-before': '$17.000', 'price-after': '$20.000' },
      ],*/
      columns: [
        {
          field: 'type',
          label: 'Tipo',
          meta: 'Type',
        },
        {
          field: 'price-before',
          label: 'Precio antes de 30 Noviembre',
          centered: true,
        },
        {
          field: 'price-after',
          label: 'Precio después de 30 Noviembre',
          centered: true,
        },
      ],
    };
  },
  methods:{
    setData(){
      const starCountRef = firebase.database().ref('/inscripcion');
      starCountRef.once('value', (snapshot) => {
        const inscription = snapshot.val();
        console.log(inscription);
        this.inscription = inscription;
        this.spinner = false;
      });
    },
  },
  mounted(){
    this.setData();
  }
};
</script>

<style>
@import './Inscription.css';
</style>


