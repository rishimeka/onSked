import { Calendar } from '@fullcalendar/core';
import React, { useState, useEffect, useRef } from 'react';
import timeGridPlugin from '@fullcalendar/timegrid';
import moment from 'moment';
import Button from '@mui/material/Button';
import axios from 'axios';

const CalendarComponent = () => {
  const [startDate, setStartDate] = useState(moment().startOf('week'));
  const [endDate, setEndDate] = useState(moment().endOf('week'));
  const [eventsData, setEventsData] = useState([]); // State to store events data
  const calendarEl = useRef(null);

  const handleLeftClick = () => {
    setStartDate(startDate.clone().subtract(1, 'weeks'));
    setEndDate(endDate.clone().subtract(1, 'weeks'));
  };

  const handleRightClick = () => {
    setStartDate(startDate.clone().add(1, 'weeks'));
    setEndDate(endDate.clone().add(1, 'weeks'));
  };

  const initializeCalendar = () => {
    const calendar = new Calendar(calendarEl.current, {
      plugins: [timeGridPlugin],
      weekends: false,
      themeSystem: 'materia',
      initialDate: startDate.toDate(),
      visibleRange: {
        start: startDate.toDate(),
        end: endDate.toDate(),
      },
      headerToolbar: {
        left: 'prev,next',
        center: 'title',
        right: 'timeGridWeek',
      },
      events: eventsData, // Use eventsData to populate calendar events
    });
    calendar.render();
  }
  const addDurationToDate = (dateString, durationMinutes) => {
    const dateMoment = moment(dateString, 'YYYY-MM-DDHH:mm:ss.SSSSSSS');
    const endDate = dateMoment.add(durationMinutes, 'minutes').format('YYYY-MM-DDHH:mm:ss.SSSSSSS');
    return endDate;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`localhost:8081/schedule/records-for-week?StartDate=2023-11-07&EndDate=2023-12-07&customerId=0e3fc6a8-046d-45b0-aff7-93d2d9cf1e10`);
        console.log(response.data);
        const updatedEventsData = response.data.map((event) => {
          const str = addDurationToDate(event.date + "T" + event.startTime, '45');
          return {
            title: event.title,
            start: event.date + 'T' + event.startTime,
            end: str.substring(0, 10) + 'T' + str.substring(10)
          };
        });
        setEventsData(updatedEventsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [startDate, endDate]);

  useEffect(() => {
    initializeCalendar();
  }, [eventsData, startDate, endDate]);

  return (
      <div style={{ marginTop: '4rem' }}>
        <Button style={{ marginLeft: '1rem', backgroundColor: '#63B4FF' }} variant="contained" onClick={handleLeftClick}>
          Previous Week
        </Button>
        <Button style={{ marginLeft: '2rem', backgroundColor: '#63B4FF' }} variant="contained" onClick={handleRightClick}>
          Next Week
        </Button>
        <div style={{ marginTop: '2rem', marginLeft: '1rem' }} ref={calendarEl}></div>
      </div>
  );
};

export default CalendarComponent;
