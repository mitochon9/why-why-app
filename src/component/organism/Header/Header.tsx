import { HeaderProps } from './Header.type';

export const baseId = 'organism-header';

export const Header: React.FC<HeaderProps> = () => (
  <>
    <header>
      <h1 className='text-xl font-bold text-primary-700'>なぜなぜアプリ</h1>
      <h2 className='font-bold'>あなたのお悩み解決！...するかも？</h2>
      <p>※思考の沼にはまり込んで抜け出せなくなる可能性があります。取り扱いにはご注意ください※</p>
    </header>
  </>
);
