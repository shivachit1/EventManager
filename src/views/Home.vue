<template>
  <div id="app">
    <AddEvent v-on:add-event="addEvent"/>
    <EventList v-bind:eventList="eventList" v-on:del-event="deleteEvent"/>
  </div>
</template>

<script>
import EventList from '../components/eventList';
import AddEvent from '../components/AddEvent';
export default {
  name: 'Home',
  components: {
    AddEvent,
    EventList
  },
  data(){
    return{
      eventList :[
        {
          id:1,
          name:"Birthday Party",
          eventDescription:"Shiva's Birthday Party",
          completed:false
        },
        {
          id:2,
          name:"Wedding Ceremony",
          eventDescription:"Nikul and Ronda weeding ceremondy",
          completed:false
        },
        {
          id:3,
          name:"Baby Shower",
          eventDescription:"baby shower at Ronda house",
          completed:true
        }

      ]
    }
   
  },
  methods:{
    deleteEvent (deleteEvent){
      this.eventList=this.eventList.filter(item=> item!==deleteEvent);
    },
    addEvent(newEvent){
        this.eventList =[...this.eventList,newEvent];
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
