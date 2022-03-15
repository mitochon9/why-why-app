export type Input = {
  label: string;
  labelId: string;
  placeholder: string;
};

export const Input: React.FC<Input> = ({ label, labelId, placeholder }) => (
  <>
    <div>
      <label htmlFor={labelId}>{label}</label>
      <input id={labelId} type='text' placeholder={placeholder} className='input' />
    </div>
  </>
);
