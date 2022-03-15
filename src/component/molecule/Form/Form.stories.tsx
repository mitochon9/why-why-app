import { ComponentMeta, Story } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { Form } from './Form';
import { formProps } from './Form.props';
import { FormProps } from './Form.type';

export default {
  title: 'molecule/Form',
  component: Form,
} as ComponentMeta<typeof Form>;

const Template: Story<FormProps> = (args) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (formData: any) => {
    console.log(formData);
  };

  return (
    <Form
      {...args}
      onSubmit={handleSubmit(onSubmit)}
      inputRegister={register}
      inputErrors={errors.value}
    />
  );
};

export const Default = Template.bind({});
Default.args = formProps.default;
