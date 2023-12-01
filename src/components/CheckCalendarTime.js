import React, { useRef, useEffect, useState } from 'react';
import { Calendar } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';

const CheckCalendarTime = () => {
  const calendarRef = useRef(null);

  useEffect(() => {
    const calendarEl = calendarRef.current;
    const calendar = new Calendar(calendarEl, {
      plugins: [timeGridPlugin],
      initialView: 'timeGridFourDay',
      views: {
        timeGridFourDay: {
          type: 'timeGrid',
          duration: { days: 4 }
        }
      },
      events:[
        { title: 'event 1', date: '2023-11-27', events: 'start=2013-12-01T00:00:00-05:00&end=2014-01-12T00:00:00-05:00' },
        { title: 'event 2', date: '2023-11-29', events: 'start=2013-12-01T00:00:00-05:00&end=2014-01-12T00:00:00-05:00' }
      ]

    });

    calendar.render();

    return () => {
      calendar.destroy();
    };
  }, []);

  return <div ref={calendarRef} />;
};

export default CheckCalendarTime;
