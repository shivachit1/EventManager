const state ={
    user :{
    userName : '',
    userAvailable:false
    }
};
const getters={
    getUser: (state)=> state.user
};
const actions ={
    saveUser ({commit},user){
        commit('saveUser',user);
        console.log('user Save'+user.userName)
      }
};
const mutations={
    saveUser :(state,user)=> (state.user=user)
};


export default{
    state,
    getters,
    actions,
    mutations
}