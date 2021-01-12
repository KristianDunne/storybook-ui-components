import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import { Chat } from './Chat';
import design from './chat-design.png';

export default {
  title: 'Component/Chat',
  component: Chat,
  decorators: [withDesign],
  argTypes: {},

  parameters: {
    design: {
      type: 'image',
      url: design,
    },
    backgrounds: {
      default: 'default',
      values: [
        {
          name: 'default',
          value: '#FAEFE3',
        },
        {
          name: 'black',
          value: '#000000',
        },
        {
          name: 'white',
          value: '#ffffff',
        },
        {
          name: 'grey',
          value: '#999999',
        },
      ],
    },
  },
};

const Story = (args) => <Chat {...args} />;

export const Basic = Story.bind({});
Basic.args = {
  label: 'Chat',
};
