
<style>
@import url('./Scholarship.css');
</style>


<template>
    <div class="section-margin">
    <div v-if="spinner">
      <div class="spinner">
          <breeding-rhombus-spinner
          :size="65"
          color="#EA771D"
          />
      </div>
    </div>
    <div v-else class="container ">
      <div id="header-program">
        <h2 class="title title-w" >{{this.title}}</h2>
        <div class="separator-title"></div>
      </div>
      <div class = "box-info box-sch" id="content-box">
        <div id ="general-content">
          <div class="subtitle subtitle-w"><h3><i class="fas fa-angle-right orange"></i> {{this.general.title}}</h3></div>
          <div class="content content-w beautyletter">
            <span class="tablecell">
              <div class="nowrap"> {{this.general.data[0]}} </div>
              <div class ="tablecell" v-for="(value,index) in this.general.emails" v-bind:key ="value.data">
                <div id="email" class ="nowrap" v-if="(general.emails.length-1) == index" >
                  {{value}},&nbsp
                </div>
                <div id="email" class="nowrap" v-else>
                  {{value}}&nbsp y &nbsp
                </div>
              </div>
              <div class="nowrap tablecell content-w beautyletter"> {{this.general.data[1]}} </div>
            </span>
            </div>
        </div>
        <div class = "box-info" id="detail-content">
          <div class="subtitle subtitle-w"><h3><i class="fas fa-angle-right orange"></i> {{this.detail.title}}</h3></div>
          <div class="content content-w beautyletter">
            <ul >
              <div class="data-row-sch" v-for="(value) in this.detail.data" v-bind:key="value.data">
                <li>{{ value }}</li>
              </div>
            </ul>
          </div>
        </div>
        <div class="box-info" id="special-content">
          <div class="subtitle subtitle-w"><h3><i class="fas fa-angle-right orange"></i> {{this.special.title}}</h3></div>
          <div class="content content-w beautyletter">
            <div id="par-special">
              <p>{{this.special.par}}</p>
            </div>
            <ul >
              <div class="data-row-sch" v-for="(value) in this.special.data" v-bind:key="value.data">
                <li>{{ value }}</li>
              </div>
            </ul>
          </div>
        </div>
        <div class="box-info" id="special-content" v-for="(value) in this.becasmujeres" v-bind:key="value.data">
          <div class="subtitle subtitle-w"><h3><i class="fas fa-angle-right orange"></i> {{ value.title}}</h3></div>
          <div class="content content-w link-orange beautyletter">
            <p v-html="value.data"></p>
          </div>
        </div>
        <div class="box-info">
          <div class="subtitle content-w link-orange"><a v-bind:href="becasmujeres[0].link">IEEE Computational Intelligence Society</a></div>
        </div>
        <div class = "box-info" id="footer-content">
          <div class="subtitle subtitle-w"><h3><i class="fas fa-angle-right orange"></i> {{this.footer.title}}</h3></div>
          <div class="content content-w beautyletter">
            <ul >
              <div class="data-row-sch" v-for="(value) in this.footer.data" v-bind:key="value.data">
                <li>{{ value }}</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import firebase from 'firebase';
export default {
	name:'Scholarship',
	components:{},
  data() {
    return {
        title:'',
        detail:'',
        general:'',
        special:'',
        footer:'',
        becasmujeres: '',
    };
  },
  methods:{
    setData(){
      const starCountRef = firebase.database().ref('/becas');
      starCountRef.once('value', (snapshot) => {
        const becas = snapshot.val();
        this.general = becas.general;
        console.log(becas.general.data);
        this.detail = becas.detail;
        this.footer = becas.footer;
        this.title = becas.title;
        this.special = becas.especial;
        this.becasmujeres = becas.becasmujeres;
        this.spinner = false;
      });
    },
  },
  mounted(){
    this.setData();
  },
  
};
</script>
