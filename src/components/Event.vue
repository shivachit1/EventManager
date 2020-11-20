<template>
    <div v-bind:class="{'is-completed':event.completed}">
        <input type="checkbox" v-on:change="markComplete">
        <div>
           
            
            <h4>{{event.name}}</h4>
            <p>{{event.eventDescription}}</p>
        </div>
         <button class="green-btn" @click="$emit('del-event',event)">Going</button>
         <button class="red-btn" @click="$emit('del-event',event)">May be</button>
    </div>
</template>

<script>
export default {
    name:"Event",
    props:["event"],
    methods:{
        markComplete(){
           this.event.completed=!this.event.completed;
        }
    }
}
</script>

<style scoped>

.is-completed{
    text-decoration: line-through;
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