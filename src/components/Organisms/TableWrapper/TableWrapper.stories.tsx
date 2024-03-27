import type { Meta, StoryObj } from '@storybook/react';
import TableWrapper from './TableWrapper.tsx';

const meta: Meta<typeof TableWrapper> = {
  tags: ['autodocs'],
  component: TableWrapper,
  title: 'Organisms/TableWrapper',
};

export default meta;

type Story = StoryObj<typeof TableWrapper>;

export const Default: Story = {};
