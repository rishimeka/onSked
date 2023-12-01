import React from 'react';
import { Typography } from '@mui/material';
import Button from '@mui/material-next/Button';
import useState from 'react';

const FilterButtonGroup = () => {
  const baseFontSize = 16;

  return (
    <div className="FilterButtonGroup">
      <div className="NonCompanyNameGroup" style={{ display: 'flex', alignItems: 'center' }}>
        <Typography
          style={{
            fontSize: '1.25rem', // 20px converted to rem
            fontFamily: 'Roboto',
            fontWeight: 500,
            textAlign: 'left',
            marginTop: '2.1875rem', // 35px converted to rem
            marginRight: '2.5rem', // 40px converted to rem
            marginLeft: '35rem', // 30rem converted to rem
          }}
        >
          Filter By:
        </Typography>
        <div className="ButtonGroup" style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', width: '100%', marginBottom: '0.625rem' }}>
            <Button
              color="primary"
              size="large"
              variant="elevated"
              style={{
                width: '33.33%',
                height: '3.125rem', // 50px converted to rem
                marginRight: '0.625rem', // 10px converted to rem
                marginTop: '2.5rem', // 40px converted to rem
              }}
            >
              <Typography style={{ fontFamily: 'Roboto', fontWeight: 500, fontSize: '1.25rem', color: "#63B4FF" }}>Business</Typography>
            </Button>
            <Button
              color="primary"
              size="large"
              variant="elevated"
              style={{
                width: '33.33%',
                height: '3.125rem',
                marginRight: '0.625rem',
                marginTop: '2.5rem',
              }}
            >
              <Typography style={{ fontFamily: 'Roboto', fontWeight: 500, fontSize: '1.25rem', color: "#63B4FF" }}>Employee</Typography>
            </Button>
            <Button
              color="primary"
              size="large"
              variant="elevated"
              style={{
                width: '33.33%',
                height: '3.125rem',
                marginTop: '2.5rem',
              }}
            >
              <Typography style={{ fontFamily: 'Roboto', fontWeight: 500, fontSize: '1.25rem', color: "#63B4FF" }}>Contact</Typography>
            </Button>
          </div>
          <div style={{ display: 'flex', width: '100%' }}>
            <Button
              color="primary"
              size="large"
              variant="elevated"
              style={{
                width: '33.33%',
                height: '3.125rem',
                marginRight: '0.625rem',
                marginTop: '1.25rem', // 20px converted to rem
              }}
            >
              <Typography style={{ fontFamily: 'Roboto', fontWeight: 500, fontSize: '1.25rem', color: "#63B4FF" }}>Amazech</Typography>
            </Button>
            <Button
              color="primary"
              size="large"
              variant="elevated"
              style={{
                width: '35%',
                height: '3.125rem',
                marginTop: '1.25rem',
              }}
            >
              <Typography style={{ fontFamily: 'Roboto', fontWeight: 500, fontSize: '1.25rem', color: "#63B4FF" }}>Polar Ltd.</Typography>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterButtonGroup;
