import { ComponentMeta, Story } from '@storybook/react';
import { Input } from './Input';

export default {
  title: 'atom/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: Story = (args) => (
  <Input {...args} label='今、何に悩んでいる？' labelId='worriesInput' placeholder='悩みを入力' />
);

export const Default = Template.bind({});
Default.args = {};
