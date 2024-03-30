// eslint-disable-next-line import/no-extraneous-dependencies
import { http, HttpResponse } from 'msw';
import { db } from '../db';

// eslint-disable-next-line import/prefer-default-export
export const handlers = [
  http.get('https://api.stackexchange.com/2.3/tags', ({ request }) => {
    const url = new URL(request.url);
    url.searchParams.set('site', 'stackoverflow');
    const resp = { items: [...db.items.getAll()] };
    return HttpResponse.json(resp);
  }),
];
