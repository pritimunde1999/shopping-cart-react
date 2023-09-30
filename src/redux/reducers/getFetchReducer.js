import { FETCH_GET_SUCCESS,FETCH_GET_FAILURE } from "../actions/actionTypes";

const initialState = {
    data : [],
    error : null
}

const getFetchReducer = (state=initialState,action) =>{

    switch(action.type){
        case FETCH_GET_SUCCESS:
            return{...state, data:action.payload, error:null}

        case FETCH_GET_FAILURE:
            return{...state, data:[], error:action.payload}
         
        default:
            return state    
    }
    
}

export default getFetchReducer;