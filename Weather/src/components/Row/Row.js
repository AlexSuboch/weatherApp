import React from 'react'
import { useDispatch } from 'react-redux'
import { spliceData } from '../store/actions'

export default function Row(props){

    let dispatch = useDispatch();

    
    function clickRow(){
        dispatch(spliceData(props.index))
    }

    return(
        <tr>
            <td>{props.element.city}</td>
            <td>{props.element.country}</td>
            <td>{props.element.localtime}</td>
            <td>{props.element.temperature}</td>
            <td>{props.element.feelslike}</td>
            <td>{props.element.weather_descriptions}</td>
            <td>{props.element.wind_speed}</td>
            <td>{props.element.wind_dir}</td>
            <td>{props.element.pressure}</td>
            <td>{props.element.humidity}</td>
            <td onClick = {clickRow}>Delete</td>
        </tr>
    )
}