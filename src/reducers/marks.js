import {GET_MARKS, MARK_SELECTED, PUT_MARKS_TO_DB} from "../actions/marks";
import {TAB_ACTIVATOR} from "../actions/modalSearch";


const initialState = {
    marks: [],
    isUpdatedMarks: false,
    tabClassName: "nav-link-marks",


};

export default function (state=initialState, action) {
    switch (action.type){
        case GET_MARKS:
            return {...state, marks: action.payload};

        case PUT_MARKS_TO_DB:
            return {...state, isUpdatedMarks: action.payload};

        case MARK_SELECTED:
            return {...state, selectedMark: action.payload};

        case TAB_ACTIVATOR:
            return {...state, tabClassName: action.payload};


        default:
            return state;

    }
}


