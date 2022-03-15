import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { OrLater, OrLaterProps, defaultProps, baseId } from '@/pages/or-later';

describe('pages/OrLater', () => {
  describe('default', () => {
    it('pages/OrLater のテストケースを書くこと', () => {
      const view = render(
        <RecoilRoot>
          <OrLater {...defaultProps} />
        </RecoilRoot>,
      );
      expect(true).toBe(true);
    });
  });
});
