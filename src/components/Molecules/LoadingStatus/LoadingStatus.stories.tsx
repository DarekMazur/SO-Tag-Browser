import type { Meta, StoryObj } from '@storybook/react';
import LoadingStatus from './LoadingStatus.tsx';

const meta: Meta<typeof LoadingStatus> = {
  tags: ['autodocs'],
  component: LoadingStatus,
  title: 'Molecules/LoadingStatus',
};

export default meta;

type Story = StoryObj<typeof LoadingStatus>;

export const isLoading: Story = {
  argTypes: {
    status: {
      description: 'API status',
      name: 'Status',
    },
  },
  args: {
    status: 'loading',
  },
};

export const isError: Story = {
  args: {
    status: 'error',
  },
};
