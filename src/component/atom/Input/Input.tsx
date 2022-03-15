export type Input = {
  labelId: string;
  placeholder: string;
};

export const Input: React.FC<Input> = ({ labelId, placeholder }) => (
  <>
    <div>
      <label htmlFor={labelId}>入力欄</label>
      <input id={labelId} type='text' placeholder={placeholder} className='input' />
    </div>
  </>
);
