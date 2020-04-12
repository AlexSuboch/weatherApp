import {GET_INPUTVALUE, SET_DATA, SET_NEW_CITY, SPLICE_DATA} from './actions'

const initialState = {
    inputValue: '',
    data: [],
    city: {
        city: '',
        country: '',
        latitude: 0,
        longitude: 0,
        localtime: '',
        temperature: 0,
        weather_descriptions: '',
        wind_speed: 0,
        wind_dir: 0,
        pressure: 0,
        humidity: 0,
        feelslike: 0,
        is_day: '',
    },
    newData: '',
}

export function dataReducer(state = initialState, action) {
    switch(action.type) {

        case GET_INPUTVALUE: {
            return {
                ...state,
                inputValue: action.payload
            }
        }

        case SET_NEW_CITY: {
            return{
                ...state,
                city: {
                    city: action.payload.location.name,
                    country: action.payload.location.country,
                    latitude: action.payload.location.lat,
                    longitude: action.payload.location.lon,
                    localtime: action.payload.location.localtime,
                    temperature: action.payload.current.temperature,
                    weather_descriptions: action.payload.current.weather_descriptions[0],
                    wind_speed: action.payload.current.wind_speed,
                    wind_dir: action.payload.current.wind_dir,
                    pressure: action.payload.current.pressure,
                    humidity: action.payload.current.humidity,
                    feelslike: action.payload.current.feelslike,
                    is_day: action.payload.current.is_day,
                },
                inputValue: ''
            }

        }

        case SET_DATA: {
            return{
                ...state,
                data: [...state.data, state.city]
            }
        }



        case SPLICE_DATA: {
            
            return{
                ...state,
                data: state.data.filter(element => element !== state.data[action.payload])
            }
        }

        default: return state
    }
}