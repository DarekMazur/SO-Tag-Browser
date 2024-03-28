import { configureStore, createSlice } from '@reduxjs/toolkit';

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: 0,
  reducers: {
    setPaginatino(_state, action) {
      console.log(action.payload);
      return action.payload;
    },
  },
});

export const { setPaginatino } = paginationSlice.actions;

export const store = configureStore({
  reducer: {
    pagination: paginationSlice.reducer,
  },
});
