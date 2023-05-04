import { Navbar, Footer } from "../src/layouts"
import '@/styles/globals.css'
import { Montserrat } from "next/font/google"
import Head from 'next/head'

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-mont"
})

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='../public/favicon.ico' />
                <title>CodeBucks</title>
            </Head>
            <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark dark:text-light w-full min-h-screen`}>
                <Navbar />
                <Component {...pageProps} />
                <Footer />
            </main>
        </>
    )
}
