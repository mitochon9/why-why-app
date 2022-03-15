import { render } from '@testing-library/react';
import { Solution, SolutionProps, defaultProps, baseId } from '@/pages/solution';

describe('pages/Solution', () => {
  describe('default', () => {

    it('pages/Solution のテストケースを書くこと', () => {
      const view = render(<Solution {...defaultProps} />);
      expect(true).toBe(true);
    });
  });
});