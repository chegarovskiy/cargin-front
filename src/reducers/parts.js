import {GET_PARTS, PUT_PARTS_TO_DB} from "../actions/parts";

const initialState = {
    parts_all: [],
    isUpdatedParts: false,
    partsInCard : []
};

export default function (state=initialState, action) {
    switch (action.type){
        case GET_PARTS:
            return {...state, parts_all: action.payload};

        case PUT_PARTS_TO_DB:
            return {...state, isUpdatedParts: action.payload};

        default:
            return state;

    }
}