import type { Meta, StoryObj } from '@storybook/react';
import { CtaButton } from '../src';

const meta: Meta<typeof CtaButton> = {
  title: 'Buttons/ButtonCta',
  component: CtaButton,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof CtaButton>;

export const ButtonCta: Story = {
  args: {
    label: 'Assine Agora',
    disable: false,
  },
};

