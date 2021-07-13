import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    result: []
}

const deleteResult = (state,action) => {

    const updateArry = state.result.filter(result => result.id !== action.resultId);

    return updateObject(state, { result: updateArry});
}

const resultReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case actionTypes.STORE_RESULT: return updateObject(state, { result: state.result.concat({id: new Date(),value: action.result})})
            
        case actionTypes.DELETE_RESULT: return deleteResult(state, action)

    };

    return state;
}

export default resultReducer;