<template>
  <div>
      <form v-if="!getUser.userAvailable" @submit="saveUserData" class="form">
        <label>Enter your name  here: </label>
        <input class="input" type="text" v-model="userName" placeholder="Full Name" required>
        <input class="btn" type="submit" value="Save">
        
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
label{
    font-weight: bold;
}
  
   .input{
       font-weight: bold;
      width: 90%;
        padding: 5px;
        margin: 20px auto;
       text-align:center;
       display: block;
       border: 0px 1px 1px 0px rgb(224, 90, 18);
   }
   
   .btn{
       width: 80px;
   background-color: rgb(6, 190, 68);
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