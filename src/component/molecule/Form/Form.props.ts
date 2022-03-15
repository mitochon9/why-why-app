import { FormProps } from './Form.type';

const defaultProps: FormProps = {
  labelId: 'worries',
  labelName: 'value',
  inputPlaceholder: '入力',
  inputRegister: '',
  inputErrors: undefined,
  orLater: false,
  buttonType: 'submit',
  buttonVariant: 'primary',
  buttonLabel: '解決しなさそう',
  onSubmit: () => console.log('ccc'),
};

export const formProps: { [key: string]: FormProps } = {
  default: defaultProps,
};
