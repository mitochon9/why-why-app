import { fireEvent, render, screen } from '@testing-library/react';
import { Form, baseId } from './Form';
import { formProps } from './Form.props';
import { FormProps } from './Form.type';

let props: FormProps;

describe('component/molecule/Form', () => {
  describe('default', () => {
    beforeEach(() => {
      props = formProps.default;
    });

    it('input に worries と入力されるか', () => {
      const view = render(<Form {...props} />);

      const input = screen.getByRole('textbox');
      fireEvent.change(input, {
        target: { value: 'worries' },
      });
      expect(input).toHaveValue('worries');
    });
  });
});
