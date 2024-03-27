import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header.tsx';

const meta: Meta<typeof Header> = {
  tags: ['autodocs'],
  component: Header,
  title: 'Organisms/Header',
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {};
