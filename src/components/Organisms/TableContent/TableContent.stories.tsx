import type { Meta, StoryObj } from '@storybook/react';
import TableContent from './TableContent.tsx';

const meta: Meta<typeof TableContent> = {
  tags: ['autodocs'],
  component: TableContent,
  title: 'Organisms/TableContent',
};

export default meta;

type Story = StoryObj<typeof TableContent>;

export const Default: Story = {};
