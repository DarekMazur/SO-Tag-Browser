import type { Meta, StoryObj } from '@storybook/react';
import Home from './Home.tsx';

const meta: Meta<typeof Home> = {
  tags: ['autodocs'],
  component: Home,
  title: 'Pages/Home',
};

export default meta;

type Story = StoryObj<typeof Home>;

export const Default: Story = {};
