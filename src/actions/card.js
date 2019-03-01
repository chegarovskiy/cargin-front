import axios from 'axios';
export const PUT_PART_TO_CARD = 'PUT_PART_TO_CARD';




export function putPartToCard(selectedPart) {

    return function (dispatch) {
        dispatch({type: PUT_PART_TO_CARD, payload: selectedPart});
        console.log('id part is', selectedPart);

    }
}