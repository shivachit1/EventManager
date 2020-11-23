<template>
  <div id="app">
    <h2>Event Manager</h2>
    <div id="nav">
      
      <ul>
        <li><router-link to="/">Public Event</router-link></li>
        <li><router-link to="/about">My Event</router-link></li>
      </ul> 
      
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow:scroll;
}

#nav {
  padding: 0px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
li{
  display: inline;
  margin: 10px;
  text-align: center;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
