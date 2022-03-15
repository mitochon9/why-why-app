import { FormProps } from './Form.type';

const defaultProps: FormProps = {
  label: '何に悩んでいる？',
  labelId: 'worries',
  step: 'first',
  previousAnswer: '悩み',
};

export const formProps: { [key: string]: FormProps } = {
  default: defaultProps,
  orLater: { ...defaultProps, step: 'orLater' },
  solution: { ...defaultProps, step: 'solution' },
};
