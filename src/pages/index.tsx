import { useForm } from 'react-hook-form';
import { Form } from '@/component/molecule/Form';
import { Footer } from '@/component/organism/Footer';
import { Header } from '@/component/organism/Header';

type FormData = {
  value: string;
};

const Home: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <>
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
    </>
  );
};

export default Home;
