import {SET_RESULT} from './types';

export function setResult (level) {
    return({
        type: SET_RESULT,
        payload: level
    })
}
