import { ComponentMeta, Story } from '@storybook/react';
import { LinkButton } from './LinkButton';

export default {
  title: 'atom/LinkButton',
  component: LinkButton,
} as ComponentMeta<typeof LinkButton>;

const Template: Story = (args) => <LinkButton {...args} linkHref='/' />;

export const Default = Template.bind({});
Default.args = {};
