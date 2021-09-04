import '../styles/globals.css';
import type { AppProps } from 'next/app';

export default function App(props: AppProps) {
  const { pageProps, Component } = props;
  return <Component {...pageProps}></Component>;
}
