import { FormProps } from './Form.type';
import { Button } from '@/component/atom/Button';
import { Input } from '@/component/atom/Input';

export const baseId = 'molecule-form';

export const Form: React.FC<FormProps> = ({
  labelId,
  labelName,
  inputRegister,
  inputErrors,
  inputPlaceholder,
  onSubmit,
  onClick,
  orLater,
  buttonLabel,
}) => {
  return (
    <>
      <form onSubmit={onSubmit} className='mx-auto w-full max-w-lg space-y-10'>
        <Input
          labelId={labelId}
          labelName={labelName}
          inputPlaceholder={inputPlaceholder}
          inputRegister={inputRegister}
          inputErrors={inputErrors}
        />

        <Button buttonType='submit' buttonVariant='primary'>
          {buttonLabel}
        </Button>

        {orLater && (
          <Button buttonType='submit' buttonVariant='secondary' className='ml-5' onClick={onClick}>
            解決しそう
          </Button>
        )}
      </form>
    </>
  );
};
