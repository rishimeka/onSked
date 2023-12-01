
import React, { Component } from 'react';
import { Calendar } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';

class CalendarComponent extends Component {
  constructor(props) {
    super(props);
    this.calendarEl = React.createRef();
  }

  componentDidMount() {
    this.initializeCalendar();
  }

  initializeCalendar() {
    const { initialView, headerToolbar } = this.props;

    this.calendar = new Calendar(this.calendarEl.current, {
      plugins:[ timeGridPlugin ],
      weekends:false,
      themeSystem: 'materia',



      events:[
        { title: 'event 1', date: '2023-11-27', events: 'start=2013-12-01T00:00:00-05:00&end=2014-01-12T00:00:00-05:00' },
        { title: 'event 2', date: '2023-11-29', events: 'start=2013-12-01T00:00:00-05:00&end=2014-01-12T00:00:00-05:00' }
      ],

    });
    this.calendar.render();
  }



  render() {
    return <div ref={this.calendarEl}></div>;
  }
}

export default CalendarComponent;
