import * as React from 'react';
import Head from 'next/head';
// MUI
import { Container } from '@mui/material';
// Utils
import { ISEO } from '@utils/interfaces';

export const defaultSeo: ISEO = {
  metaTitle: 'خانه',
  metaDescription: 'بیت برگ',
};

const Wrapper: React.FC<{
  metaTitle?: string;
  metaDescription?: string;
  children: React.ReactNode;
}> = ({
  metaTitle = defaultSeo.metaTitle,
  metaDescription = defaultSeo.metaDescription,
  children,
}) => {
  const seoWithDefaults = {
    metaTitle,
    metaDescription,
  };
  const fullSeo = {
    ...seoWithDefaults,
    metaTitle: `${seoWithDefaults.metaTitle} | بیت برگ`,
  };

  return (
    <>
      <Head>
        <title>{fullSeo.metaTitle}</title>
        <meta property="og:title" content={fullSeo.metaTitle} />
        <meta name="twitter:title" content={fullSeo.metaTitle} />

        <meta name="description" content={fullSeo.metaDescription} />
        <meta property="og:description" content={fullSeo.metaDescription} />
        <meta name="twitter:description" content={fullSeo.metaDescription} />

        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>
        <Container maxWidth="lg">{children}</Container>
      </main>
    </>
  );
};

export default Wrapper;
