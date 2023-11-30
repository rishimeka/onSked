import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { Typography } from '@mui/material';
import FilterButtonGroup from '../FilterButtonGroup/FilterButtonGroup';
import CheckCalendarTime from '../components/CheckCalendarTime';
import Button from '@mui/material-next/Button';
import FullCalendarComponent from '../components/Calendar/FullCalendarComponent';
const CheckCalendar = () => {
  const [showFullCalendar, setShowFullCalendar] = useState(true);

  const handleFullCalendarClick = () => {
    setShowFullCalendar(true);
  };

  const handleCheckCalendarClick = () => {
    setShowFullCalendar(false);
  };

  return (
    <div name="CheckCalendar">
      <Navbar />
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
      <Typography
        style={{
          fontSize: '40px',
          fontFamily: 'Roboto',
          fontWeight: 400,
          textAlign: 'left', // Shift to the left
          color: 'grey',
          marginLeft: '55px',
          marginTop: '30px',
        }}
      >
        Hello,
      </Typography>
        <Typography
          style={{
            fontSize: '40px',
            fontFamily: 'Roboto',
            fontWeight: 600,
            textAlign: 'left', // Shift to the left
            color: 'black',
            marginLeft: '10px',
            marginTop: '30px',
          }}
        >
          Thomas!
        </Typography>
        <FilterButtonGroup></FilterButtonGroup>
      </div>
      <div className="ChangeCalendartypeButton">
      <Button
        color="primary"
        size="large"
        variant="elevated"
        style={{
          width: '180px',
          height: '40px',
          marginTop: "40px",
          marginRight: "30px",
          marginBottom: "30px",
          marginLeft: "25px",
        
        }}
        onClick={handleFullCalendarClick}
      > Month Calendar</Button>
        <Button
        color="primary"
        size="large"
        variant="elevated"
        style={{
          width: '180px',
          height: '40px',
          marginTop: "40px",
          marginBottom: "30px"


        }}
        onClick={handleCheckCalendarClick}
      > Time Calendar</Button>
        
        
      </div>
      {showFullCalendar ? <FullCalendarComponent /> : <CheckCalendarTime />}
    </div>
  );
};

export default CheckCalendar;
