import {LOGIN_UERSCHANGE,LOGIN_PWDCHANGE} from './actionTypes';

export const userInp = (Input) => {
    return{
        type:LOGIN_UERSCHANGE,
        Input
    }
}

export const pwdInp = (pwd) => {
    return{
        type:LOGIN_PWDCHANGE,
        pwd
    }
}