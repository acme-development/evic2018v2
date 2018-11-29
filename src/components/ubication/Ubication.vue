<style>
	@import './Ubication.css';
</style>
<template>
	<div class="section-margin">
		<div class="container">
			<div class="title title-w"> Ubicación </div>
			<div class="separator-title"></div>
			
			<div class="direction">
				<h2>{{ direccion }}</h2>
			</div>
			<div id = "map" class="container">
				<iframe class ="map-content" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.1323634973664!2d-70.68575498480082!3d-33.44585788077532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c459879db2bf%3A0xc35d3910756cc624!2sEdificio+VIME+-+USACH!5e0!3m2!1ses-419!2scl!4v1543506684453" width="100%" height="500" frameborder="0" style="border:0" allowfullscreen></iframe>
			</div>
			<div class= "contenedor-exterior">
				<div class ="contenedor-interior" v-for="(value, index) in firebaseInformacion" v-bind:key="index">
					<div class="subtitle-1">
						<h3>
						<i class="fas fa-angle-right orange"></i>
						{{ value.nombre }}
						</h3>
					</div>
					<div class="info">
						<h3>
						{{ value.descripcion}}
						</h3>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import firebase from 'firebase';
export default {
	name:'Ubication',
	data: function(){
		return{
			direccion: {},
			firebaseInformacion: {},
			infoUbicacion: {},
		}
	},
	mounted: function(){
		this.loadDirections();
	},
	methods:{
		loadDirections: function(){
			const starCountRef = firebase.database().ref('/');
			starCountRef.once('value', (snapshot) => {
			this.infoUbicacion = snapshot.val().ubicacion;
			this.firebaseInformacion = this.infoUbicacion.indicaciones;
			this.direccion = this.infoUbicacion.direccion;
			});
		},
	}
}
</script>