<template>
  <div id="app">
    <AddEvent/>
    <EventList/>
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
