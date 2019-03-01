import {IS_SHOW_PAYMENT_VIEW} from "../actions/paymant";

const initialState = {
    isShownPayment: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case IS_SHOW_PAYMENT_VIEW:
            return {...state, isShownPayment: action.payload};
        default:
            return state
    }
}