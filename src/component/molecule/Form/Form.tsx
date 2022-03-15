import { useSetRecoilState } from 'recoil';
import { FormProps } from './Form.type';
import { Button } from '@/component/atom/Button';
import { Input } from '@/component/atom/Input';
import { buttonNameState } from '@/state/buttonNameState';

export const baseId = 'molecule-form';

export const Form: React.FC<FormProps> = ({
  labelId,
  labelName,
  inputRegister,
  inputErrors,
  inputPlaceholder,
  onSubmit,
  orLater,
  buttonLabel,
}) => {
  const setButtonName = useSetRecoilState(buttonNameState);

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

        <Button
          value='primary'
          buttonType='submit'
          buttonVariant='primary'
          onClick={() => setButtonName('primary')}
        >
          {buttonLabel}
        </Button>

        {orLater && (
          <Button
            value='secondary'
            buttonType='submit'
            buttonVariant='secondary'
            onClick={() => setButtonName('secondary')}
            className='ml-5'
          >
            解決しそう
          </Button>
        )}
      </form>
    </>
  );
};
