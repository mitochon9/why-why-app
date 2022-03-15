import { ComponentMeta, Story } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'atom/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: Story = (args) => <Button variant='primary' {...args} />;

export const Default = Template.bind({});
Default.args = { children: '解決しなさそう' };

export const Secondary = Template.bind({});
Secondary.args = { variant: 'secondary', children: '解決しそう' };
