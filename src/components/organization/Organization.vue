
<style>
@import url('./Organization.css');
</style>

<template>
    <div class="section-margin packages">
        <h3 class="title title-w">Organizadores</h3>
        <div class="separator-title"></div>
        <ul class="grid">
            <li
            v-for="(value, index) in organizadores"
            v-bind:key="index">
                <h2>{{ value.cargo }}</h2>
                <h4>{{ value.name }}</h4>
                <p>{{ value.corta }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import firebase from 'firebase';
export default {
    name:'Organization',
    data(){
        return{
            organizadores: {},
        }
    },
    methods:{
        setData(){
            const starCountRef = firebase.database().ref('/');
            starCountRef.once('value', (snapshot) => {    
                this.organizadores = snapshot.val().organizadores;
            });
        }
    },
    mounted(){
        this.setData();
    }
}
</script>

