import axios from 'axios';
import {TAB_ACTIVATOR} from "./modalSearch";


export const GET_TYPES = 'GET_TYPES';
export const PUT_TYPES_TO_DB = 'PUT_TYPES_TO_DB';
export const GET_TYPES_BY_MODEL = 'GET_TYPES_BY_MODEL';


export function getTypes() {
   return function (dispatch){
       axios.get("http://127.0.0.1:8000/")
           .then((respons) =>{dispatch({type: GET_TYPES, payload: respons.data})
               console.log(respons.status)
           })
   }
}

export function putTypesToDb() {
   return function (dispatch){
       axios.post("http://127.0.0.1:8000/parser/types/")
           .then((respons) =>{(respons.status ==='200') ? dispatch({type: PUT_TYPES_TO_DB, payload: true}) : dispatch({type: PUT_TYPES_TO_DB, payload: false})
               console.log('PUT_TYPES_TO_DB', respons.status)

           })
   }
}


export function getTypesByModel(selectedModel) {
    return function (dispatch) {
        axios.get(`http://127.0.0.1:8000/__api__/models/${selectedModel.referred_id}/`)
            .then((respons)=>{dispatch({type: GET_TYPES_BY_MODEL, payload: respons.data})})
            .then(()=>{dispatch({type: TAB_ACTIVATOR, payload: "nav-link-types"})})



    }
}