import { getByText, render, screen } from '@testing-library/react';
import { Footer, baseId } from './Footer';
import { footerProps } from './Footer.props';
import { FooterProps } from './Footer.type';

let props: FooterProps;

describe('component/organism/Footer', () => {
  describe('default', () => {
    beforeEach(() => {
      props = footerProps.default;
    });

    it('たかはし と表示されているか', () => {
      const view = render(<Footer {...props} />);
      expect(screen.getByText(/たかはし/)).toBeInTheDocument();
    });
  });
});
