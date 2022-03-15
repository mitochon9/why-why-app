import { fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { Index, defaultProps, baseId } from '@/pages/index';

describe('pages/Index', () => {
  describe('default', () => {
    it('トップページのフォーム検証', () => {
      const view = render(
        <RecoilRoot>
          <Index {...defaultProps} />
        </RecoilRoot>,
      );
      const input = screen.getByRole('textbox');
      fireEvent.change(input, {
        target: { value: 'test' },
      });
      expect(input).toHaveValue('test');
    });
  });
});
