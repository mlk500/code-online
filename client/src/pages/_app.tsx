import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Coding Online</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/code.png' />
        <meta
          name='description'
          content='Online Coding Sessions'
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}