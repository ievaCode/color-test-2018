import {SET_ACTIVE_COLOR} from './types';

export function activeColor (color) {
    return({
        type: SET_ACTIVE_COLOR,
        payload: color
    })
}

