import {GET_SUBGROUPS_BY_TYPE} from "../actions/subgroups";
import {TAB_ACTIVATOR} from "../actions/modalSearch";


const initialState = {
    subgroupsByType: [],

};

export default function (state=initialState, action) {
     switch (action.type){
        case GET_SUBGROUPS_BY_TYPE:
            // console.log('reduser subgoupsByType ',action.payload)
            return {...state, subgroupsByType: action.payload.subgroups};

        case TAB_ACTIVATOR:
             // console.log('reduser TAB_ACTIVATOR',action.payload)
            return {...state, tabClassName: action.payload};

        default:
            return state;
    }
}