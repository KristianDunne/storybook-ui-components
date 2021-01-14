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
  avatar: require('../avatar.png'),
  username: 'Emily Dougrer',
  usertitle: 'Developer',
  copy: `Hi there. 👋 We use Boards to share initial goals and ideas.`,
  inputPlaceholder: 'Type your message...',
  inputColor: '',
  inputPlaceholderColor: '',
  buttonLabel: 'Send',
  buttonColor: '',
  topContainerBackground: '',
  topContainerColor: '',
  bottomContainerBackground: '',
  closeIconColor: '',
  onClose: () => {},
  onSend: (message) => {},
  onSubmit: (e) => {},
};
