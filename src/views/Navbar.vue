<template>
  <div v-if="getUser.userAvailable" id="app">
   
      <div id="nav">
          <ul>
        <li><router-link to="/">Public Event</router-link></li>
        <li><router-link to="/about">My Event</router-link></li>
      </ul> 
      </div>
      <router-view/>
    
  </div>
</template>

<script>
import {mapGetters } from 'vuex';
export default {
 name:"Navbar",
  computed: mapGetters(["getUser"])
  
}
</script>

<style>

#nav {
  text-align: center;
  justify-content: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
.links-div{
    text-align: center;
}
li{
  display: inline;
  margin-right: 10px;
  text-align: center;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
