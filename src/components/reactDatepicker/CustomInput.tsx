import { forwardRef } from 'react';

//* MUI Import
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';

const CustomInput = forwardRef((props: any, ref) => {
  return (
    <OutlinedInput
      ref={ref}
      size="small"
      fullWidth
      startAdornment={
        <InputAdornment position="start">
          <EventNoteRoundedIcon />
        </InputAdornment>
      }
      {...props}
    />
  );
});
CustomInput.displayName = 'CustomInput';

export default CustomInput;
