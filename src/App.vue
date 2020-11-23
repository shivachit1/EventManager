<template>
<div id="app">
  <h2>Event Manager</h2>
   <UserName/>
    <Navbar/>
</div>
 
</template>

<script>
import UserName from './views/UserName'
import Navbar from './views/Navbar'
export default {
 name:"App",
  components:{
       UserName,
       Navbar
   }
}
</script>

<style scoped>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h2{
  color: rgb(236, 93, 16);
}

</style>
