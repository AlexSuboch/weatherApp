import React from 'react'
import { useDispatch } from 'react-redux'
import { getInputvalue, getData } from '../store/actions'
import Button from '@material-ui/core/Button';
import styled from 'styled-components'

export default function Form(){

    let dispatch = useDispatch();

    function setInputValue(event){
        dispatch(getInputvalue(event.target.value))
    }

    function getWeather(){
        dispatch(getData())
    }

    return (
        <Container>
            <Input onChange = {setInputValue} />
            <Button onClick = {getWeather} variant="contained" color="primary">
                Search
            </Button>
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

const Input = styled.input`
    height: 30px;
    width: 200px;
`