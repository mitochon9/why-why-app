import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { Form } from '@/component/molecule/Form';
import { Footer } from '@/component/organism/Footer';
import { Header } from '@/component/organism/Header';
import { answerState } from '@/state/answerState';
import { valueState } from '@/state/valueState';
import { FormData } from '@/type/formData.d';

export interface IndexProps {}

export const defaultProps: IndexProps = {};

export const baseId = 'page-index';

export const Index = (props: IndexProps) => {
  const router = useRouter();
  const [value, setValue] = useRecoilState(valueState);
  const setAnswer = useSetRecoilState(answerState);

  useEffect(() => {
    setValue([]);
    setAnswer('');
  }, [setValue, setAnswer, router]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    setValue([...value, data.value]);
    router.push('/or-later');
    reset();
  };

  return (
    <>
      <div className='w-full'>
        <h2 className='text-lg font-bold'>深めたいことや悩みを入力</h2>

        <Form
          labelId='worries'
          labelName='value'
          inputPlaceholder='深めたいことを入力'
          inputRegister={register}
          inputErrors={errors.value}
          buttonLabel={'深める'}
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

export default Index;
