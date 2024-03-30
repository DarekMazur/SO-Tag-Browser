import { configureStore, createSlice } from '@reduxjs/toolkit';
import { ITagItem, TOrder } from '../types/types.ts';
import { tagsApi } from './api/tags.ts';

export type RootState = ReturnType<typeof store.getState>;

const pageSlice = createSlice({
  name: 'page',
  initialState: 0,
  reducers: {
    setPage(_state, action) {
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

export const { setPage } = pageSlice.actions;
export const { setTagsPerPage } = tagsPerPageSlice.actions;
export const { setOrder } = orderSlice.actions;
export const { setOrderBy } = orderBySlice.actions;

export * from './api/tags.ts';

export const store = configureStore({
  reducer: {
    [tagsApi.reducerPath]: tagsApi.reducer,
    page: pageSlice.reducer,
    tagsPerPage: tagsPerPageSlice.reducer,
    order: orderSlice.reducer,
    orderBy: orderBySlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tagsApi.middleware),
});
