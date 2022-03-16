import { DefaultSeo } from 'next-seo';

export const Seo = () => (
  <DefaultSeo
    defaultTitle='なぜなぜブレーン'
    description='あなたのお悩み解決！…するかも？'
    canonical='https://why-why-app.vercel.app/'
    openGraph={{
      url: 'https://why-why-app.vercel.app/',
      type: 'website',
      title: 'ポケガチャ！',
      description: 'あなたのお悩み解決！…するかも？',
      images: [
        {
          url: 'https://why-why-app.vercel.app/img/logo.png',
          width: 800,
          height: 600,
          alt: 'OGP画像',
        },
      ],
      site_name: 'なぜなぜブレーン',
    }}
    twitter={{
      handle: '@mitochon_9',
      site: 'https://why-why-app.vercel.app/',
      cardType: 'summary_large_image',
    }}
  />
);
