import {GET_TYPES_BY_MODEL} from "../actions/types";
import {TAB_ACTIVATOR} from "../actions/modalSearch";


const initialState = {
    typesByModel: []

};

export default function (state=initialState, action) {
     switch (action.type){
        case GET_TYPES_BY_MODEL:
            console.log('reduser GET_TYPES_BY_MODEL',action.payload)
            return {...state, typesByModel: action.payload.types};

        case TAB_ACTIVATOR:
             console.log('reduser TAB_ACTIVATOR',action.payload)
            return {...state, tabClassName: action.payload};

        default:
            return state;
    }
}