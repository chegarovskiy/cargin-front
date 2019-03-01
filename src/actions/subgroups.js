import axios from 'axios';
import {TAB_ACTIVATOR} from "./modalSearch";


export const GET_SUBGROUPS = 'GET_SUBGROUPS';
export const PUT_SUBGROUPS_TO_DB = 'PUT_SUBGROUPS_TO_DB';
export const GET_SUBGROUPS_BY_TYPE = 'GET_SUBGROUPS_BY_TYPE';


export function getSubgroups() {
   return function (dispatch){
       axios.get("http://127.0.0.1:8000/")
           .then((respons) =>{dispatch({type: GET_SUBGROUPS, payload: respons.data})
               console.log(respons.status)
           })
   }
}

export function putSubgroupsToDb() {
   return function (dispatch){
       axios.post("http://127.0.0.1:8000/parser/subgroups/")
           .then((respons) =>{(respons.status ==='200') ? dispatch({type: PUT_SUBGROUPS_TO_DB, payload: true}) : dispatch({type: PUT_SUBGROUPS_TO_DB, payload: false})
               console.log('PUT_SUBGROUPS_TO_DB', respons.status)

           })
   }
}


export function getSubgroupsByType(selectedType) {
    return function (dispatch) {
        axios.get(`http://127.0.0.1:8000/__api__/typecar/${selectedType.referred_id}/`)
            .then((respons)=>{dispatch({type: GET_SUBGROUPS_BY_TYPE, payload: respons.data})})
            .then(()=>{dispatch({type: TAB_ACTIVATOR, payload: "nav-link-subgroups"})})


    }
}