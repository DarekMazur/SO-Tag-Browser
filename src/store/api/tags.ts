import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITag } from '../../types/types.ts';

export const tagsApi = createApi({
  reducerPath: 'tagsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.stackexchange.com/2.3/',
  }),
  tagTypes: ['Tags'],
  endpoints: (builder) => ({
    getTags: builder.query<ITag, void>({
      query: () => ({
        url: 'tags?site=stackoverflow',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        },
      }),
      providesTags: ['Tags'],
    }),
  }),
});

export const { useGetTagsQuery } = tagsApi;
