import { render } from '@testing-library/react';
import { Home, HomeProps, defaultProps, baseId } from '@/pages/home';

describe('pages/Home', () => {
  describe('default', () => {

    it('pages/Home のテストケースを書くこと', () => {
      const view = render(<Home {...defaultProps} />);
      expect(true).toBe(true);
    });
  });
});