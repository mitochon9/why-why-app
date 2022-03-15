import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { Result, ResultProps, defaultProps, baseId } from '@/pages/result';

describe('pages/Result', () => {
  describe('default', () => {
    it('pages/Result のテストケースを書くこと', () => {
      const view = render(
        <RecoilRoot>
          <Result {...defaultProps} />
        </RecoilRoot>,
      );
      expect(true).toBe(true);
    });
  });
});
