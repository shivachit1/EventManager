<template>
  <div>
      <form v-if="!getUser.userAvailable" @submit="saveUserData" class="form">
        <label>Enter your name  here: </label>
        <input class="input" type="text" v-model="userName" placeholder="Full Name" required>
        <input class="btn" type="submit" value="save">
        
      </form>

  </div>
</template>

<script>

import {mapActions,mapGetters } from 'vuex';
export default {
 name:"UserName",
 data (){
   return {
    userName:''
   }
 },
   methods: {
     ...mapActions(["saveUser"]),
    saveUserData (e) {
      e.preventDefault();

            const user = {
                userName: this.userName,
                userAvailable:true
            }
            this.saveUser(user);
            }
  },
  computed: mapGetters(["getUser"])
  
}
</script>

<style scoped>
   .form {
  position: fixed;
  text-align: center;
  width: 60%;
  top: 25%;
  left: 50%;
  padding: 10px;
  margin-right: 40px;
  transform: translate(-50%, -50%);
  color: black;
  transition: all 3s ease;
  border-radius: 20px 20px;
}
  
   .input{
      width: 90%;
        padding: 5px;
        margin: 20px auto;
       text-align:center;
       display: block;
       border: 0px 0px 0px 0px bisque;
   }
   
   .btn{
    background-color: rgb(4, 122, 43);
    color: rgb(255, 255, 255);
    padding: 8px;
    margin:8px;
    height: fit-content;
    outline: none;
    text-decoration: none;
    border: none;
    border-radius: 10px;
   }
</style>