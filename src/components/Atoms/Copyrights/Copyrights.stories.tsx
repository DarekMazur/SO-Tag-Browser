import type { Meta, StoryObj } from '@storybook/react';
import Copyrights from './Copyrights.tsx';

const meta: Meta<typeof Copyrights> = {
  tags: ['autodocs'],
  component: Copyrights,
  title: 'Atoms/Copyrights',
};

export default meta;

type Story = StoryObj<typeof Copyrights>;

export const Default: Story = {};
