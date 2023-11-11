import {Button} from "@mui/material";

const NavBar = (props) => {
    return(
        <div style={{display: 'flex',
            flexDirection: "row",
            padding: 20,
            maxHeight: 30,
            alignItems: "center",
            minWidth: '100%'}}>
            <text style={{color: '#63B4FF', fontWeight: "bold", fontSize: 35}}>OnSked</text>
            <Button style={{marginLeft: 'auto', marginRight: 50}} variant="contained"
                    onClick={()=>{
                        props.setNewMeetingToggle(!props.newMeetingToggle)
                        console.log(props.newMeetingToggle)
                    }}>New Meeting</Button>
        </div>
    )
}
export default NavBar;
