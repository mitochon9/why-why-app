import { ComponentMeta, Story } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { Input } from './Input';

export default {
  title: 'atom/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: Story = (args) => {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <Input
      {...args}
      labelId='worriesInput'
      labelName='value'
      inputPlaceholder='掘り下げたいことや悩みを入力'
      inputRegister={register}
      inputErrors={errors.value}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};
