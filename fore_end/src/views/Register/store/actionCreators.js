import {REGISTER_UERSCHANGE,REGISTER_PWDCHANGE} from './actionTypes';

export const userInp = (Input) => {
    return{
        type:REGISTER_UERSCHANGE,
        Input
    }
}

export const pwdInp = (pwd) => {
    return{
        type:REGISTER_PWDCHANGE,
        pwd
    }
}