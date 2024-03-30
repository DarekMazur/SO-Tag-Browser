// eslint-disable-next-line import/no-extraneous-dependencies
import '@testing-library/jest-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { setupServer } from 'msw/node';
import { db } from './mocks/db';
import { handlers } from './mocks/handlers';

const server = setupServer(...handlers);

beforeAll(() => {
  db.items.create({
    name: '_javascript',
  });

  for (let i = 0; i < 19; i += 1) {
    db.items.create();
  }

  server.listen();
});

afterEach(() => server.resetHandlers());
afterAll(() => server.close());
