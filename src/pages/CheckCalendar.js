import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Typography } from '@mui/material'
import FilterButtonGroup from '../FilterButtonGroup/FilterButtonGroup'
import Calendar from '../components/Calendar/Calendar'
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
<Navbar/>
<Typography
  style={{
    fontSize: '40px',
    fontFamily: 'Roboto',
    fontWeight: 400,
    textAlign: 'left', // Shift to the left
    color: "grey",
    marginLeft: "55px", 
    marginTop: "30px"
  }}
>
  Hello,
</Typography>
<div style={{display: "flex"}}>
<Typography
  style={{
    fontSize: '40px',
    fontFamily: 'Roboto',
    fontWeight: 600,
    textAlign: 'left', // Shift to the left
    color: "black",
    marginLeft: "55px", 
    marginTop: "10px"
  }}
>
 Thomas!
</Typography>
<FilterButtonGroup></FilterButtonGroup>

</div>
<Calendar></Calendar>
    </div>
  );
};

export default CheckCalendar;
