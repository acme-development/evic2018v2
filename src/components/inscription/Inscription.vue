<template>
  <div class="section-margin">
    <div class="container ">
      <div>
      <h2 class="title "> Inscripción </h2>
      <div class="separator-title separation"></div>
      </div>
      <div class="table-content">
        <b-table :data="data" :columns="columns" >
          <template slot-scope="props" slot="header">
            <div class="table-head">
                {{ props.column.label }}
            </div>
          </template>
        </b-table>
        <h3 class="students-details"> ** Estudiantes deben adjuntar una copia de su
          ID de estudiante y algún
          documento o carta (todo en un mismo documento) que acredite su dedicación
          a tiempo completo a un programa de pre o postgrado. Estudiantes part-time
          tendrán el beneficio de descuento que aplica a miembros profesionales del IEEE. </h3>
      </div>
    </div>
  </div>
</template>


<script>
export default {
	name:'Inscription',
	components:{},
  data() {
    return {
      data: [
        { type: 'Profesionales (3 días)', 'price-before': '$135.000', 'price-after': '$145.000' },
        { type: 'Profesionales (1 día)', 'price-before': '$50.000', 'price-after': '$55.000' },
        { type: 'Miembros IEEE', 'price-before': '$57.000', 'price-after': '$63.000' },
        { type: 'Estudiantes', 'price-before': '$35.000', 'price-after': '$39.000' },
        { type: 'Estudiantes IEEE (miembro activo)', 'price-before': '$17.000', 'price-after': '$20.000' },
      ],
      columns: [
        {
          field: 'type',
          label: 'Asistente',
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
};
</script>

<style>
@import './Inscription.css';
</style>


