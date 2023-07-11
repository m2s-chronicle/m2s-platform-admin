//* Mui Import
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '@mui/material/styles';

//* React Hook Form
import { Controller, useForm } from 'react-hook-form';

//* Components Import
import TextFieldElement from '@/components/form/TextFieldElement';

//* Types import
import { TSearch } from '@/types';

//* Static Data Import
import { SEARCH_DATE_TYPE, SEARCH_TYPE, MEMEBER_STATUS } from '@/utils/staticData';

//* Components
import RadioGroupElement from '@/components/form/RadioGroupElement';
import CustomDatepicker from '@/components/reactDatepicker';
import DatepickerWrapper from '@/@core/styles/libs/reactDatepicker';

//* Store
import { useAppSelector } from '@/store';
import { useDispatch } from 'react-redux';
import { memberActions } from '@/store/slices/memberSlice';

const MemberSearchForm = () => {
  const dispatch = useDispatch();
  const searchForm = useAppSelector((state) => state.member.searchForm);

  const theme = useTheme();

  const { control, handleSubmit, reset, watch } = useForm<TSearch>({
    defaultValues: { ...searchForm },
  });

  const handleSearchSubmit = (data: TSearch) => {
    dispatch(memberActions.setSearchForm(data));
  };

  const handleSearchReset = () => {
    reset();
    dispatch(memberActions.resetSearchForm());
  };

  return (
    <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit(handleSearchSubmit)}>
      <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
        <Grid item xs={12} md={1}>
          <Typography variant="body2">회원상태</Typography>
        </Grid>
        <Grid item xs={12} md={2}>
          <RadioGroupElement
            control={control}
            name="status"
            radioProps={{
              options: MEMEBER_STATUS,
            }}
          />
        </Grid>
        <Grid item xs={12} md={1}>
          <Typography variant="body2" sx={{ pl: 4, [theme.breakpoints.down('sm')]: { pl: 0 } }}>
            기간
          </Typography>
        </Grid>
        <Grid item xs={12} md={2}>
          <TextFieldElement
            name="dateType"
            control={control}
            textFieldProps={{
              select: true,
              fullWidth: true,
              placeholder: '검색조건',
              size: 'small',
              children: SEARCH_DATE_TYPE.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              )),
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <DatepickerWrapper>
              <Controller
                name="startDate"
                control={control}
                render={({ field }) => (
                  <CustomDatepicker
                    selected={field.value}
                    selectsStart
                    startDate={field.value}
                    endDate={watch('endDate')}
                    onChange={(date) => field.onChange(date)}
                    maxDate={new Date()}
                    placeholderText="시작날짜"
                  />
                )}
              />
            </DatepickerWrapper>
            <Typography variant="body2" sx={{ px: 2 }}>
              -
            </Typography>
            <DatepickerWrapper>
              <Controller
                name="endDate"
                control={control}
                render={({ field }) => (
                  <CustomDatepicker
                    selected={field.value}
                    selectsEnd
                    startDate={watch('startDate')}
                    endDate={field.value}
                    onChange={(date) => field.onChange(date)}
                    maxDate={new Date()}
                    minDate={watch('startDate')}
                    placeholderText="종료날짜"
                  />
                )}
              />
            </DatepickerWrapper>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={1}>
          <Typography variant="body2">검색</Typography>
        </Grid>

        <Grid item xs={12} md={2}>
          <TextFieldElement
            name="keywordType"
            control={control}
            textFieldProps={{
              select: true,
              fullWidth: true,
              placeholder: '검색조건',
              size: 'small',
              children: SEARCH_TYPE.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              )),
            }}
          />
        </Grid>
        <Grid item xs={12} md={9}>
          <TextFieldElement
            name="keyword"
            control={control}
            textFieldProps={{
              // label: '검색어',
              placeholder: '검색어를 입력해주세요',
              fullWidth: true,
              autoFocus: false,
              type: 'email',
              size: 'small',
            }}
          />
        </Grid>
      </Grid>

      <Grid container sx={{ mt: 3 }}>
        <Grid item xs={12} md={12}>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button type="reset" variant="outlined" startIcon={<RestartAltIcon />} onClick={handleSearchReset}>
              초기화
            </Button>
            <Button type="submit" variant="contained" startIcon={<SearchIcon />}>
              검색
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MemberSearchForm;
