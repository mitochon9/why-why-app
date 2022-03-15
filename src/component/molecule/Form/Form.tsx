import { FormProps } from './Form.type';
import { Button } from '@/component/atom/Button';
import { Input } from '@/component/atom/Input';

export const baseId = 'molecule-form';

export const Form: React.FC<FormProps> = ({ labelId, step, previousAnswer }) => (
  <>
    <form className='space-y-5'>
      {step === 'first' ? (
        <h2>掘り下げたいこと、悩みを入力</h2>
      ) : step === 'orLater' ? (
        <h2>なぜ{previousAnswer}？</h2>
      ) : step === 'solution' ? (
        <h2>答えは{previousAnswer}！決意を入力！</h2>
      ) : null}
      <Input labelId={labelId} placeholder='placeholder' />

      {step === 'first' ? (
        <Button variant='primary'>次に進む</Button>
      ) : step === 'orLater' ? (
        <div className='flex gap-x-5'>
          <Button variant='primary'>解決しなさそう</Button>
          <Button variant='secondary'>解決しそう</Button>
        </div>
      ) : step === 'solution' ? (
        <Button variant='primary'>解決！</Button>
      ) : null}
    </form>
  </>
);
