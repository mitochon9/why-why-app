import Link from 'next/link';

export type Link = {
  linkHref: string;
};
export const LinkButton: React.FC<Link> = ({ children, linkHref }) => (
  <>
    <Link href={linkHref}>
      <a className='link-button'>{children}</a>
    </Link>
  </>
);
