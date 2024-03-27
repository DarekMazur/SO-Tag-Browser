import type { Meta, StoryObj } from '@storybook/react';
import TableHeader from './TableHeader.tsx';

const meta: Meta<typeof TableHeader> = {
  tags: ['autodocs'],
  component: TableHeader,
  title: 'Molecules/TableHeader',
};

export default meta;

type Story = StoryObj<typeof TableHeader>;

export const Default: Story = {
  argTypes: {
    headers: {
      description: 'Table headers list',
      name: 'Items',
    },
  },
  args: {
    headers: ['Tag', 'Posts count', ''],
  },
};

export const NoEmptyHeaders: Story = {
  args: {
    headers: ['Tag', 'Posts count', 'Lorem'],
  },
};
