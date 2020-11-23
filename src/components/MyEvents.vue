<template>
    <div class="flex-container"> 
            <p>{{user.userName}}</p>
        <div v-bind:key="event.id" v-for="event in myEvents" class="item-div">
            
            <Event v-bind:event="event"/>
        </div>
    </div>
</template>

<script>

import Event from './Event';
import {mapActions,mapGetters } from 'vuex';
export default {
   name:"MyEvents",
   components:{
       Event
   },
   data(){
    return{
        user:'',
        events:''

    }
   },
   methods:{
    ...mapGetters(["getUser"]),
    ...mapActions(["getMyEvents"])
     
},
mounted(){
    this.getMyEvents(this.getUser());
},
computed:mapGetters(["myEvents"]),
}

</script>

<style scoped>
.flex-container{
   margin: 20px;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
}
.item-div{
  flex-grow: 1;
  flex: 0 1 calc(33% - 2.9em);
  height: auto;
  display: inline-block;
  text-align: center;
  margin: 12px;
  padding: 4px;
  border-radius: 20px 20px;
  box-shadow: 0 4px 8px 0 rgba(223, 151, 151, 0.575);
}

@media only screen and (max-width: 600px) {
 .item-div{
  flex: 0 1 calc(100% - 2.9em);
}
}
</style>