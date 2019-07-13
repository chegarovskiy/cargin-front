import axios from 'axios';
import {TAB_ACTIVATOR} from "./modalSearch";


export const GET_MODELS = 'GET_MODELS';
export const PUT_MODELS_TO_DB = 'PUT_MODELS_TO_DB';
export const GET_MODELS_BY_MARK = 'GET_MODEL_BY_MARK';

export function getModels() {
   return function (dispatch){
       axios.get("http://127.0.0.1:8000/models/")
           .then((respons) =>{dispatch({type: GET_MODELS, payload: respons.data});
               console.log(respons.data)
           })
   }
}

export function putModelsToDb() {
   return function (dispatch){
       axios.post("http://127.0.0.1:8000/parser/models/")
           .then((respons) =>{(respons.status ==='200') ? dispatch({type: PUT_MODELS_TO_DB, payload: true}) : dispatch({type: PUT_MODELS_TO_DB, payload: false})
            console.log('PUT_MODELS_TO_DB', respons.data)

           })
   }
}


export function getModelsByMark(selectedMark) {
    return function (dispatch) {
        axios.get(`http://127.0.0.1:8000/__api__/marks/${selectedMark.referred_id}/`)
            .then((respons)=>{
                if (respons.status === 200){
                    console.log('ok:: data status::',respons.status);
                    if(respons.data !== undefined){
                        dispatch({type: GET_MODELS_BY_MARK, payload: respons.data.models});
                        console.log('ok:: data respons::',respons.data);
                    }else {
                        console.log('errror::',`http://127.0.0.1:8000/__api__/marks/${selectedMark.referred_id}/`);
                        console.log('errror:: status code respons::',respons.status);
                        console.log('errror:: data respons::',respons.data);
                    }
                }else {
                    console.log('errror::',`http://127.0.0.1:8000/__api__/marks/${selectedMark.referred_id}/`);
                    console.log('errror:: status code respons::',respons.status);
                    console.log('errror:: data respons::',respons.data);
                }})
            .then(()=>{dispatch({type: TAB_ACTIVATOR, payload: "nav-link-models"})

            })



    }
}















