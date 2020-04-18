import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { spliceData } from '../store/actions'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TransitionsModal from '../TransitionsModal/TransitionsModal'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(city, temperature, feelslike, weather_descriptions, index) {
  return { city, temperature, feelslike, weather_descriptions };
}

export default function TableData() {
  
let data = useSelector(state => state.data);
let dispatch = useDispatch();

const removeCity = (index) => () =>{
  dispatch(spliceData(index));
}

const rows = data.map((el, index) => createData(el.city, el.temperature, el.feelslike, el.weather_descriptions, index))
    
  const classes = useStyles();

  return (
    data.length !== 0?
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">City</TableCell>
            <TableCell align="center">Temperature</TableCell>
            <TableCell align="center">feelslike</TableCell>
            <TableCell align="center">Weather descriptions</TableCell>
            <TableCell align="center">More informtion</TableCell>
            <TableCell align="center">Delete Ciy</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.city}>
              <TableCell align="center" component="th" scope="row">
                {row.city}
              </TableCell>
              <TableCell align="center">{row.temperature}</TableCell>
              <TableCell align="center">{row.feelslike}</TableCell>
              <TableCell align="center">{row.weather_descriptions}</TableCell>
              <TableCell align="center">
                <TransitionsModal index = {index}/>
              </TableCell>
              <TableCell align="center">
                <Button onClick = {removeCity(index)} variant="contained" color="secondary">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    : ''
  );
}
