import type { Meta, StoryObj } from '@storybook/react';
import { faker } from '@faker-js/faker';
import TagLink from './TagLink.tsx';

const meta: Meta<typeof TagLink> = {
  tags: ['autodocs'],
  component: TagLink,
  title: 'Atoms/TagLink',
};

export default meta;

type Story = StoryObj<typeof TagLink>;

export const Default: Story = {
  argTypes: {
    to: {
      control: 'text',
      description: 'StackOverflow tags endpoint',
      name: 'tag',
    },
  },
  args: {
    to: faker.lorem.word(),
  },
};
