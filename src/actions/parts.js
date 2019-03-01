import axios from 'axios';
// import {CLOSE_MODAL} from "./marks";
import {TAB_ACTIVATOR} from "./modalSearch";

export const GET_PARTS = 'GET_PARTS';
export const PUT_PARTS_TO_DB = 'PUT_PARTS_TO_DB';
export const GET_PARTS_BY_SUBGROUP = 'GET_PARTS_BY_SUBGROUP';
export const IS_SHOWN_PARTS = 'IS_SHOWN_PARTS';



export function getParts() {
   return function (dispatch){
       axios.get("http://127.0.0.1:8000/")
           .then((respons) =>{dispatch({type: GET_PARTS, payload: respons.data});
               console.log(respons.status)
           })
   }
}

export function putPartsToDb() {
   return function (dispatch){
       axios.post("http://127.0.0.1:8000/parser/partsbysubgroups/")
           .then((respons) =>{(respons.status ==='200') ? dispatch({type: PUT_PARTS_TO_DB, payload: true}) : dispatch({type: PUT_PARTS_TO_DB, payload: false})
               console.log('PUT_PARTS_TO_DB', respons.status)
           })
   }
}


export function getPartsBySubgroup(selectedSubgroup) {
    return function (dispatch) {
        axios.get(`http://127.0.0.1:8000/__api__/subgroups/${selectedSubgroup.referred_id}/`)
            .then((respons)=>{dispatch({type: GET_PARTS_BY_SUBGROUP, payload: respons.data})})
            // .then(()=>{dispatch({type: CLOSE_MODAL, payload: false})})
            .then(() => { dispatch(isShownParts(true))})
            .then(()=>{dispatch({type: TAB_ACTIVATOR, payload: "nav-link-parts"})})
    }
}

export function isShownParts(isShow) {
    return {type: IS_SHOWN_PARTS, payload: isShow}
}

