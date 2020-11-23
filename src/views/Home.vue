<template>
  <div id="app">
    <button class="blue-btn" @click="createEvent">Create Event</button>
    <AddEvent v-if="getModal"/>
    <EventList/>
  </div>
</template>

<script>
import EventList from '../components/eventList';
import AddEvent from '../components/AddEvent';
import {mapGetters,mapActions } from 'vuex';
export default {
  name: 'Home',
  components: {
    AddEvent,
    EventList
  },
  computed:mapGetters(['getModal']),
   methods: {
     ...mapActions(["handleModal"]),
    createEvent () {
    console.log("called");
            this.handleModal();
            
        }
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
  text-align: center;
}
.blue-btn{
    background-color: rgb(25, 68, 185);
    color: rgb(251, 251, 251);
    padding: 8px;
    margin:8px;
    height: fit-content;
    outline: none;
    text-decoration: none;
    border: none;
    border-radius: 10px;
}


</style>
