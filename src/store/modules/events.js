import eventsData from '../../eventsData.json'
console.log(eventsData.events)

const state ={
    events : eventsData.events
};
const getters={
    allEvents: (state)=> state.events
};
const actions ={
    deleteEvent ({commit},event){
        //this.events=this.events.filter(item=> item!==deleteEvent);
        commit('deleteEvent',event)
      },
      addEvent({commit},event){
        commit('addEvent',event)
          //this.state.events =[...this.allEvents,newEvent];
      },
      markGoing({commit},event){
        commit("markGoing",event)
      }
};
const mutations={
    addEvent :(state,event)=> (state.events=[...state.events,event]),
    deleteEvent:(state,event)=>(state.events=state.events.filter(item=> item!==event)),
    markGoing:(state,event)=>{
        let i = state.events.findIndex(f => f.id === event.id);
        state.events[i].completed = !state.events[i].completed;
    }
   
};


export default{
    state,
    getters,
    actions,
    mutations
}