import React, {useState} from 'react';
import {PropTypes} from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Bookings(props) {


  const handleGuestInfo = e => {
    e.preventDefault();
    const data = e.target.value.split('\n');
    props.setGuestArr(data);
  }

  const handleDateInfo = e => {
    e.preventDefault();
    const data = e.target.value.split('\n');
    props.setDateArr(data);
  }

  return (
    <div className="row">
      <TextField
        className="col-md-6"
        multiline
        rows="4"
        placeholder="Enter the hacker list (one hacker per line)"
        onChange={handleGuestInfo}
      />
      <TextField
        className="col-md-6"
        multiline
        rows="4"
        placeholder="Enter the date range for each hacker's stay (one range per line)"
        onChange={handleDateInfo}
      />
      <Button variant="outlined" color="primary" className="block-center" onClick={() => props.generateMeals()}>Get Meals Schedule</Button>
    </div>
  );
}

export default Bookings;