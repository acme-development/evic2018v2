// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'; 
import Buefy from 'buefy';
import VueSVGIcon from 'vue-svgicon';
import firebase from 'firebase';
import VueScrollTo from 'vue-scrollto';

Vue.use(Buefy);
Vue.use(VueSVGIcon);
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})
//import 'font-awesome/css/font-awesome.css';
import 'buefy/dist/buefy.css';
import 'font-awesome/css/font-awesome.css';

Vue.config.productionTip = false

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyByIUXLRk9lWZ_3OWlmr4QZGGhpGRz4l8U',
  authDomain: 'evic-2018-usach.firebaseapp.com',
  databaseURL: 'https://evic-2018-usach.firebaseio.com',
  projectId: 'evic-2018-usach',
  storageBucket: '',
  messagingSenderId: '185555076703',
};
firebase.initializeApp(config);


Vue.use(firebase);
require("./assets/css/style.css");
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
