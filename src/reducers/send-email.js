import {SEND_EMAIL} from "../actions/send-email";


const initialState = {
    email_data : 'test: email data send',


};

export default function (state=initialState, action) {
    switch (action.type){
        case SEND_EMAIL:
            return {...state, email_data: action.payload};

        default:
            return state;

    }
}