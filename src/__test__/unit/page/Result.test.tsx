import { render } from '@testing-library/react';
import { Result, ResultProps, defaultProps, baseId } from '@/pages/result';

describe('pages/Result', () => {
  describe('default', () => {

    it('pages/Result のテストケースを書くこと', () => {
      const view = render(<Result {...defaultProps} />);
      expect(true).toBe(true);
    });
  });
});