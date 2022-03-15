export interface FormProps {
  label: string;
  labelId: string;
  step: 'first' | 'orLater' | 'solution';
  previousAnswer: string;
}
