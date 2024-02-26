import { Meta, StoryObj } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { ToggleButtonComponent } from './toggle-button.component';

export default {
  title: 'Components/Toggle Button',
  component: ToggleButtonComponent,
  decorators: [
    module => ({
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    isToggled: { control: { type: 'boolean' } },
  },
} as Meta<ToggleButtonComponent>;

type ToogleButtonStory = StoryObj<ToggleButtonComponent>;

export const Template: ToogleButtonStory = {
  args: {},
};

export const Default: ToogleButtonStory = {
  ...Template,
  args: {
    isToggled: false
  },
}

export const Checked: ToogleButtonStory = {
    ...Template,
    args: {
      isToggled: true
    },
  }
  
export const Disabled: ToogleButtonStory = {
    ...Template,
    args: {
      isDisabled: true
    }
}
