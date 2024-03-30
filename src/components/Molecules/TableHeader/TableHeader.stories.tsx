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
    headers: [
      {
        label: '',
        name: 'order',
        isSortable: false,
      },
      {
        label: 'Tag',
        name: 'name',
        isSortable: true,
      },
      {
        label: 'Posts count',
        name: 'count',
        isSortable: true,
      },
      {
        label: '',
        name: 'link',
        isSortable: false,
      },
    ],
  },
};

export const NoEmptyHeaders: Story = {
  args: {
    headers: [
      {
        label: 'nr',
        name: 'order',
        isSortable: false,
      },
      {
        label: 'Tag',
        name: 'name',
        isSortable: true,
      },
      {
        label: 'Posts count',
        name: 'count',
        isSortable: true,
      },
      {
        label: 'Link',
        name: 'link',
        isSortable: false,
      },
    ],
  },
};
