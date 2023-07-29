import Link from "next/link";
import Head from "next/head";
import Image from 'next/image'
import logo from "../public/images/logo.png"

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{ title }</title>
        <meta name="description" content="JSON placeholder app for homework" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <main className='mx-auto max-w-7xl px-6 lg:px-8 pt-10 pb-10'>
            <div className="px-4 sm:px-0">
              <Image className="logo" src={logo} alt="JSON Logo" role="presentation" />
              <h3 className="text-base underline font-semibold leading-7 text-gray-500"><Link href="/">to homepage</Link></h3>
            </div>
            {children}
        </main>
      </div>
    </>
  )
}
