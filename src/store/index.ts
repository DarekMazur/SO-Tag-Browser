import { configureStore, createSlice } from '@reduxjs/toolkit';
import { ITagItem, TOrder } from '../types/types.ts';

export type RootState = ReturnType<typeof store.getState>;

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

const orderSlice = createSlice({
  name: 'order',
  initialState: 'asc' as TOrder,
  reducers: {
    setOrder(_state, action) {
      return action.payload;
    },
  },
});

const orderBySlice = createSlice({
  name: 'orderBy',
  initialState: 'name' as keyof ITagItem,
  reducers: {
    setOrderBy(_state, action) {
      return action.payload;
    },
  },
});

export const { setPagination } = paginationSlice.actions;
export const { setTagsPerPage } = tagsPerPageSlice.actions;
export const { setOrder } = orderSlice.actions;
export const { setOrderBy } = orderBySlice.actions;

export const store = configureStore({
  reducer: {
    pagination: paginationSlice.reducer,
    tagsPerPage: tagsPerPageSlice.reducer,
    order: orderSlice.reducer,
    orderBy: orderBySlice.reducer,
  },
});
