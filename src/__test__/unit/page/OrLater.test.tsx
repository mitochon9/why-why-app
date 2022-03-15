import { render } from '@testing-library/react';
import { OrLater, OrLaterProps, defaultProps, baseId } from '@/pages/or-later';

describe('pages/OrLater', () => {
  describe('default', () => {

    it('pages/OrLater のテストケースを書くこと', () => {
      const view = render(<OrLater {...defaultProps} />);
      expect(true).toBe(true);
    });
  });
});