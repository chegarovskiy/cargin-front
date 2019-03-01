import axios from 'axios';
import {isShownPopUp, setPopUpMassage} from './popup';

export const SEND_EMAIL = 'SEND_EMAIL';


export function sendEmail() {
    return function (dispatch){
        axios.post("http://127.0.0.1:8000/parser/sendemail/")
            .then((response) =>{
                dispatch(setPopUpMassage(response.data));
                dispatch(isShownPopUp(true));
            })
    }
}