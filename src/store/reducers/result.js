import * as actionTypes from '../actions';

const initialState = {
    result: []
}

const resultReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                result: state.result.concat({id: new Date(),value: action.result})
            }; 
        
        case actionTypes.DELETE_RESULT:
            const updateArry = state.result.filter(result => result.id !== action.resultId)
            return {
                ...state,
                result: updateArry
            }; 
   
    };

    return state;
}

export default resultReducer;