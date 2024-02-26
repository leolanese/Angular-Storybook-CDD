import { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  argTypes: {
    label: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
    type: { control: { type: 'select', options: ['primary', 'secondary', 'terciary'] } },
  },
} as Meta<ButtonComponent>;

// type
type ButtonStory = StoryObj<ButtonComponent>;

// export Template
export const TemplateRadioButton: ButtonStory = {
  args: {
    label: 'Click Me',
    disabled: false,
  },
};

export const DefaultRadioButton: ButtonStory = {
  ...TemplateRadioButton,
  args: {
    disabled: true,
    label: 'Default',
  },
};

export const DisabledRadioButton: ButtonStory = {
    ...TemplateRadioButton,
    args: {
      disabled: true,
      label: 'Disabled'
    }
};

export const SecondaryRadioButton: ButtonStory = {
  ...TemplateRadioButton,
  args: {
    disabled: false,
    label: 'Secondary',
    onClick: action('secondary button clicked')
  },
};

export const AccentButtonStory: ButtonStory = {
  ...TemplateRadioButton,
  args: {
    ...TemplateRadioButton.args,
    disabled: false,
    label: 'terciary',
    onClick: () => action('terciary button clicked')(),
  },
};



