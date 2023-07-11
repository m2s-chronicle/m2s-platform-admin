//* React Import
import { FunctionComponent, useRef } from 'react';

//* MUI Import
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

//* React Datepicker Import
import ReactDatePicker, { ReactDatePickerProps, registerLocale } from 'react-datepicker';

//* Locale Import
import ko from 'date-fns/locale/ko';

//* Components Import
import CustomHeader from './CustomHeader';
import CustomInput from './CustomInput';

// Set Locale "ko"
registerLocale('ko', ko);

const CustomDatepicker: FunctionComponent<ReactDatePickerProps> = (props) => {
  const inputRef = useRef();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    // Set Default ReactDatePicker
    <ReactDatePicker
      locale="ko"
      dateFormat="yyyy-MM-dd"
      closeOnScroll={true}
      customInput={<CustomInput ref={inputRef} />}
      withPortal={matches}
      renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
        <CustomHeader date={date} decreaseMonth={decreaseMonth} increaseMonth={increaseMonth} />
      )}
      {...props}
    />
  );
};

export default CustomDatepicker;
