import {GET_SUBGROUPS, PUT_SUBGROUPS_TO_DB} from "../actions/subgroups";

const initialState = {
    subgroups_all: [],
    isUpdatedSubgroups: false
}

export default function (state=initialState, action) {
    switch (action.type){
        case GET_SUBGROUPS:
            return {...state, subgroups: action.payload};

        case PUT_SUBGROUPS_TO_DB:
            return {...state, isUpdatedSubgroups: action.payload};

        default:
            return state;

    }
}