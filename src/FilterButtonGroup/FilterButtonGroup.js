import React from 'react';
import { Typography } from '@mui/material';
import Button from '@mui/material-next/Button';

const FilterButtonGroup = () => {
  return (
    <div className="FilterButtonGroup">
      <div className="NonCompanyNameGroup" style={{ display: 'flex', alignItems: 'center' }}>
        <Typography
          style={{
            fontSize: '20px',
            fontFamily: 'Roboto',
            fontWeight: 500,
            textAlign: 'left',
            marginTop: '35px',
            marginRight: '40px',
            marginLeft: '30rem', // Add right margin for spacing
          }}
        >
          Filter By:
        </Typography>
        <div className="ButtonGroup" style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', width: '100%', marginBottom: '10px' }}>
            <Button
              color="primary"
              size="large"
              variant="elevated"
              style={{
                width: '33.33%',
                height: '50px',
                marginRight: '10px',
                marginTop: "40px"
              }}
            >
              <Typography style={{ fontFamily: 'Roboto', fontWeight: 500, fontSize: '20px' }}>Business</Typography>
            </Button>
            <Button
              color="primary"
              size="large"
              variant="elevated"
              style={{
                width: '33.33%',
                height: '50px',
                marginRight: '10px',
                marginTop: "40px"
              }}
            >
              <Typography style={{ fontFamily: 'Roboto', fontWeight: 500, fontSize: '20px' }}>Employee</Typography>
            </Button>
            <Button
              color="primary"
              size="large"
              variant="elevated"
              style={{
                width: '33.33%',
                height: '50px',
                marginTop: "40px"
              }}
            >
              <Typography style={{ fontFamily: 'Roboto', fontWeight: 500, fontSize: '20px' }}>Contact</Typography>
            </Button>
          </div>
          <div style={{ display: 'flex', width: '100%' }}>
            <Button
              color="primary"
              size="large"
              variant="elevated"
              style={{
                width: '50%',
                height: '50px',
                marginRight: '10px',
                marginTop: "20px"
              }}
            >
              <Typography style={{ fontFamily: 'Roboto', fontWeight: 500, fontSize: '20px' }}>Amazech</Typography>
            </Button>
            <Button
              color="primary"
              size="large"
              variant="elevated"
              style={{
                width: '50%',
                height: '50px',
                marginTop: "20px"
              }}
            >
              <Typography style={{ fontFamily: 'Roboto', fontWeight: 500, fontSize: '20px' }}>Polar Ltd.</Typography>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterButtonGroup;
