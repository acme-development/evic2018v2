<style src = "./Exhibitors.css"></style>
<template>
    <div class="container">
        <div class ="title title-w">Tutoriales</div>
        <div class="separator-title"></div>
        <div class="contenedor-expositores">
            <div class="columns is-multiline is-mobile is-centered">
                <div class="column is-one-third expositor" v-for="(value) in firebaseInformacion" v-bind:key="value.name">
                    <div align="center">
                        <figure class ="image is-128x128">
                            <img :src="value.image" class="is-rounded">
                        </figure>
                    </div>
                    <div class="expositor">
                        <h3>
                            {{ value.name }}
                        </h3>
                    </div>
                    <div class="institucion">
                        <h3>
                            {{ value.institucion }}
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
    data: function(){
        return{
            firebaseInformacion: {},
        }
    },
    mounted: function(){
        this.setData();
    },
    methods:{
        setData: function(){
            const starCountRef = firebase.database().ref('expositores');
            starCountRef.once('value', (snapshot) => {
                this.firebaseInformacion = snapshot.val();
            });
        }
    },
}
</script>


