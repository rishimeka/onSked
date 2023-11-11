import NavBar from "./Navbar/NavBar";
import MonthlyCalender from "./components/Calendar/MonthlyCalender";
import {useState} from "react";
import {Box, Button, FormControl, FormHelperText, Input, InputLabel, Modal} from "@mui/material";
import Card from '@mui/material/Card';
import NewMeeting from "./pages/NewMeeting";
import CardComponent from "./pages/CardComponent";
function App() {
    const popUpStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const [newMeetingToggle, setNewMeetingToggle] = useState(false);
    const [meetings, setMeetings] = useState([]);
  return (
    <div>
        <NavBar setNewMeetingToggle={setNewMeetingToggle} newMeetingToggle={newMeetingToggle}/>
        <Modal open={newMeetingToggle}>
            <Box sx={popUpStyle}>
                <NewMeeting setNewMeetingToggle={setNewMeetingToggle} setMeetings={setMeetings} meetings={meetings}/>
            </Box>
        </Modal>
        {console.log(meetings)}
        <div style={{display: 'flex', flexDirection: "row", marginTop: 20, marginLeft: 20}}>
            {meetings.map(meeting => (
                <CardComponent meeting={meeting}/>
            ))}
        </div>
    </div>
  );
}

export default App;
