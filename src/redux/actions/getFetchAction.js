import { FETCH_GET_FAILURE,FETCH_GET_SUCCESS } from "./actionTypes";


export const fetchGetSuccess = (data) =>{
    return({
        type : FETCH_GET_SUCCESS,
        payload : data
    })
}


export const fetchGetFailure = (error) =>{
    return({
        type : FETCH_GET_FAILURE,
        payload : error
    })
}
