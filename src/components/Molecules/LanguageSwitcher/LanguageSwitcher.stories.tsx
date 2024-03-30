import type { Meta, StoryObj } from '@storybook/react';
import LanguageSwitcher from './LanguageSwitcher.tsx';

const meta: Meta<typeof LanguageSwitcher> = {
  tags: ['autodocs'],
  component: LanguageSwitcher,
  title: 'Molecules/LanguageSwitcher',
};

export default meta;

type Story = StoryObj<typeof LanguageSwitcher>;

export const Default: Story = {};
