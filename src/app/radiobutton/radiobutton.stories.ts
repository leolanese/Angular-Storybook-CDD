import { moduleMetadata } from '@storybook/angular';
import { StoryObj, Meta } from '@storybook/angular';
import { RadioButtonComponent } from './radiobutton.component';

export default {
  title: 'Components/RadioButton',
  component: RadioButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
    }),
  ],
  argTypes: {
    showError: {
      control: 'boolean',
    },
    errorMessage: {
      control: 'text',
    },
  },
} as Meta<RadioButtonComponent>;
// type
type RadioButtonStory = StoryObj<RadioButtonComponent>;
// export Template
export const Template: RadioButtonStory = {
  args: {},
};

export const radioButton: RadioButtonStory = {
  ...Template,
  args: {
    label: 'Option',
  },
};