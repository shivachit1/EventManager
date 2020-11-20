<template>
    <div class="flex-container"> 
        
        <div v-bind:key="event.id" v-for="event in eventList" class="item-div">
            
            <Event v-bind:event="event" v-on:del-event="$emit('del-event',event)"/>
        </div>
    </div>
</template>

<script>

import Event from './Event';
export default {
   name:"EventList",
   components:{
       Event
   },
   props:["eventList"]
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
</style>