import '../styles/globals.css'
import type { AppProps } from 'next/app'
// import "../styles/scroll.css"
import Router from 'next/router';
import { SessionProvider } from 'next-auth/react'
import NProgress from "nprogress"
import { ThemeProvider } from 'next-themes';
import "nprogress/nprogress.css";
import "../styles/nprogress.css";
// Bind NProgress to Router events
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ThemeProvider>
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
    </ThemeProvider>
  )

}

export default MyApp
