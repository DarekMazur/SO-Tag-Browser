import type { Meta, StoryObj } from '@storybook/react';
import { faker } from '@faker-js/faker';
import TableItem from './TableItem.tsx';
import TagLink from '../TagLink/TagLink.tsx';

const meta: Meta<typeof TableItem> = {
  tags: ['autodocs'],
  component: TableItem,
  title: 'Atoms/TableItem',
};

export default meta;

type Story = StoryObj<typeof TableItem>;

export const Default: Story = {
  argTypes: {
    label: {
      control: 'text',
      description: 'Item content',
      name: 'label',
    },
  },
  args: {
    label: faker.lorem.word(),
  },
};

export const WithIcon: Story = {
  args: {
    label: <TagLink to={faker.lorem.word()} />,
  },
};
