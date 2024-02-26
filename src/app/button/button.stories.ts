import { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  argTypes: {
    label: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
    type: { control: { type: 'select', options: ['primary', 'secondary', 'accent'] } },
  },
} as Meta<ButtonComponent>;

export const Primary: StoryObj<ButtonComponent> = (args) => ({
  component: ButtonComponent,
  props: args,
});

Primary.args = {
  label: 'Click Me',
};

export const Disabled = {
    component: ButtonComponent,
    props: {
        disabled: true
    }
};

export const Secondary = (args) => ({
  component: ButtonComponent,
  props: {
    ...args,
    type: 'secondary',
  },
});

export const Accent = (args) => ({
  component: ButtonComponent,
  props: {
    ...args,
    type: 'accent',
  },
});