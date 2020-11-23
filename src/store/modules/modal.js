

const state ={
    modal : false
};
const getters={
    getModal: (state)=> state.modal
};
const actions ={
    handleModal ({commit}){
        commit('handleModal')
      }
};
const mutations={
    handleModal :(state)=> (state.modal=!state.modal),
};


export default{
    state,
    getters,
    actions,
    mutations
}