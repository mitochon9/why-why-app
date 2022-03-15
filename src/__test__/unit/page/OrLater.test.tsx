import { act, fireEvent, getByText, render, screen, waitFor } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { defaultProps, OrLater } from '@/pages/or-later';

describe('pages/OrLater', () => {
  describe('default', () => {
    it('入力検証', async () => {
      const view = render(
        <RecoilRoot>
          <OrLater {...defaultProps} />
        </RecoilRoot>,
      );

      const input = screen.getByRole('textbox');
      const button = screen.getAllByRole('button');

      // 初期状態で何も入力されていないことを確認
      expect(input).not.toHaveValue();

      // 入力がされていない状態でボタンがクリックされるとエラーメッセージが表示される
      fireEvent.click(button[0]);
      await waitFor(() => {
        expect(screen.getByText(/入力が必要です/)).toBeInTheDocument();
      });

      // test と入力される
      fireEvent.change(input, {
        target: { value: 'test' },
      });
      expect(input).toHaveValue('test');

      // 送信した後に input の入力は空になる
      fireEvent.click(button[0]);
      await waitFor(() => {
        expect(input).not.toHaveValue();
      });

      // for (let index = 0; index <= 10; index++) {
      //   fireEvent.change(input, {
      //     target: { value: index },
      //   });
      //   fireEvent.click(button[0]);
      // }
      // await waitFor(() => {
      //   expect(screen.getByText(/頑張ってるね/)).toBeInTheDocument();
      // });
    });
  });
});
