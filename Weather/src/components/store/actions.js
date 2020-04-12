export const GET_INPUTVALUE = 'GET_INPUTVALUE';
export const GET_DATA = 'GET_DATA';
export const SET_DATA = 'SET_DATA';
export const SET_NEW_CITY = 'SET_NEW_CITY';
export const SPLICE_DATA = 'SPLICE_DATA'

export function getInputvalue(payload){
    return{
        type: GET_INPUTVALUE,
        payload: payload
    }
}

export function getData(payload){
    return{
        type: GET_DATA,
        payload: payload
    }
}

export function setData(payload){
    return{
        type: SET_DATA,
        payload: payload
    }
}

export function setNewCity(payload){
    return{
        type: SET_NEW_CITY,
        payload: payload
    }
}

export function spliceData(payload){
    return{
        type: SPLICE_DATA,
        payload: payload
    }
}