import type { Meta, StoryObj } from '@storybook/react';
import Footer from './Footer.tsx';

const meta: Meta<typeof Footer> = {
  tags: ['autodocs'],
  component: Footer,
  title: 'Organisms/Footer',
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {};
