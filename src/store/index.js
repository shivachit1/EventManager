import Vuex from 'vuex';
import Vue from 'vue';
import  events from './modules/events';

// Load Vuex
Vue.use(Vuex);

// create Store

export default new Vuex.Store({
    modules:{
        events
    }
});
