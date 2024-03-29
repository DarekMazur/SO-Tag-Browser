import type { Meta, StoryObj } from '@storybook/react';
import PaginationActions from './PaginationActions.tsx';

const meta: Meta<typeof PaginationActions> = {
  tags: ['autodocs'],
  component: PaginationActions,
  title: 'Molecules/PaginationActions',
};

export default meta;

type Story = StoryObj<typeof PaginationActions>;

export const Default: Story = {};
