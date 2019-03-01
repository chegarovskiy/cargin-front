import {GET_MODELS, PUT_MODELS_TO_DB} from "../actions/models";

const initialState = {
    models_all: [],
    isUpdatedModels: false
}

export default function (state=initialState, action) {
    switch (action.type){
        case GET_MODELS:
            return {...state, models: action.payload};

        case PUT_MODELS_TO_DB:
            return {...state, isUpdatedModels: action.payload};

        default:
            return state;

    }
}