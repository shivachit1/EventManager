<template>
<form  @submit="onSubmit">
    <span>Create new Event</span>
    <div class="flex">
    
    <input type="text" v-model="eventName" placeholder="Event name" required>
    <input type="text" v-model="eventDescription" placeholder="Event Description" required>
    </div>
    
    <input type="submit" value="Add Item" class="btn">
    </form>
</template>

<script>
import {v4 as uuidv4} from 'uuid';
import { mapActions } from 'vuex';
export default {
    name:"AddEvent",
    data (){
       return{
            eventName:'',
            eventDescription:''
        }; 
    },
    methods:{
       ...mapActions(["addEvent"]),
        onSubmit(e){
            e.preventDefault();
            const newEvent = {
               id:uuidv4(),
            name:this.eventName,
            eventDescription:this.eventDescription,
            completed:false
            };

            this.addEvent(newEvent);
            this.eventName='';
            this.eventDescription="";
        }
    }
}
</script>

<style scoped>
    .flex{
        display: flex;
    }
    input{
        flex: 100%;
        margin: 5px;
    }
    .btn{
        flex: 20%;
        margin: 10px;
        padding: 10px;
    }

</style>