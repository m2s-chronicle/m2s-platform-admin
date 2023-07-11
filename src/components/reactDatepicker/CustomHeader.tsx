//* MUI Import
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

const formatHeaderDate = (d: Date) => {
  const date = new Date(d);
  const monthIndex = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${year}년 ${`0${monthIndex}`.slice(-2)}월`;
};

interface IProps {
  date: Date;
  decreaseMonth: () => void;
  increaseMonth: () => void;
}

const CustomHeader = ({ date, decreaseMonth, increaseMonth }: IProps) => {
  return (
    <Box className="calendar-custom-header" sx={{ px: 4 }}>
      <IconButton onClick={decreaseMonth} size="small" color="secondary">
        <ArrowBackIosNewRoundedIcon fontSize="small" />
      </IconButton>
      <Typography variant="body1">{formatHeaderDate(date)}</Typography>
      <IconButton onClick={increaseMonth} size="small" color="secondary">
        <ArrowForwardIosRoundedIcon fontSize="small" />
      </IconButton>
    </Box>
  );
};

export default CustomHeader;
