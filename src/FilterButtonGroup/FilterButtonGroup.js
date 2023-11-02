import React from 'react';
import { Typography } from '@mui/material';
import Button from '@mui/material-next/Button';

const FilterButtonGroup = () => {
  return (
    <div className="FilterButtonGroup" >
        <div className="NonCompanyNameGroup" style={{ display: 'flex', alignItems: 'center' }}>
      <Typography
        style={{
          fontSize: '20px',
          fontFamily: 'Roboto',
          fontWeight: 500,
          textAlign: 'left',
          marginTop: "35px",
          marginRight: "40px",
          marginLeft: '30rem' // Add right margin for spacing
        }}
      >
        Filter By:
      </Typography>
      <div className="ButtonGroup" style={{marginTop: "10px"}}>
      <Button
        color="primary"
        size="large"
        variant="elevated"
        style={{
          width: '150px',
          height: '50px',
        }}
      >
        <Typography style={{ fontFamily: 'Roboto', fontWeight: 500, fontSize: '20px' }}>Business</Typography>
      </Button>
      <Button
        color="primary"
        size="large"
        variant="elevated"
        style={{
          width: '150px',
          height: '50px',
          marginLeft: "30px", // Add left margin for spacing
        }}
      >
        <Typography style={{ fontFamily: 'Roboto', fontWeight: 500, fontSize: '20px' }}>Employee</Typography>
      </Button>
      <Button
        color="primary"
        size="large"
        variant="elevated"
        style={{
          width: '150px',
          height: '50px',
          marginLeft: "30px", 
          // Add left margin for spacing
        }}
      >
        <Typography style={{ fontFamily: 'Roboto', fontWeight: 500, fontSize: '20px' }}>Contact</Typography>
      </Button>
      </div>
      </div>
      <Button
        color="primary"
        size="large"
        variant="elevated"
        style={{
          width: '150px',
          height: '50px',
          marginLeft: "420px",
          marginTop: "20px", 
          position: "relative"
        }} >

        <Typography style={{ fontFamily: 'Roboto', fontWeight: 500, fontSize: '20px' }}>Amazech</Typography>
      </Button>
      <Button
        color="primary"
        size="large"
        variant="elevated"
        style={{
          width: '150px',
          height: '50px',
          marginLeft: "30px",
          marginTop: "20px", 
          position: "relative"
        }} >

        <Typography style={{ fontFamily: 'Roboto', fontWeight: 500, fontSize: '20px' }}>Polar Ltd.</Typography>
      </Button>
    </div>
  );
}

export default FilterButtonGroup;
