import { MyComponentComponent } from './my-component.component';
import { StoryObj, Meta } from '@storybook/angular';

export default {
  title: 'Components/MyComponent',
  component: MyComponentComponent,
} as Meta<MyComponentComponent>;

type MyComponentStory = StoryObj<MyComponentComponent>;
const Template: MyComponentStory = {
  args: {},
};

export const Default: MyComponentStory = {
  ...Template,
  args: {},
};