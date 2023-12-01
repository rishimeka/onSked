import {
    DateTimePicker,
    LocalizationProvider,
    renderTimeViewClock,
    StaticDatePicker,
    StaticDateTimePicker
} from "@mui/x-date-pickers";
import {Button, Paper} from "@mui/material";
import dayjs from 'dayjs';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DesktopTimePicker} from "@mui/x-date-pickers";
import {
    Box, Chip,
    FormControl,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    SelectChangeEvent,
    TextField
} from "@mui/material";
import {useState} from "react";

const NewMeeting = (props) => {
    const [meetingName, setMeetingName] = useState('');
    const [meetingNotes, setMeetingNotes] = useState('');
    const [appointmentStartDate, setAppointmentStartDate] = useState('');
    const [appointmentStartTime, setAppointmentStartTime] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
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
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kelly Snyder',
    ];
    const [meetingAttendees, setMeetingAttendees] = useState([]);
    const [location, setLocation] = useState();
    const handleMeetingAttendeesChange = (event) => {
        const {
            target: { value },
        } = event;
        setMeetingAttendees(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const meeting = {
        meetingName,
        meetingAttendees,
        location,
        meetingNotes,
        appointmentStartDate,
        appointmentStartTime,
    };

    // Update meeting name
    const handleMeetingNameChange = (event) => {
        setMeetingName(event.target.value);
    };

    // Update location
    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    // Update meeting notes
    const handleMeetingNotesChange = (event) => {
        setMeetingNotes(event.target.value);
    };

    // Update appointment start date and time
    const handleAppointmentStartDateTimeChange = (value) => {
        setAppointmentStartDate(value.$d);
    };

// Update appointment end date and time
    const handleAppointmentStartTimeChange = (value) => {
        setAppointmentStartTime(value.$d);
    };


    return(
        <div style={{padding: 20}}>
            <text style={{fontWeight: "800", fontSize: 25}}>Meeting Details</text>
            <div style={{display: 'flex', flexDirection: "row", marginTop: 20}}>
                <div style={{width: "50%", justifyContent: "center", display: "flex", flexDirection: "column"}}>
                    <text style={{fontSize: 20, fontWeight: 700, marginBottom: 10}}>Name</text>
                    <TextField id="outlined-basic" label="Meeting Name" variant="outlined" sx={{maxWidth: '95%', marginBottom: 2}}
                               onChange={handleMeetingNameChange}/>
                    <text style={{fontSize: 20, fontWeight: 700, marginBottom: 10}}>Meeting Attendee(s)</text>
                    <FormControl sx={{width: '95%', marginBottom: 2}}>
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
                                <MenuItem
                                    key={name}
                                    value={name}
                                >
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <text style={{fontSize: 20, fontWeight: 700, marginBottom: 10}}>Location</text>
                    <FormControl sx={{width: '95%', marginBottom: 2}}>
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
                    <text style={{fontSize: 20, fontWeight: 700, marginBottom: 10}}>Meeting Notes</text>
                    <TextField id="outlined-textarea" label="Meeting Notes" variant="outlined" minRows={5} multiline sx={{maxWidth: '95%', marginBottom: 2}}
                               onChange={handleMeetingNotesChange}/>
                </div>
                <div style={{width: "50%", display: "flex", flexDirection: "column"}}>
                    <text style={{fontSize: 20, fontWeight: 700, marginBottom: 10}}>Appointment Start Date </text>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            label="Appointment Start Date"
                            viewRenderers={{
                                hours: renderTimeViewClock,
                                minutes: renderTimeViewClock,
                                seconds: null,
                            }}
                            sx={{marginBottom: 2}}
                            minDateTime={dayjs(new Date())}
                            onChange={handleAppointmentStartDateTimeChange}
                        />
                    </LocalizationProvider>
                    {/*<div style={{display: 'flex', flexDirection: "row", marginBottom: 20, marginTop: 20}}>*/}
                    {/*    <Paper sx={{marginRight: 2, padding: 2, backgroundColor: "#9CCFFC"}}>9:30 AM</Paper>*/}
                    {/*    <Paper sx={{marginRight: 2, padding: 2, backgroundColor: "#9CCFFC"}}>9:30 AM</Paper>*/}
                    {/*    <Paper sx={{marginRight: 2, padding: 2, backgroundColor: "#9CCFFC"}}>9:30 AM</Paper>*/}
                    {/*    <Paper sx={{marginRight: 2, padding: 2, backgroundColor: "#9CCFFC"}}>9:30 AM</Paper>*/}
                    {/*    <Paper sx={{marginRight: 2, padding: 2, backgroundColor: "#9CCFFC"}}>9:30 AM</Paper>*/}
                    {/*</div>*/}
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <text style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>Appointment Start Time</text>
                    <DesktopTimePicker defaultValue={appointmentStartTime} />
                        </LocalizationProvider>
                    <text style={{ fontSize: 20, fontWeight: 700, marginBottom: 10, marginTop: "1rem" }}>Appointment Duration</text>

                    <Select
                        labelId="time-select-label"
                        id="time-select"
                        value={selectedTime}
                        onChange={handleTimeChange}
                    >
                        {timeOptions}
                    </Select>
                    <div style={{display: 'flex', flexDirection: "row", marginTop: "auto", marginLeft: "auto", marginRight: "5%"}}>
                        <Button variant="outlined" color="error" sx={{width: 100, marginRight: 2}} onClick={()=> {props.setNewMeetingToggle(false)}}>
                            Cancel
                        </Button>
                        <Button variant="contained" color="success" sx={{width: 100}}
                                onClick={() => {
                                    props.setMeetings([...props.meetings, meeting]);
                                    props.setNewMeetingToggle(false)}}>
                            Save
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewMeeting;
