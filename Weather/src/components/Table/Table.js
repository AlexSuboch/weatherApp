import React from 'react'
import Row from '../Row'
import { useSelector } from 'react-redux'

export default function Table(){

    let data = useSelector(state=> state.data);

    return(
        <div>
            {data.length === 0? '':
            <table>
                <thead>
                    <tr>
                        <td>City</td>
                        <td>Country</td>
                        <td>Local time</td>
                        <td>Temperature</td>
                        <td>Feelslike</td>
                        <td>Weather descriptions</td>
                        <td>Wind speed</td>
                        <td>Wind direction</td>
                        <td>Pressure</td>
                        <td>Humidity</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map((element, index) => 
                        <Row element = {element} index = {index} key = {index} />
                    )}
                </tbody>
            </table>
            }
        </div>
    )
}