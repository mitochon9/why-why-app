import { render } from '@testing-library/react';
import { Index, IndexProps, defaultProps, baseId } from '@/pages/index';

describe('pages/Index', () => {
  describe('default', () => {

    it('pages/Index のテストケースを書くこと', () => {
      const view = render(<Index {...defaultProps} />);
      expect(true).toBe(true);
    });
  });
});