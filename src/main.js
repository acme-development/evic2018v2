// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'; 
import Buefy from 'buefy';
import VueSVGIcon from 'vue-svgicon';
import firebase from 'firebase';
import VueScrollTo from 'vue-scrollto';

import Lightbox from 'vue-my-photos';

Vue.component('lightbox', Lightbox);

Vue.use(Lightbox);
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
import 'buefy/dist/buefy.css';
import 'font-awesome/css/font-awesome.css';

Vue.config.productionTip = false

// Initialize Firebase
const config = {
  apiKey: "AIzaSyA8QE9g-kzyIEoMTSErN9BpOrhJhIp0E4I",
    authDomain: "evic2018usach-v2.firebaseapp.com",
    databaseURL: "https://evic2018usach-v2.firebaseio.com",
    projectId: "evic2018usach-v2",
    storageBucket: "evic2018usach-v2.appspot.com",
    messagingSenderId: "1069255025830"
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
