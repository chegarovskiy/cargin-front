import {PUT_PART_TO_CARD} from "../actions/card";


const initialState = {
    partsInCard : []
};

export default function (state=initialState, action) {
    switch (action.type){
        case PUT_PART_TO_CARD:
            return {
                ...state,
                partsInCard: [...state.partsInCard, action.payload]};
        default:
            return state;

    }
}
