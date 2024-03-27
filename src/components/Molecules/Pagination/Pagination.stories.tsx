import type { Meta, StoryObj } from '@storybook/react';
import Pagination from './Pagination.tsx';
import { mockTags } from '../../../mocks/mocks.ts';

const meta: Meta<typeof Pagination> = {
  tags: ['autodocs'],
  component: Pagination,
  title: 'Molecules/Pagination',
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  argTypes: {
    items: {
      description: 'Table items list',
      name: 'Items',
    },
  },
  args: {
    items: mockTags.items,
  },
};
