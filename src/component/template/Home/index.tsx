import { Home as HomePresenter } from './Home';
import { HomeProps } from './Home.type';

const Home: React.FC = () => {
  const defaultProps: HomeProps = {};
  return <HomePresenter {...defaultProps} />;
};

export { Home };
