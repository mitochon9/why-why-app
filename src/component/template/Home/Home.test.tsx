import { render } from '@testing-library/react';
import { Home, baseId } from './Home';
import { homeProps } from './Home.props';
import { HomeProps } from './Home.type';

let props: HomeProps;

describe('component/template/Home', () => {
  describe('default', () => {
    beforeEach(() => {
      props = homeProps.default;
    });

    it('component/template/Home のテストケースを書くこと', () => {
      const view = render(<Home {...props} />);
      expect(true).toBe(true);
    });
  });
});