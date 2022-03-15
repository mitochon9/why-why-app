import { ComponentMeta, Story } from '@storybook/react';
import { Form } from './Form';
import { formProps } from './Form.props';
import { FormProps } from './Form.type';

export default {
  title: 'molecule/Form',
  component: Form,
} as ComponentMeta<typeof Form>;

const Template: Story<FormProps> = (args) => <Form {...args} />;

export const Default = Template.bind({});
Default.args = formProps.default;

export const OrLater = Template.bind({});
OrLater.args = formProps.orLater;

export const Solution = Template.bind({});
Solution.args = formProps.solution;
