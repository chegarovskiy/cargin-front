import {GET_PARTS_BY_SUBGROUP, IS_SHOWN_PARTS} from "../actions/parts";
import {TAB_ACTIVATOR} from "../actions/modalSearch";


const initialState = {
    partsBySubgroup: [],
    isShownParts : false

};

export default function (state=initialState, action) {
     switch (action.type){
        case GET_PARTS_BY_SUBGROUP:
            console.log('reduser GET_PARTS_BY_SUBGROUP',action.payload);
            return {...state, partsBySubgroup: action.payload.parts};

        case TAB_ACTIVATOR:
             console.log('reduser TAB_ACTIVATOR',action.payload);
            return {...state, tabClassName: action.payload};

         case IS_SHOWN_PARTS:
             console.log('reduser IS_SHOWN_PARTS',action.payload);
             return {...state, isShownParts: action.payload};

        default:
            return state;
    }
}