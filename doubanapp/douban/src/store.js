import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
   lists:[],


  },
  mutations: {
  additem(state,val){

  	state.lists.push(val)
  }
  },
  actions: {
    addq(state){
    	
    }
  },
});
