
export const IS_SHOWN_POPUP = 'IS_SHOWN_POPUP';
export const POPUP_MASSAGE = 'POPUP_MASSAGE';

export function isShownPopUp(isShow) {
    return function(dispatch){
        dispatch ({type: IS_SHOWN_POPUP, payload: isShow})}
}

export function setPopUpMassage(massage) {
    return function(dispatch) {
        dispatch({type: POPUP_MASSAGE, payload: massage})}
}