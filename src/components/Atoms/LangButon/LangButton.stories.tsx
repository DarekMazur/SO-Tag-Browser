import type { Meta, StoryObj } from '@storybook/react';
import LangButton from './LangButton.tsx';
import flagGb from '../../../assets/icons/gb.svg';
import flagPl from '../../../assets/icons/pl.svg';

const meta: Meta<typeof LangButton> = {
  tags: ['autodocs'],
  component: LangButton,
  title: 'Atoms/LangButton',
};

export default meta;

type Story = StoryObj<typeof LangButton>;

export const Eng: Story = {
  argTypes: {
    lng: {
      control: 'text',
      description: 'Language short name',
      name: 'lng',
    },
    url: {
      control: 'text',
      description: 'Flag icon url',
      name: 'url',
    },
    alt: {
      control: 'text',
      description: 'Icon alternative text',
      name: 'alt',
    },
  },
  args: {
    lng: 'en',
    url: flagGb,
    alt: 'English',
  },
};

export const Pl: Story = {
  args: {
    lng: 'pl',
    url: flagPl,
    alt: 'Polish',
  },
};
