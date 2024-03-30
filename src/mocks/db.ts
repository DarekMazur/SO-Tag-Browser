// eslint-disable-next-line import/no-extraneous-dependencies
import { factory, primaryKey } from '@mswjs/data';
import { faker } from '@faker-js/faker';

// eslint-disable-next-line import/prefer-default-export
export const db = factory({
  items: {
    has_synonyms: () => true,
    is_moderator_only: () => false,
    is_required: () => false,
    count: () => faker.number.int({ min: 100000, max: 3000000 }),
    name: () => faker.lorem.word(),
    uuid: primaryKey(() => faker.string.uuid()),
  },
});
