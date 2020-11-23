<template>
  <div class="container">
    <form class="form" @submit="onSubmit">
      <button @click="hideModal" class="close">x</button>
      <span>Create New Event</span>

      <div class="flex">
        <label>Event Title:</label>
        <input
          type="text"
          v-model="eventName"
          placeholder="Event title"
          required
        />
        <div class="flex">
          <label>Event Date:</label>
          <input
            type="date"
            v-model="eventDate"
            placeholder="Event time"
            required
          />

          <label>Event Start time:</label>
          <input
            type="time"
            v-model="startTime"
            placeholder="Event start time"
            required
          />
          <label>Event End time:</label>
          <input
            type="time"
            v-model="endTime"
            placeholder="Event end time"
            required
          />
        </div>

        <label>Event Description:</label>
        <textarea
          maxlength="400"
          rows="4"
          v-model="eventDescription"
          placeholder="Event Description here"
        ></textarea>

        <label>Event Address:</label>
        <input
          type="text"
          v-model="eventAddress"
          placeholder="Event Address"
          required
        />
      </div>

      <input class="blue-btn" type="submit" value="Save Event" />
    </form>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import { mapActions,mapGetters } from "vuex";
export default {
  name: "AddEvent",
  data() {
    return {
      showModal: false,
      eventName: "",
      eventDate: "",
      startTime: "",
      endTime: "",
      eventDescription: "",
      eventAddress: "",
    };
  },
  methods: {
    ...mapActions(["addEvent"]),
    ...mapActions(["handleModal"]),
    ...mapGetters(["getUser"]),
    onSubmit(e) {
      e.preventDefault();
      const newEvent = {
        id: uuidv4(),
        eventName: this.eventName,
        createdBy:this.getUser().userName,
        eventDate: this.eventDate,
        startTime: this.startTime,
        endTime: this.endTime,
        eventDescription: this.eventDescription,
        eventAddress: this.eventAddress,
      };
      this.addEvent(newEvent);
      this.handleModal();
    },
    hideModal() {
      this.handleModal();
    },
  },
  computed:{
    
  }
};
</script>

<style scoped>
.container {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 2s ease;
  justify-content: center;
  overflow-y:scroll;
}

.form {
  position: fixed;
  text-align: center;
  justify-content: center;
  background-color: rgb(255, 255, 255);
  width: fit-content;
  height: auto;
  top: 50%;
  left: 50%;
  padding: 10px;
  margin-right: 40px;
  transform: translate(-50%, -50%);
  color: black;
  transition: all 3s ease;
  border-radius: 20px 20px;
}
span {
  color: #42b983;
  font-size: 24px;
  font-weight: bold;
  margin: 20px;
  display: inline-block;
}
label {
  color: #42b983;
  font-size: 12px;
  font-weight: bold;
}
textarea,
input {
  font-size: 14px;
  margin: 5px;
  flex: 100%;
  font-weight: italic;
}
.flex {
  width: 300px;
  display: flex;
  flex-wrap: wrap;
}
.btn {
  flex: 20%;
  margin: 10px;
  padding: 10px;
}

.blue-btn {
  background-color: rgb(25, 68, 185);
  color: rgb(251, 251, 251);
  padding: 8px;
  margin: 8px;
  height: fit-content;
  outline: none;
  text-decoration: none;
  border: none;
  border-radius: 10px;
}

.close {
  color: rgb(250, 250, 250);
  padding: 6px;
  float: right;
  right: 0;
  top: 0;
  background-color: rgba(243, 49, 49, 0.842);
  border-radius: 10px;
  text-decoration: none;
  border: transparent;
  outline: none;
}
.close:hover {
  background-color: rgb(251, 5, 5);
}

@media only screen and (max-width: 600px) {
 .form{
  flex:90%;
}
.flex {
  width: fit-content;
  display: flex;
  flex-wrap: wrap;
}
}

@media only screen and (max-height: 300px) {
 .form{
  height: auto;
  overflow: scroll;
}
.flex {
  width: fit-content;
  height: auto;
}
}
</style>
