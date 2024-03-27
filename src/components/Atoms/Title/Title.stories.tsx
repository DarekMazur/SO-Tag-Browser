import type { Meta, StoryObj } from '@storybook/react';
import { faker } from '@faker-js/faker';
import Title from './Title.tsx';

const meta: Meta<typeof Title> = {
  tags: ['autodocs'],
  component: Title,
  title: 'Atoms/Title',
};

export default meta;

type Story = StoryObj<typeof Title>;

export const Default: Story = {
  argTypes: {
    label: {
      control: 'text',
      description: 'Title content',
      name: 'label',
    },
  },
  args: {
    label: faker.lorem.sentence({ min: 2, max: 3 }),
  },
};
