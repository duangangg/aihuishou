import {LOGIN_UERSCHANGE,LOGIN_PWDCHANGE} from './actionTypes';
const defaultState = {
    user:'',
    pwd:''
}

export default (state = defaultState,action) => {
    console.log('我是register独有的reducers')
    if(action.type === LOGIN_UERSCHANGE){
      let newState = JSON.parse(JSON.stringify(state));
      newState.user = action.Input;
      console.log(newState);
      return newState;
    }

    if(action.type === LOGIN_PWDCHANGE){
        let newState = JSON.parse(JSON.stringify(state));
        newState.pwd = action.pwd;
        console.log(newState);
        return newState;
      }
    return state;
}

 