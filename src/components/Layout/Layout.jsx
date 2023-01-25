import Head from 'next/head';
import React from 'react';

export default function Layout({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../../../public/favicon.ico" />
      </Head>
      <main>{children}</main>
    </>
  );
}
