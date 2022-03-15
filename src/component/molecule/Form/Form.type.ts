import { FormEventHandler } from 'react';
import { Button } from '@/component/atom/Button';
import { Input } from '@/component/atom/Input';

export type FormProps = Input &
  Button & {
    onSubmit: FormEventHandler<HTMLFormElement> | undefined;
    orLater: boolean;
    buttonLabel: string;
  };
