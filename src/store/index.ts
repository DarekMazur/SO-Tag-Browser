import { configureStore, createSlice } from '@reduxjs/toolkit';

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: 0,
  reducers: {
    setPagination(_state, action) {
      return action.payload;
    },
  },
});

const tagsPerPageSlice = createSlice({
  name: 'tagsPerPage',
  initialState: 5,
  reducers: {
    setTagsPerPage(_state, action) {
      return action.payload;
    },
  },
});

export const { setPagination } = paginationSlice.actions;
export const { setTagsPerPage } = tagsPerPageSlice.actions;

export const store = configureStore({
  reducer: {
    pagination: paginationSlice.reducer,
    tagsPerPage: tagsPerPageSlice.reducer,
  },
});
