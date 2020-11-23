<template>
    <div class="container">
    
        <div>
            <h3>{{event.eventName}}</h3>
            <h6>{{event.eventDate}}</h6>
            <h6>{{event.startTime}} - {{event.endTime}}</h6>
            <span>{{event.eventAddress}}</span>
            <p>{{event.eventDescription}}</p>
        </div>
         <button class="green-btn" @click="mark">Going</button>
         <button class="red-btn" @click="deleteEvnt">May be</button>
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
    padding: 10px;
}
h6{
    margin:0;
}
span{
        color: #42b983;
        font-size: 18px;
        font-weight: bold;
        display: inline-block;
        margin:10px;
}
.red-btn{
    background-color: red;
    color: wheat;
    padding: 8px;
    margin:8px;
    height: fit-content;
    outline: none;
    text-decoration: none;
    border: none;
    border-radius: 10px;
}
.green-btn{
    background-color: rgb(6, 190, 68);
    color: wheat;
    padding: 8px;
    margin:8px;
    height: fit-content;
    outline: none;
    text-decoration: none;
    border: none;
    border-radius: 10px;
}

.del:hover{
    color: #000;
}
</style>