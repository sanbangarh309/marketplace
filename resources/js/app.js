
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import VueSocketio from 'vue-socket.io';
import socketio from 'socket.io-client'
window.Vue = require('vue');
const VueScrollTo = require('vue-scrollto')
Vue.use(VueScrollTo);
Vue.use(VueSocketio, socketio(':6999'));

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('Message', require('./components/Message.vue'));
Vue.component('User', require('./components/User.vue'));
Vue.component('Chat', require('./components/ChatApplication.vue'));

const app = new Vue({
    el: '#app',
    data: {
	    userID: null
	},
	mounted () {
	    // Assign the ID from meta tag for future use in application
	  this.userID = document.head.querySelector('meta[name="userID"]').content
	}
});
