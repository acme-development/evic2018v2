<style>
	@import './Ubication.css';
</style>
<template>
	<div class="section-margin">
		<div class="container">
			<div class="title white"> Ubicación </div>
			<div class="separator-title"></div>
			
			<div class="direction">
				<h2>{{ direccion }}</h2>
			</div>
			<div id = "map" class="container">
				<iframe class ="map-content" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.122442362666!2d-70.68472348521755!3d-33.44611638077509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c4598d364523%3A0xd5ace8491dea67d6!2sCENI+-+Usach!5e0!3m2!1ses!2scl!4v1537459982272" width="100%" height="500" frameborder="0" style="border:0" allowfullscreen></iframe>
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