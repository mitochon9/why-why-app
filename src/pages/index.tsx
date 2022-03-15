import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { Form } from '@/component/molecule/Form';
import { Footer } from '@/component/organism/Footer';
import { Header } from '@/component/organism/Header';
import { valueState } from '@/state/valueState';

type FormData = {
  value: string;
};

const Home: React.FC = () => {
  const router = useRouter();
  const setValue = useSetRecoilState(valueState);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    setValue(data.value);
    router.push('/orLater');
  };

  return (
    <>
      <div className='flex h-screen flex-col items-center justify-between text-center'>
        <Header />
        <Form
          labelId='worries'
          labelName='value'
          inputPlaceholder='入力'
          inputRegister={register}
          inputErrors={errors.value}
          buttonLabel={'次に進む'}
          buttonType='submit'
          buttonVariant='primary'
          title='深めたいことや悩みを入力'
          orLater={false}
          onSubmit={handleSubmit(onSubmit)}
        />
        <Footer />
      </div>
    </>
  );
};

export default Home;
