import { render, screen } from '@testing-library/react';
import { Header, baseId } from './Header';
import { headerProps } from './Header.props';
import { HeaderProps } from './Header.type';

let props: HeaderProps;

describe('component/organism/Header', () => {
  describe('default', () => {
    beforeEach(() => {
      props = headerProps.default;
    });

    it('なぜなぜアプリと画面に表示されているか', () => {
      const view = render(<Header {...props} />);
      expect(screen.getByText('なぜなぜアプリ')).toBeInTheDocument();
    });
  });
});
