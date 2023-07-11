import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TSearch } from '@/types';

interface IProps {
  searchForm: TSearch | {};
  //Todo Add layout state
}
const initialState: IProps = {
  searchForm: {
    keywordType: 'all',
    keyword: '',
    dateType: 'create',
    status: 'all',
    startDate: null,
    endDate: null,
  },
};

export const memberSlice = createSlice({
  name: 'member',
  initialState,
  reducers: {
    // 검색조건
    setSearchForm: (state, action: PayloadAction<TSearch>) => {
      state.searchForm = action.payload;
    },
    // 검색초기화
    resetSearchForm: (state) => {
      state.searchForm = initialState.searchForm;
    },
  },
});

export const memberActions = memberSlice.actions;
export default memberSlice.reducer;
