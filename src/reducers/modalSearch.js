import {OPEN_MODAL, CLOSE_MODAL} from "../actions/modalSearch";



const initialState = {
    modals: false
};

export default function (state=initialState, action) {
     switch (action.type){
        case OPEN_MODAL:

            return {...state, modals: action.payload};

        case CLOSE_MODAL:
            return {...state, modals: action.payload};

        default:
            return state;
    }
}





