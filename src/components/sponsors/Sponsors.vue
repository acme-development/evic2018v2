<style>
@import url('./Sponsors.css');
</style>

<template>
    <div class="container">
        <div id ="head-sponsors">
            <h3 class="title">Patrocinadores</h3>
            <div class="separator-title"></div>
        </div>
        <ul class="flex-container wrap">
        <li
        class="flex-item"
        v-for="(value, index) in auspiciadores.patrocinadores"
        v-bind:key="index">

            <img :src="value.link">
        </li>
        </ul>

        <div id ="head-sponsors">
            <h3 class="title">Auspiciadores</h3>
            <div class="separator-title"></div>
        </div>
        <ul class="flex-container wrap columns">
        <li
        class=" flex-item column is-one-third"
        v-for="(value, index) in auspiciadores.auspiciadores"
        v-bind:key="index">
                <img :src="value.link">
                
        </li>
        </ul>

        <div id ="head-sponsors">
            <h3 class="title">Organizadores</h3>
            <div class="separator-title"></div>
        </div>
        <ul class="flex-container wrap">
        <li
        class="flex-item"
        v-for="(value, index) in auspiciadores.organizadores"
        v-bind:key="index">

            <img :src="value.link">
        </li>
        </ul>
    </div>
    
</template>

<script>
import firebase from 'firebase';
export default {
    name:"Sponsors",
    data(){
        return{
            spinner: true,
            auspiciadores: {}
        }
    },
    methods:{
        setData(){
            const starCountRef = firebase.database().ref('/auspiciadores');
            starCountRef.once('value', (snapshot) => {
                this.auspiciadores = snapshot.val();
                this.spinner = false;
            });
        }
    },
    mounted() {
    this.setData();
  },
}
</script>


