import * as actionTypes from './actionTypes';

export const saveResult = ( result ) => {
    // const updatedResult = res * 2
    return{
        type: actionTypes.STORE_RESULT,
        result
    }
}


export const storeResult = (result) => {

    return (dispatch, getState) =>{
        const oldCounter = getState().counter;
        console.log(oldCounter);
        setTimeout( () => {
            dispatch(saveResult(result))
        }, 2000)
       
    }
}

export const deleteResult = (resultId) => {

    return{
        type: actionTypes.DELETE_RESULT,
        resultId
    }
}
