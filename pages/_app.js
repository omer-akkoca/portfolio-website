import { TransitionEffect } from "@/src/components"
import { Navbar, Footer } from "../src/layouts"
import '@/styles/globals.css'
import { Montserrat } from "next/font/google"
import Head from 'next/head'
import { AnimatePresence } from "framer-motion"
import { useRouter } from "next/router"

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-mont"
})

export default function App({ Component, pageProps }) {

    const { asPath } = useRouter()

    return (
        <>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='../public/favicon.ico' />
                <title>CodeBucks</title>
            </Head>
            <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark dark:text-light w-full min-h-screen`}>
                <AnimatePresence mode="wait">
                    <TransitionEffect key={asPath}/>
                </AnimatePresence>
                <Navbar />
                <Component {...pageProps} />
                <Footer />
            </main>
        </>
    )
}
