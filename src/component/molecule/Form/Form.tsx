import { FormProps } from './Form.type';
import { Button } from '@/component/atom/Button';
import { Input } from '@/component/atom/Input';

export const baseId = 'molecule-form';

export const Form: React.FC<FormProps> = ({
  title,
  labelId,
  labelName,
  inputRegister,
  inputErrors,
  onSubmit,
  orLater,
  buttonLabel,
}) => {
  return (
    <>
      <form onSubmit={onSubmit} className='space-y-5'>
        <h2>{title}</h2>
        <Input
          labelId={labelId}
          labelName={labelName}
          inputPlaceholder='placeholder'
          inputRegister={inputRegister}
          inputErrors={inputErrors}
        />

        <Button buttonType='submit' buttonVariant='primary'>
          {buttonLabel}
        </Button>

        {orLater && (
          <Button buttonType='submit' buttonVariant='primary' className='ml-5'>
            解決しそう
          </Button>
        )}
      </form>
    </>
  );
};
