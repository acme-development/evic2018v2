<template>
  <div class="section-margin">
    <div class="container">
      <div id="title-box">
        <h2 class="title "> Inscripción </h2>
        <div  class="separator-title"></div>
      </div>
      <div class="table-content">
        <div class="subtitle"><h3><i class="fas fa-angle-right"></i> Precios</h3></div>
        <b-table :data="inscription.precios.data" :columns="columns" >
          <template slot-scope="props" slot="header">
            <div class="table-head">
                {{ props.column.label }}
            </div>
          </template>
        </b-table>
        <h3 class="students-details">{{ inscription.precios.condicion }}</h3>
      </div>
      <!--div class="payment-box">
        <div class="subtitle"><h3><i class="fas fa-angle-right"></i> {{ inscription.medioPagoNacional.titulo }}</h3></div>
        <div id="info-payment">
          <div class="content">
            <ul >
              <div v-for="(value) in inscription.medioPagoNacional.datos" v-bind:key="value.data">
                <li><div class="ins">{{value.title}}:</div> {{ value.data }}</li>
              </div>
            </ul>
          </div>
        </div>
      </div-->
      <div class="payment-box">
        <div class="subtitle"><h3><i class="fas fa-angle-right"></i> {{ inscription.medioPago.titulo }}</h3></div>
        <div id="info-payment">
          <div class="content">
            <p>{{ inscription.medioPago.description }}</p>
          </div>
        </div>
      </div>
      <div class="ins-button"><a v-bind:href="inscription.formulario"><button class="button is-medium is-primary">Inscribirse</button></a></div>
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
      inscription : {},
      internacional: {},
      payment:'',
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
        this.inscription = inscription;
        this.internacional = inscription.medioPago.datos;
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


