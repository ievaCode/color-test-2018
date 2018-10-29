import {LOGIN, REGISTER} from '../actions/types';

const initialState = {
    isAuth:false,
    message:'',
    allUsers:[],
    currentUser: ''
};


export default (state = initialState, action) => {
    switch (action.type) {
        case REGISTER :
            console.log(action);
            return {...state, message:'Please log in to continue', allUsers:[...state.allUsers, action.payload]};
        case LOGIN :
            return {...state, isAuth:true, message:'Wellcome!', currentUser:action.payload};
        default :
            return state
    }
}

