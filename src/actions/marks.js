import axios from 'axios';
import {openModal, TAB_ACTIVATOR} from "./modalSearch";
export const GET_MARKS = 'GET_MARKS';
export const PUT_MARKS_TO_DB = 'PUT_MARKS_TO_DB';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const MARK_SELECTED = 'MARK_SELECTED';


export function getMarks() {
   return function (dispatch){
       axios.get("http://127.0.0.1:8000/__api__/marks/")
           .then((respons) =>{dispatch({type: GET_MARKS, payload: respons.data})})
           // .then(()=> {dispatch(openModal())})
           .then(()=>{dispatch({type: TAB_ACTIVATOR, payload: "nav-link-marks"})})


   }
}



export function putMarksToDb() {
   return function (dispatch){
       axios.post("http://127.0.0.1:8000/parser/marks/")
           .then((respons) =>{(respons.status ==='200') ? dispatch({type: PUT_MARKS_TO_DB, payload: true}) : dispatch({type: PUT_MARKS_TO_DB, payload: false})
            console.log('PUT_MARKS_TO_DB', respons.data)

           })
   }
}


