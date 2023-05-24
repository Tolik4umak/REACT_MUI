import { Box, Container, Slider, Typography } from '@mui/material'
import { grey } from '@mui/material/colors';
import React, { useState } from 'react'


export default function Test() {
 
  const [value2, setValue2] = React.useState([0, Infinity]);
  const maxVal = 1500
  const handleChange2 = (event, newValue, activeThumb) => {

    const minDistance = 10;
    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        setValue2([newValue[0], newValue[0] + minDistance]);
      } else {
        setValue2([newValue[1] - minDistance, newValue[1]]);
      }
    } else {
      setValue2(newValue);
    }

  // if (activeThumb === 0) {
  //     setValue2([Math.min(newValue[0], value2[1] - minDistance), value2[1]]);
  //   } else {
  //     setValue2([value2[0], Math.max(newValue[1], value2[0] + minDistance)]);
  //   }

    console.log({
      min: newValue[0],
      max: newValue[1]
    });

  };

return (
  <Box>
      <input 
        style={{color: 'grey'}}
        min={0} 
        max={maxVal - 10} 
        type="number" 
        name='min'  
        value={value2[0] ? value2[0] : '' } 
        onChange={(e) => setValue2(cur => [+e.target.value , cur[1]])} placeholder='0' 
      />
      <input 
        style={{color: 'grey'}}
        min={0} 
        max={maxVal+10} 
        type="number" 
        name='max' 
        value={value2[1]} 
        onChange={(e) => setValue2(cur => [cur[0],+e.target.value])} placeholder={`${maxVal}`} 
      />

      <Slider
          sx={{width: '300px', m: '50px'}}
          getAriaLabel={() => 'Minimum distance shift'}
          value={value2}
          onChange={handleChange2}
          valueLabelDisplay="auto"
          disableSwap
          max={maxVal}
          size='small'
          step={1}
          marks={[
              {
                  value: 0,
                  label: `min`,
                },
                {
                  value: maxVal,
                  label: 'max',
                },
          ]}
      />
    
  </Box>
)
}
