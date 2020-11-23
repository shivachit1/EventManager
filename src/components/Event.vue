<template>
    <div class="container">
    
        
            <h3>{{event.eventName}}</h3>
            <h4>Organiser: {{event.createdBy}}</h4>
            <h5>{{event.eventDate}}</h5>
            <h5>{{event.startTime}} - {{event.endTime}}</h5>
            <span>{{event.eventAddress}}</span>
            
            <p>{{event.eventDescription}}</p>
       
         <button v-if="!event.going" class="green-btn" @click="mark">Join Event</button>
         <div v-if="event.going">
             <h4>You are going</h4>
            <button v-if="event.going" class="red-btn" @click="mark">Unjoin Event</button>
         </div>
         
    </div>
</template>

<script>
import {mapActions } from 'vuex';
export default {
    name:"Event",
    props:["event"],
    methods:{
        ...mapActions(['deleteEvent']),
        ...mapActions(['markGoing']),
       deleteEvnt(){
           this.deleteEvent(this.event);
       },
       mark(){
            this.markGoing(this.event);
       }
    }
}
</script>

<style scoped>

.container{
    padding:0px
}
h3{
    background-color: rgba(211, 82, 12, 0.801);
    color: rgb(245, 238, 238);
    margin:0;
    padding: 20px;
    border-radius: 10px 10px 0px 0px;
}
h5{
    margin:0;
     color: blue;
}
h6{
    margin:4;
   
}
span{
        color: #42b983;
        font-size: 18px;
        font-weight: bold;
        display: inline-block;
        margin:10px;
}
p{
    margin:8px;
}
.red-btn{
    background-color: rgb(194, 63, 63);
    color: rgb(255, 255, 255);
    padding: 8px;
    margin:20px;
    height: fit-content;
    outline: none;
    text-decoration: none;
    border: none;
    border-radius: 10px;
    font-weight: bold;
}
.green-btn{
    background-color: rgb(6, 190, 68);
    color: rgb(252, 252, 252);
    padding: 8px;
    margin:25px;
    height: fit-content;
    outline: none;
    text-decoration: none;
    border: none;
    border-radius: 10px;
    font-weight: bold;
}

.del:hover{
    color: #000;
}
</style>