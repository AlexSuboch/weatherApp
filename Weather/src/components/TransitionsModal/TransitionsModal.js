import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  let city = useSelector(state => state.data[props.index])

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleOpen}>
        More
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">{city.city}</h2>
            <p id="transition-modal-description">Temperature:{city.temperature}</p>
            <p id="transition-modal-description">Feelslike:{city.feelslike}</p>
            <p id="transition-modal-description">Weather descriptions:{city.weather_descriptions}</p>
            <p id="transition-modal-description">Wind speed{city.wind_speed}</p>
            <p id="transition-modal-description">Wind direction:{city.wind_dir}</p>
            <p id="transition-modal-description">Pressure:{city.pressure}</p>
            <p id="transition-modal-description">Humidity:{city.humidity}</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}