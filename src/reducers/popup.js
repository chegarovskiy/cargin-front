import {IS_SHOWN_POPUP, POPUP_MASSAGE} from "../actions/popup";

const initialState = {
    isShownPopUp: false,
    popUpMassage: '',
};

export default function (state = initialState, action) {
    switch (action.type) {
        case IS_SHOWN_POPUP:
            return {...state, isShownPopUp: action.payload};
        case POPUP_MASSAGE:
            return {...state, popUpMassage: action.payload};
        default:
            return state
    }
}