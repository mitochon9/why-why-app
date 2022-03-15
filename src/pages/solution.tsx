import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { Form } from '@/component/molecule/Form';
import { Footer } from '@/component/organism/Footer';
import { Header } from '@/component/organism/Header';
import { valueState } from '@/state/valueState';
import { FormData } from '@/type/formData.d';

export interface SolutionProps {}

export const defaultProps: SolutionProps = {};

export const baseId = 'page-solution';

export const Solution = (props: SolutionProps) => {
  const router = useRouter();
  const [value, setValue] = useRecoilState(valueState);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    setValue([...value, data.value]);
    reset();
    router.push('/result');
  };

  return (
    <>
      <div className='flex h-screen flex-col items-center justify-between px-2 text-center md:px-0'>
        <Header />
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
        <Footer />
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
