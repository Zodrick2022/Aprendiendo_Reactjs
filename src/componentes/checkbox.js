import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel';
function Checkboxes(props) {
  return (
    <div>
        <FormControlLabel control={<Checkbox />} label={props.texto} />
    </div>
  )
}

export default Checkboxes