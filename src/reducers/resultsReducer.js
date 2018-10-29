import {SET_RESULT} from '../actions/types';


export default (state = 0, action) => {
    switch (action.type) {
        case SET_RESULT:
            return {level: action.payload.level};
        default :
            return state
    }
}


