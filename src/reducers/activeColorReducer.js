import {SET_ACTIVE_COLOR} from '../actions/types';


const activeColorReducer =(active = '', action)=>{
    switch (action.type){
        case SET_ACTIVE_COLOR :
            return action.payload;
        // case REMOVE_ACTIVE :
        //     return active='';
        default:return active
    }
};

export default activeColorReducer

