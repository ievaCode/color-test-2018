import {REGISTER, LOGIN} from './types';

export function register (data) {
    console.log(data);
    return({
        type:   REGISTER,
        payload: data
    })
}

export function login (data) {
    console.log(data);
    return({
        type:   LOGIN,
        payload: data
    })
}

