import {GET_TYPES, PUT_TYPES_TO_DB} from "../actions/types";

const initialState = {
    types_all: [],
    isUpdatedTypes: false
};

export default function (state=initialState, action) {
    switch (action.type){
        case GET_TYPES:
            return {...state, types_all: action.payload};

        case PUT_TYPES_TO_DB:

            return {...state, isUpdatedTypes: action.payload};

        default:
            return state;

    }
}