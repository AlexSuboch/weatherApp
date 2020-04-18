import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getInputvalue, getData } from '../store/actions'
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import styled from 'styled-components'

export default function Form(){

    let dispatch = useDispatch();
    let inputValue = useSelector(state => state.inputValue)

    function setInputValue(event){
        dispatch(getInputvalue(event.target.value))
    }

    function getWeather(){
        dispatch(getData())
    }

    return (
        <Container>
            <Input placeholder = 'City' autoFocus = {true} onChange = {setInputValue} value = {inputValue}/>
            {inputValue.length === 0?
                <Button variant="contained" disabled>
                Search
                </Button>
            :
                <Button onClick = {getWeather} variant="contained" color="primary">
                    Search
                </Button>}
        </Container>
        
    )
}

const Container = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
`