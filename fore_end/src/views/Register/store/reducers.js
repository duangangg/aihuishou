import {REGISTER_UERSCHANGE,REGISTER_PWDCHANGE} from './actionTypes';
const defaultState = {
    user:'',
    pwd:''
}

export default (state = defaultState,action) => {
    console.log('我是register独有的reducers')
    if(action.type === REGISTER_UERSCHANGE){
      let newState = JSON.parse(JSON.stringify(state));
      newState.user = action.Input;
      console.log(newState);
      return newState;
    }

    if(action.type === REGISTER_PWDCHANGE){
        let newState = JSON.parse(JSON.stringify(state));
        newState.pwd = action.pwd;
        console.log(newState);
        return newState;
      }
    return state;
}

 