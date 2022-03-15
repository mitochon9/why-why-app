import Link from 'next/link';
import { HeaderProps } from './Header.type';

export const baseId = 'organism-header';

export const Header: React.FC<HeaderProps> = () => (
  <>
    <header>
      <Link href='/'>
        <a>
          <h1 className='mt-5 text-xl font-bold text-primary-700'>なぜなぜブレーン</h1>
        </a>
      </Link>
      <h2 className='font-bold'>あなたのお悩み解決！...するかも？</h2>
      <p className='text-xs'>
        ※思考の沼にはまり込んで抜け出せなくなる可能性があります。
        <br />
        取り扱いにはご注意くださいませ。
        <br />
        また少しイラッとするかも知れませんがご了承ください。
      </p>
    </header>
  </>
);
