import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectBasic({options}) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 250 }}>
      <FormControl fullWidth>
        <Select
          value={age}
          onChange={handleChange}
        >
          {options.map((item, index) => (
            <MenuItem key={index} value={item}>{item}</MenuItem>
          ))}
          
        </Select>
      </FormControl>
    </Box>
  );
}