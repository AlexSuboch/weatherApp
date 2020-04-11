import { GET_DATA } from './actions'
import { setData } from './actions'

export const usersMiddleware = store => next => action => {

    const { inputValue } = store.getState();

    if(action.type ===  GET_DATA) {
        fetch(`http://api.weatherstack.com/current?access_key=f7fbc6b9c5d16a6419e5597c3d6f5030&query=${inputValue}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            store.dispatch(setData(data))
        })
    }
    
    next(action)
}
