import { ComponentMeta, Story } from '@storybook/react';
import { Header } from './Header';
import { headerProps } from './Header.props';
import { HeaderProps } from './Header.type';

export default {
  title: 'organism/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = headerProps.default;
