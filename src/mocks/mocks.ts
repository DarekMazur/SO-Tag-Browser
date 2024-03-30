// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from '@faker-js/faker';
import { ITag } from '../types/types.ts';

// eslint-disable-next-line import/prefer-default-export
export const mockTags: ITag = {
  items: [],
};

for (let i = 0; i < faker.number.int({ min: 10, max: 150 }); i += 1) {
  mockTags.items.push({
    has_synonyms: true,
    is_moderator_only: false,
    is_required: false,
    count: faker.number.int({ min: 100000 }),
    name: faker.lorem.word(),
  });
}
