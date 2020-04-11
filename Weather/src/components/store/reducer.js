import {GET_INPUTVALUE, SET_DATA} from './actions'

const initialState = {
    inputValue: '',
    data: ''
}

export function dataReducer(state = initialState, action) {
    switch(action.type) {

        case GET_INPUTVALUE: {
            return {
                ...state,
                inputValue: action.payload
            }
        }

        case SET_DATA: {
            return{
                ...state,
                data: action.payload
            }
        }

        default: return state
    }

}