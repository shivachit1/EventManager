import Vuex from 'vuex';
import Vue from 'vue';
import user from './modules/user'
import  events from './modules/events';
import  modal from './modules/modal';

// Load Vuex
Vue.use(Vuex);

// create Store

export default new Vuex.Store({
    modules:{
        user,
        events,
        modal
    }
});
