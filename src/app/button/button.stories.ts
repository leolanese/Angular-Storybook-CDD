import { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { action } from '@storybook/addon-actions';
import { within, userEvent, expect, fn } from '@storybook/test';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  args: {
    onClick: fn(),
  },
  argsTypes: {
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

export const LoggedIn: ButtonStory = {
  // take canvasElement as an argument
  play: async ({ canvasElement }) => {
    // set the scope of the test `within` 
    const canvas = within(canvasElement);
    
    const showLabel = await canvas.findByText(/Show Label/i);
  },
};

export const LoggedInWithInput: ButtonStory = {
  // take canvasElement as an argument
  play: async ({ canvasElement }) => {
    // set the scope of the test `within`
    const canvas = within(canvasElement);

    const showLabel = await canvas.findByText(/Show Label/i);
    const input = await canvas.findByRole('textbox');

    // simulated the user interation click event
    await userEvent.type(input, 'test');
    await userEvent.click(showLabel);
    expect(input).toHaveValue('test');
    expect(input).not.toHaveValue('test2');
    expect(input).not.toHaveValue('test3');

    const showLabel2 = await canvas.findByText(/Show Label/i);
    const input2 = await canvas.findByRole('textbox');

    expect(canvas.getAllByRole('textbox')).toHaveLength(1);
  }
}
