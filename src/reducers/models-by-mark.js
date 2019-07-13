import {GET_MODELS_BY_MARK} from "../actions/models";
import {TAB_ACTIVATOR} from "../actions/modalSearch";


const initialState = {
    modelsByMark: [],

};

export default function (state=initialState, action) {
     switch (action.type){
        case GET_MODELS_BY_MARK:
            console.log('reduser GET_MODELS_BY_MARK',action.payload)
            return {...state, modelsByMark: action.payload};

        case TAB_ACTIVATOR:
             console.log('reduser TAB_ACTIVATOR',action.payload)
            return {...state, tabClassName: action.payload};

        default:
            return state;
    }
}




