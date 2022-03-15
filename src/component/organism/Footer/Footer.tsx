import { FooterProps } from './Footer.type';

export const baseId = 'organism-footer';

export const Footer: React.FC<FooterProps> = () => (
  <>
    <div>
      <footer className='flex flex-col text-center text-gray-700'>
        <span className='text-xs text-gray-700'>
          入力した情報は保存などしていませんのでご安心ください。
        </span>
        <span>©2022 たかはし</span>
      </footer>
    </div>
  </>
);
