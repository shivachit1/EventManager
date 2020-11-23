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
    background-color: rgba(55, 40, 228, 0.884);
    color: rgb(255, 255, 255);
    padding: 10px;
    margin:8px;
    height: fit-content;
    outline: none;
    text-decoration: none;
    border: none;
    border-radius: 5px;
    font-weight: bold;
}


</style>
