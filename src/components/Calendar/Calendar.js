import { Calendar } from '@fullcalendar/core';
import React, {useState, useEffect, useRef, useCallback} from 'react';
import timeGridPlugin from '@fullcalendar/timegrid';
import moment from 'moment';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Fab, Typography, Snackbar } from "@mui/material";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import AddIcon from '@mui/icons-material/Add';
import Box from "@mui/material/Box";
import NewMeeting from "../../pages/NewMeeting";
import Modal from "@mui/material/Modal";
import listPlugin from '@fullcalendar/list';
import MuiAlert from '@mui/material/Alert';
const popUpStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: '1rem',
};

const CalendarComponent = () => {
  const [newMeetingToggle, setNewMeetingToggle] = useState(false);
  const [meetings, setMeetings] = React.useState([]);
  const [startDate, setStartDate] = useState(moment().startOf('week'));
  const [endDate, setEndDate] = useState(moment().endOf('week'));
  const [eventsData, setEventsData] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const calendarEl = useRef(null);

  const handleLeftClick = () => {
    setStartDate(startDate.clone().subtract(1, 'weeks'));
    setEndDate(endDate.clone().subtract(1, 'weeks'));
  };

  const handleRightClick = () => {
    setStartDate(startDate.clone().add(1, 'weeks'));
    setEndDate(endDate.clone().add(1, 'weeks'));
  };

  const initializeCalendar = useCallback(() => {
    const calendar = new Calendar(calendarEl.current, {
      plugins: [timeGridPlugin,listPlugin],

      weekends: false,
      themeSystem: 'materia',
      initialDate: startDate.toDate(),
      visibleRange: {
        start: startDate.toDate(),
        end: endDate.toDate(),
      },
      headerToolbar: {
        left: '',
        center: '',
        right: 'timeGridWeek,listPlugin',
      },
      events: [],
    });
    calendar.render();
  }, [endDate, startDate]);

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
        if (response.data) {
          const updatedEventsData = response.data.payload.appointments.map((event) => {
            const str = addDurationToDate(event.date + "T" + event.startTime, '45');
            return {
              title: event.title,
              start: event.date + 'T' + event.startTime,
              end: str.substring(0, 10) + 'T' + str.substring(10)
            };
          });
          setEventsData(updatedEventsData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setSnackbarOpen(true);
      }
    };

    fetchData();
  }, [startDate, endDate]);

  useEffect(() => {
    initializeCalendar();
  }, [initializeCalendar, eventsData, startDate, endDate]);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <div style={{ marginTop: '3rem', width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <Button style={{ marginLeft: '5rem', backgroundColor: '#63B4FF' }} variant="contained" onClick={handleLeftClick}>
          Previous Week
        </Button>
        <Typography variant="h5" style={{ marginLeft: "7.5rem" }}>{startDate.clone().add(1, 'days').format('MM/DD/YY')} - {endDate.clone().add(-1, 'days').format('MM/DD/YY')}</Typography>
        <div style={{ marginRight: '5rem' }}>
          <Button style={{ marginRight: '0.75rem', backgroundColor: '#63B4FF' }} variant="contained" onClick={handleRightClick}>
            Next Week
          </Button>
          <Fab disabled variant="circular" size="small" color="primary" style={{ marginRight: '0.75rem' }}>
            <FilterAltIcon />
          </Fab>
          <Fab variant="circular" size="small" color="primary" onClick={() => {
            setNewMeetingToggle(!newMeetingToggle);
          }}>
            <AddIcon />
          </Fab>
        </div>
      </div>
      <div style={{ marginTop: '1rem', marginLeft: '5rem', marginRight: '5rem' }} ref={calendarEl}></div>
      <Modal open={newMeetingToggle}>
        <Box sx={popUpStyle}>
          <NewMeeting setNewMeetingToggle={setNewMeetingToggle} setMeetings={setMeetings} meetings={meetings} />
        </Box>
      </Modal>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Error fetching data"
      >
         <MuiAlert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
    Error fetching
  </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default CalendarComponent;
