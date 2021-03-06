import { GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { Form } from '@/component/molecule/Form';
import { answerState } from '@/state/answerState';
import { loadingState } from '@/state/loadingState';
import { valueState } from '@/state/valueState';
import { FormData } from '@/type/formData.d';

export interface SolutionProps {}

export const defaultProps: SolutionProps = {};

export const baseId = 'page-solution';

export const Solution = (props: SolutionProps) => {
  const router = useRouter();
  const value = useRecoilValue(valueState);
  const setAnswer = useSetRecoilState(answerState);

  const [loading, setLoading] = useRecoilState(loadingState);

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    setLoading(true);
    setAnswer(data.value);
    reset();
    router.push('/result');
  };

  return (
    <>
      {loading && (
        <div className='overlay'>
          <Image src='/img/spinner.svg' alt='spinner' width={160} height={160} />
        </div>
      )}

      <div className='w-full'>
        <h2 className='font-bold'>導き出した答えは</h2>
        <p className='text-lg font-bold'>{value[value.length - 1]}！</p>
        <p className='font-bold'>決意を入力！</p>

        <Form
          labelId='worries'
          labelName='value'
          inputPlaceholder='決意を入力'
          inputRegister={register}
          inputErrors={errors.value}
          buttonLabel={'結果を表示'}
          buttonType='submit'
          buttonVariant='primary'
          orLater={false}
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

export default Solution;
