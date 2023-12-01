import React, { useState } from 'react';
import { Calendar } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';
import moment from 'moment';
import { useEffect } from 'react';
import { useRef } from 'react';
import Button from '@mui/material/Button';
const CalendarComponent = () => {
  const [startDate, setStartDate] = useState(moment().startOf('week'));
  const [endDate, setEndDate] = useState(moment().endOf('week'));

  const calendarEl = useRef(null);

  const handleLeftClick = () => {
    console.log('Previous Week Start Date:', startDate.format('YYYY-MM-DD'));
    console.log('Previous Week End Date:', endDate.format('YYYY-MM-DD'));

    setStartDate(startDate.clone().subtract(1, 'weeks'));
    setEndDate(endDate.clone().subtract(1, 'weeks'));
  };

  const handleRightClick = () => {
    console.log('Next Week Start Date:', startDate.clone().add(1, 'weeks').format('YYYY-MM-DD'));
    console.log('Next Week End Date:', endDate.clone().add(1, 'weeks').format('YYYY-MM-DD'));

    setStartDate(startDate.clone().add(1, 'weeks'));
    setEndDate(endDate.clone().add(1, 'weeks'));
  };

  const initializeCalendar = () => {
    const calendar = new Calendar(calendarEl.current, {
      plugins: [timeGridPlugin],
      weekends: false,
      themeSystem: 'materia' ,// Change to 'dayGridMonth' to hide header
       initialDate: startDate.toDate(),  // Convert moment to Date object
    visibleRange: {
      start: startDate.toDate(),       // Convert moment to Date object
      end: endDate.toDate(),           // Convert moment to Date object
    },
    headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: 'timeGridWeek' // user can switch between the two
    },
      events: [
        { title: 'Meeting with Amazech Solutions', start: '2023-11-27', end: '2023-11-29' },
        { title: 'Meeting with University of Texas at Dallas', start: '2023-11-29', end: '2023-12-01' },
      ],
    });
    calendar.render();
  };

  useEffect(() => {
    initializeCalendar();
  }, [startDate, endDate]);

  return (
    <div style={{ marginTop: '4rem' }}>
      <Button style={{marginLeft: "1rem", backgroundColor: "#63B4FF"}} variant="contained" onClick={handleLeftClick}>
  Previous Week
</Button>
<Button style={{marginLeft: "2rem", backgroundColor: "#63B4FF"}} variant="contained" onClick={handleRightClick}>
  Next Week
</Button>
      <div style={{marginTop: "2rem", marginLeft: "1rem"}} ref={calendarEl}></div>
    </div>
  );
};

export default CalendarComponent;