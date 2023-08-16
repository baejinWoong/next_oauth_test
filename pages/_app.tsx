import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { RecoilRoot } from 'recoil'
// import '../styles/globals.scss'
import '../styles/cbt/scss/style.scss'
import Layout from '../components/common/Layout'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>CBT</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="description" content="" />
        <meta name="Keywords" content="CBT" />
        <meta property="og:title" content="CBT" />
        <meta property="og:site_name" content="CBT" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="/favicon.png" />
        {/* <meta property="og:image" content="%PUBLIC_URL%/favicon.png" /> */}
        <meta name="robots" content="index,follow" />
        <meta name="naver-site-verification" content="" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="CBT" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="/favicon.png" />
        {/* <meta name="twitter:image" content="%PUBLIC_URL%/favicon.png" /> */}
        <meta name="twitter:domain" content="CBT" />
      </Head>
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </>
  )
}

export default App
