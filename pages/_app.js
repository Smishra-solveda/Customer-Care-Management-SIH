import store from '@/components/utils/store';
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import NextNProgress from 'nextjs-progressbar';
import { createContext } from 'react';
import { Provider } from "react-redux";


export const PersonContext = createContext();

export default function App({ Component, pageProps: { session, ...pageProps } }) {

  return (
    <>
    <Provider store={store}>

      <NextNProgress color="#ca8a04" />
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>

    </>
  )
}
