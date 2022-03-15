import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { Form } from '@/component/molecule/Form';
import { Footer } from '@/component/organism/Footer';
import { Header } from '@/component/organism/Header';
import { Home } from '@/component/template/Home';
import { valueState } from '@/state/valueState';

type FormData = {
  value: string;
};

const Index: React.FC = () => <Home />;

export default Index;
