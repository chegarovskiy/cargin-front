import {BODY_DATA} from "../actions/body";
import {BODY_DATA_TYPES} from "../enums/enum-body";


const initialState = {
    bodyData: BODY_DATA_TYPES.SEARCH_BY_CAR,
};

export default function (state=initialState, action) {

    switch (action.type){
        case BODY_DATA:
            return {...state, bodyData: action.payload};
        default:
            return state;
    }
}