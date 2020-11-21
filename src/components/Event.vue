<template>
    <div>
    
        <div>
            <h4>{{event.name}}</h4>
            <p>{{event.eventDescription}}</p>
            <p>Going: {{event.completed}}</p>
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