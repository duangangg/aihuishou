const defaultState ={
    bannerImg:[],
}
export default (state = defaultState,action)=>{
    if(action.type==='INDEX'){
        let newState=Object.assign({},state);
        newState.bannerImg = action.list;
        return newState;
    }
    return state
}