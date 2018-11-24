const defaultState={
    HotName:[],
    Alist:[],
}

export default(state=defaultState,action)=>{
    if(action.type==='HotMap'){
        let newState = Object.assign({},state);
        newState.HotName=action.list;
        newState.Alist=action.list2;

        return newState;
    }
    return state;
}