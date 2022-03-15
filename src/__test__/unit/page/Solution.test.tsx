import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { Solution, SolutionProps, defaultProps, baseId } from '@/pages/solution';

describe('pages/Solution', () => {
  describe('default', () => {
    it('pages/Solution のテストケースを書くこと', () => {
      const view = render(
        <RecoilRoot>
          <Solution {...defaultProps} />
        </RecoilRoot>,
      );
      expect(true).toBe(true);
    });
  });
});
