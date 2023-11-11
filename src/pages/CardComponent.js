import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Chip} from "@mui/material";

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function CardComponent(props) {

    return (
        <Card sx={{ maxWidth: '30%', marginRight: 2}}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Appointment
                </Typography>
                <Typography variant="h4" component="div">
                    {props.meeting.meetingName}
                </Typography>
                <Typography sx={{ mb: 1.5, marginTop: 2 }} color="text.secondary">
                    {props.meeting.location}
                </Typography>
                <Typography variant="body2" sx={{marginTop: 2}}>
                    Meeting Notes: {props.meeting.meetingNotes}
                </Typography>
                <Typography variant="h6" sx={{marginTop: 2, marginBottom: 1}}>
                    Meeting Attendees:
                </Typography>
                {
                    props.meeting.meetingAttendees.map(name => (
                        <Chip sx={{marginRight: 2, marginBottom: 2}}label={name} />
                    ))
                }
            </CardContent>

        </Card>
    );
}
