<style src = "./Exhibitors.css"></style>
<template>
    <div class="container">
        <div class ="title title-w">Tutoriales</div>
        <div class="separator-title"></div>
        <div class="contenedor-expositores">
            <div class="columns is-multiline is-mobile is-centered">
                <div class="column is-one-third expositor" v-for="(value) in firebaseInformacion" v-bind:key="value.name">
                    <div align="center" >
                        <div v-if="value.resumen !== undefined">
                             <b-tooltip
                            id="text-tool-tip"
                            :label="value.resumen"
                            position="is-bottom"
                            size="is-large"
                            multilined>    
                            <figure class ="image is-128x128">
                                <img :src="value.image" class="is-rounded">
                            </figure>
                            </b-tooltip>
                        </div>
                        <div v-else>
                            <b-tooltip  
                            id="text-tool-tip"
                            label="Resumen no disponible"
                            position="is-bottom"
                            size="is-large"
                            multilined>    
                            <figure class ="image is-128x128">
                                <img :src="value.image" class="is-rounded">
                            </figure>
                            </b-tooltip>
                        </div>
                       
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
                        <div v-if="value.extra!=''">
                            <h2 v-html="value.extra"></h2>
                        </div>
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
        },
        createToolTips: function(){
                
        }
    },
}
</script>


