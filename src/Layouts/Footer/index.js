import React from "react";
import { Layout } from "../../components/Layout";
import Link from "next/link";

const Footer = () => {
    return(
        <footer className="w-full border-t-2 border-solid border-dark dark:border-light font-medium text-lg sm:text-base">
            <Layout className="py-8 flex items-center justify-between dark:text-light lg:flex-col lg:py-6">
                <span>{new Date().getFullYear()}&copy; All Rights Reserved</span>
                <div className="flex items-center lg:py-2">
                    Build with <span className="text-primary dark:text-primaryDark text-2xl px-1">&#9825;</span>
                    by &nbsp;<Link href={"https://devdreaming.com"} className="underline underline-offset-2">Code Bucks</Link>
                </div>
                <Link href={"https://devdreaming.com"} target="_blank" className="underline underline-offset-2">Say Hello</Link>
            </Layout>
        </footer>
    )
}

export { Footer };