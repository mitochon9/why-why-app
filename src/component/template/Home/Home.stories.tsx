import { ComponentMeta, Story } from '@storybook/react';
import { RecoilRoot } from 'recoil';
import { Home } from './Home';
import { homeProps } from './Home.props';
import { HomeProps } from './Home.type';

export default {
  title: 'template/Home',
  component: Home,
} as ComponentMeta<typeof Home>;

const Template: Story<HomeProps> = (args) => (
  <RecoilRoot>
    <Home {...args} />;
  </RecoilRoot>
);

export const Default = Template.bind({});
Default.args = homeProps.default;
