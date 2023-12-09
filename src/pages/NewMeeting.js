import { DateTimePicker, DesktopTimePicker, LocalizationProvider, renderTimeViewClock } from "@mui/x-date-pickers";
import { Box, Button, Chip, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import dayjs from 'dayjs';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import axios from 'axios';
import Switch from '@mui/material/Switch';

const NewMeeting = (props) => {
  const [meetingName, setMeetingName] = useState('');
  const [meetingNotes, setMeetingNotes] = useState('');
  const [appointmentStartDate, setAppointmentStartDate] = useState('');
  const [appointmentStartTime] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);

  const timeOptions = [];
  for (let i = 0; i <= 8; i++) {
    const minutes = i * 15;
    const hours = Math.floor(minutes / 60);
    const formattedTime = `${hours ? hours + ':' : ''} ${minutes % 60} min`;
    timeOptions.push(<MenuItem key={minutes} value={minutes}>{formattedTime}</MenuItem>);
  }

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const names = [
    'Oliver Hansen', 'Van Henry', 'April Tucker', 'Ralph Hubbard', 'Omar Alexander',
    'Carlos Abbott', 'Miriam Wagner', 'Bradley Wilkerson', 'Virginia Andrews', 'Kelly Snyder',
  ];

  const [meetingAttendees, setMeetingAttendees] = useState([]);
  const [location, setLocation] = useState();

  const handleMeetingAttendeesChange = (event) => {
    const { target: { value } } = event;
    setMeetingAttendees(typeof value === 'string' ? value.split(',') : value);
  };

  const meeting = {
    meetingName, meetingAttendees, location, meetingNotes, appointmentStartDate, appointmentStartTime,
  };

  const handleMeetingNameChange = (event) => {
    setMeetingName(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleMeetingNotesChange = (event) => {
    setMeetingNotes(event.target.value);
  };

  const handleAppointmentStartDateTimeChange = (value) => {
    setAppointmentStartDate(value.$d);
  };

  const handleSaveButtonClick = async () => {
    const scheduleRecordData = {
      date: appointmentStartDate,
      title: meetingName,
      startTime: appointmentStartTime,
      duration: parseInt(selectedTime),
      recurring: isRecurring,
      frequency: 'daily',
      notes: meetingNotes,
      customerId: "000D3617-C014-49D9-8895-613CD05FBD81",
      businessId: 2,
      locationId: 3,
      serviceId: 1
    };

    try {
      const response = await axios.post('localhost:8081/schedule/add-schedule-record', scheduleRecordData);
      console.log('Schedule record added successfully:', response.data);
      props.setMeetings([...props.meetings, meeting]);
      props.setNewMeetingToggle(false);
    } catch (error) {
      console.error('Error adding schedule record:', error);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <Typography style={{ fontWeight: "800", fontSize: 25 }}>Meeting Details</Typography>
      <div style={{ display: 'flex', flexDirection: "row", marginTop: 20 }}>
        <div style={{ width: "50%", justifyContent: "center", display: "flex", flexDirection: "column" }}>
          <Typography style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>Name</Typography>
          <TextField id="outlined-basic" label="Meeting Name" variant="outlined" sx={{ maxWidth: '95%', marginBottom: 2 }} onChange={handleMeetingNameChange} />
          <Typography style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>Meeting Attendee(s)</Typography>
          <FormControl sx={{ width: '95%', marginBottom: 2 }}>
            <InputLabel>Meeting Attendee(s)</InputLabel>
            <Select
              multiple
              value={meetingAttendees}
              onChange={handleMeetingAttendeesChange}
              label="Meeting Attendee(s)"
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Typography style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>Location</Typography>
          <FormControl sx={{ width: '95%', marginBottom: 2 }}>
            <InputLabel>Location</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={location}
              label="Location"
              onChange={handleLocationChange}
            >
              <MenuItem value={"800 W Campbell Rd, Richardson, TX 75080"}>The University of Texas at Dallas</MenuItem>
              <MenuItem value={"2901 Dallas Pkwy #310, Plano, TX 75093"}>Amazech Solutions</MenuItem>
              <MenuItem value={"3000 Northside Blvd, Richardson, TX 75080"}>Northside Apartments</MenuItem>
            </Select>
          </FormControl>
          <Typography style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>Meeting Notes</Typography>
          <TextField id="outlined-textarea" label="Meeting Notes" variant="outlined" minRows={5} multiline sx={{ maxWidth: '95%', marginBottom: 2 }} onChange={handleMeetingNotesChange} />
        </div>
        <div style={{ width: "50%", display: "flex", flexDirection: "column" }}>
          <Typography style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>Appointment Start Date </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              label="Appointment Start Date"
              viewRenderers={{
                hours: renderTimeViewClock,
                minutes: renderTimeViewClock,
                seconds: null,
              }}
              sx={{ marginBottom: 2 }}
              minDateTime={dayjs(new Date())}
              onChange={handleAppointmentStartDateTimeChange}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Typography style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>Appointment Start Time</Typography>
            <DesktopTimePicker defaultValue={appointmentStartTime} />
          </LocalizationProvider>
          <Typography style={{ fontSize: 20, fontWeight: 700, marginBottom: 3, marginTop: "1rem" }}>Appointment Duration</Typography>
          <Select
            labelId="time-select-label"
            id="time-select"
            value={selectedTime}
            onChange={handleTimeChange}
          >
            {timeOptions}
          </Select>
          <Typography style={{ fontSize: 20, fontWeight: 700, marginBottom: 3, marginTop: "1rem" }} >Recurring Meeting</Typography>
          <Switch
            checked={isRecurring}
            onChange={() => setIsRecurring(!isRecurring)}
          />
          <div style={{ display: 'flex', flexDirection: "row", marginTop: "auto", marginLeft: "auto", marginRight: "5%" }}>
            <Button variant="outlined" color="error" sx={{ width: 100, marginRight: 2 }} onClick={() => { props.setNewMeetingToggle(false) }}>
              Cancel
            </Button>
            <Button variant="contained" color="success" sx={{ width: 100 }} onClick={handleSaveButtonClick}>
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewMeeting;
