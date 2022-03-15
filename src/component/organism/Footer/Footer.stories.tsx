import { ComponentMeta, Story } from '@storybook/react';
import { Footer } from './Footer';
import { footerProps } from './Footer.props';
import { FooterProps } from './Footer.type';

export default {
  title: 'organism/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = footerProps.default;
