<style>
    @import url('./Minifooter.css');
</style>

<template>
    <div id="minifooter">
        <div id="imgs-container-minifooter" class="columns">
            <div class="column img-box-footer"
                v-for="(value, index) in data"
                v-bind:key="index">
                <img class ="img-miniFooter" :src="value.link">
            </div>
        </div>
        
    </div>
</template>

<script>
import firebase from 'firebase';
export default {
    name:'Minifooter',
    data(){
        return{
            data :[],
        };
    },
    methods:{
        setData(){
            const starCountRef = firebase.database().ref('/auspiciadores');
            starCountRef.once('value', (snapshot) => {
                this.data = snapshot.val().footerInicio;
                
            });
        },
    },
    mounted() {
            this.setData();
    },

    
}
</script>


