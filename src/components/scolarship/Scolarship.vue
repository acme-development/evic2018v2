
<style>
@import url('./Scolarship.css');
</style>


<template>

    <div class="container">
        <div id="title-box">
            <h2 class="title "> Inscripción </h2>
            <div  class="separator-title"></div>
        </div>
    </div>
</template>


<script>
import firebase from 'firebase';
export default {
	name:'Scolarship',
	components:{},
  data() {
    return {
        detail:'',
        general:'',
        footer:'',
    };
  },
  methods:{
    setData(){
      const starCountRef = firebase.database().ref('/becas');
      starCountRef.once('value', (snapshot) => {
        const becas = snapshot.val();
        this.general = becas.general;
        this.detail = becas.detail;
        this.footer = becas.footer;
        this.spinner = false;
      });
    },
  },
  mounted(){
    this.setData();
  }
};
</script>
