import React from 'react';
import Navbar from '../Navbar/Navbar';
import {Typography} from '@mui/material';
import CalendarComponent from '../components/Calendar/Calendar';
const CheckCalendar = () => {

  return (
    <div name="CheckCalendar">
      <Navbar />
      <Typography
        style={{
          fontSize: '2.5rem', // 40px converted to rem
          fontFamily: 'Roboto',
          fontWeight: 700,
          textAlign: 'left',
          color: 'Black',
          marginLeft: '5rem', // 55px converted to rem
          marginTop: '1rem', // 30px converted to rem
        }}
      >
        Hello, {"Thomas"}
      </Typography>
      {/*<div style={{ display: 'flex' }}>*/}
      {/*  <Typography*/}
      {/*    style={{*/}
      {/*      fontSize: '2.5rem', // 40px converted to rem*/}
      {/*      fontFamily: 'Roboto',*/}
      {/*      fontWeight: 400,*/}
      {/*      textAlign: 'left',*/}
      {/*      color: 'black',*/}
      {/*      marginLeft: '3.4375rem', // 55px converted to rem*/}
      {/*      marginTop: '1.0417rem', // 10px converted to rem*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    Thomas!*/}
      {/*  </Typography>*/}
      {/*  /!*<FilterButtonGroup></FilterButtonGroup>*!/*/}
      {/*</div>*/}
     <CalendarComponent/>
    </div>
  );
};

export default CheckCalendar;