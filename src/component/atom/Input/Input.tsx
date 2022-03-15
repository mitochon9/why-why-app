import { FieldError } from 'react-hook-form';

export type Input = {
  labelId: string;
  labelName: string;
  inputPlaceholder: string;
  inputRegister: any;
  inputErrors: FieldError | undefined;
};

export const Input: React.FC<Input> = ({
  labelId,
  labelName,
  inputPlaceholder,
  inputRegister,
  inputErrors,
}) => (
  <>
    <div>
      <div className='flex items-center justify-between'>
        <label htmlFor={labelId}>入力欄</label>
        {inputErrors && <span className='text-pink-800'>※入力が必要です</span>}
      </div>
      <input
        id={labelId}
        name={labelName}
        type='text'
        placeholder={inputPlaceholder}
        className='input'
        {...inputRegister(labelName, { required: true })}
      />
    </div>
  </>
);
