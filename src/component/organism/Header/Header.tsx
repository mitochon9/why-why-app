import Image from 'next/image';
import Link from 'next/link';
import { HeaderProps } from './Header.type';

export const baseId = 'organism-header';

export const Header: React.FC<HeaderProps> = () => (
  <>
    <header>
      <Link href='/'>
        <a className='mt-5 flex flex-col items-center justify-center gap-x-2'>
          <Image src='/img/logo.png' alt='logo' width={60} height={60} />
          <h1 className='text-xl font-bold text-primary-700'>なぜなぜブレーン</h1>
        </a>
      </Link>
      <h2 className='font-bold'>あなたのお悩み解決！...するかも？</h2>
      <p className='text-xs'>
        ※思考の沼にはまり込んで抜け出せなくなる可能性があります。
        <br />
        取り扱いにはご注意くださいませ。
        <br />
        また少しイラッとすることもあるかも知れませんがご了承ください。
      </p>
    </header>
  </>
);
