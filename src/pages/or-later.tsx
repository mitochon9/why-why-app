import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Form } from '@/component/molecule/Form';
import { buttonNameState } from '@/state/buttonNameState';
import { valueState } from '@/state/valueState';
import { FormData } from '@/type/formData.d';

export interface OrLaterProps {}

export const defaultProps: OrLaterProps = {};

export const baseId = 'page-or-later';

export const OrLater = (props: OrLaterProps) => {
  const router = useRouter();
  const [value, setValue] = useRecoilState(valueState);
  const buttonName = useRecoilValue(buttonNameState);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    setValue([...value, data.value]);
    if (buttonName === 'primary') {
      reset();
    }

    if (buttonName === 'secondary') {
      reset();
      router.push('solution');
    }
  };

  return (
    <>
      <div className='w-full'>
        {value.length === 10 ? (
          <p>頑張ってるね！</p>
        ) : value.length === 30 ? (
          <p>思考の沼にハマってない...？</p>
        ) : value.length === 100 ? (
          <p>深堀りしすぎィ！！</p>
        ) : null}

        <h2 className='text-lg font-bold'>なぜ{value[value.length - 1]}？</h2>

        <Form
          labelId='worries'
          labelName='value'
          inputPlaceholder='さらに深めたいことを入力'
          inputRegister={register}
          inputErrors={errors.value}
          buttonLabel={'もっと深める'}
          buttonType='submit'
          buttonVariant='primary'
          orLater={true}
          onSubmit={handleSubmit(onSubmit)}
        />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
  };
};

export default OrLater;
