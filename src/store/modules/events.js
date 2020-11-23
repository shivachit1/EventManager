import eventsData from '../../eventsData.json'
console.log(eventsData.events)

const state ={
    events : eventsData.events,
    myEvents:''
};
const getters={
    allEvents: (state)=> state.events,
    myEvents:(state)=>state.myEvents
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
      },
      getMyEvents({commit},user){
          commit("getMyEvents",user);
          

      }
};
const mutations={
    addEvent :(state,event)=> (state.events=[...state.events,event]),
    deleteEvent:(state,event)=>(state.myEvents=state.myEvents.filter(item=> item!==event)),
    markGoing:(state,event)=>{
        let i = state.events.findIndex(f => f.id === event.id);
        state.events[i].going = !state.events[i].going;
    },
    getMyEvents:(state,user)=>{
        state.myEvents=state.events.filter(item=> item.createdBy==user.userName);
        console.log(state.myEvents.length)
    }
   
};


export default{
    state,
    getters,
    actions,
    mutations
}