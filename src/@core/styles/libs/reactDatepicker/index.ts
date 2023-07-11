// ** MUI imports
import { hexToRGBA } from '@/utils/filters';
import { hexToRgb, styled } from '@mui/material/styles';

//* Datepicker Style
import 'react-datepicker/dist/react-datepicker.css';

const DatepickerWrapper = styled('div')(({ theme }) => ({
  '& .react-datepicker__portal': {
    backgroundColor: hexToRGBA(theme.palette.common.black, 0.36),
    backdropFilter: 'blur(4px)',
  },
  '& .react-datepicker-popper': {
    zIndex: 20,
  },
  '& .react-datepicker': {
    boxShadow: theme.shadows[5],
    border: 'none',
    fontFamily: `${theme.typography.fontFamily} !important`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    color: `rgba(${theme.palette.customColors.main}, 0.87)`,
    '& .react-datepicker__current-month, &.react-datepicker-year-header': {
      fontSize: '1rem',
      color: `rgba(${theme.palette.customColors.main}, 0.87)`,
    },
    '& .react-datepicker__header': {
      backgroundColor: theme.palette.background.paper,
      padding: 0,
      border: 'none',
      fontWeight: 'normal',
    },
    '& .react-datepicker__header--custom .MuiBox-root': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(2),
      lineHeight: 2.1,
      fontSize: '1rem',
      color: theme.palette.primary,
    },
    '& .react-datepicker__month-container': {
      paddingTop: theme.spacing(2),
    },
    '& .react-datepicker__day-name': {
      margin: '0px',
      lineHeight: 1.5,
      width: '2.25rem',
      fontSize: '0.7rem',
      color: `rgba(${theme.palette.customColors.main}, 0.6)`,
    },
    '& .react-datepicker__day': {
      margin: '0px',
      borderRadius: '50%',
      lineHeight: '2.25rem',
      width: '2.25rem',
      color: `rgba(${theme.palette.customColors.main}, 0.87)`,
      '&.react-datepicker__day--outside-month, &.react-datepicker__day--disabled:not(.react-datepicker__day--selected)':
        {
          color: theme.palette.text.disabled,
        },
      '&.react-datepicker__day--range-end.react-datepicker__day--in-range': {
        borderTopRightRadius: '50%',
        borderBottomRightRadius: '50%',
        color: theme.palette.common.white,
        backgroundColor: `${hexToRgb(theme.palette.primary.main)} !important`,
      },
    },
    '& .react-datepicker__day--keyboard-selected:not(.react-datepicker__day--in-range)': {
      backgroundColor: hexToRGBA(theme.palette.primary.main, 0.06),
    },
    '& .react-datepicker__day--in-range, & .react-datepicker__day--in-selecting-range': {
      borderRadius: 0,
      color: theme.palette.primary.main,
      backgroundColor: `${hexToRGBA(theme.palette.primary.main, 0.06)} !important`,
    },
    '& .react-datepicker__day--today': {
      fontWeight: 'normal',
      '&:not(.react-datepicker__day--selected):not(:empty)': {
        lineHeight: '2.125rem',
        color: theme.palette.primary.main,
        border: `1px solid ${theme.palette.primary.main}`,
      },
    },
    '& .react-datepicker__day--selected, & .react-datepicker__month--selected, & .react-datepicker__year-text--selected, & .react-datepicker__quarter--selected':
      {
        color: theme.palette.common.white,
        backgroundColor: hexToRgb(theme.palette.primary.main),
      },
    '& .react-datepicker__day.react-datepicker__day--selected.react-datepicker__day--in-selecting-range.react-datepicker__day--selecting-range-start, & .react-datepicker__day.react-datepicker__day--selected.react-datepicker__day--range-start.react-datepicker__day--in-range, & .react-datepicker__day.react-datepicker__day--range-start':
      {
        borderTopLeftRadius: '50%',
        borderBottomLeftRadius: '50%',
        color: theme.palette.common.white,
        backgroundColor: `${hexToRgb(theme.palette.primary.main)} !important`,
      },
    '& .react-datepicker__day:hover, & .react-datepicker__month-text:hover, & .react-datepicker__quarter-text:hover, & .react-datepicker__year-text:hover':
      {
        backgroundColor: theme.palette.action.hover,
      },
    '& .react-datepicker__triangle': {
      display: 'none',
    },
    '& .react-datepicker__header:not(.react-datepicker-year-header) + .react-datepicker__month, & .react-datepicker__header:not(.react-datepicker-year-header) + .react-datepicker__year':
      {
        margin: '1.5rem 0.8rem 0.8rem',
      },
  },
}));

export default DatepickerWrapper;
