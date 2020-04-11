import React from 'react'
import { useSelector } from 'react-redux'

export default function Table(){

    let data = useSelector(state=> state.data)

    return(
        <div>
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
                        <tr key = {index} index = {index}>
                            <td>{element.city}</td>
                            <td>{element.country}</td>
                            <td>{element.localtime}</td>
                            <td>{element.temperature}</td>
                            <td>{element.feelslike}</td>
                            <td>{element.weather_descriptions}</td>
                            <td>{element.wind_speed}</td>
                            <td>{element.wind_dir}</td>
                            <td>{element.pressure}</td>
                            <td>{element.humidity}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}