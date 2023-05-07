import { AnimatedText, GithubIcon, Layout } from "@/src/components";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../public/images/project-1.jpg"
import project2 from "../public/images/project-2.jpg"
import project3 from "../public/images/project-3.jpg"
import project4 from "../public/images/project-4.jpg"


const FeaturedProjects = ({ type, title, summary, img, link, github }) => {
    return (
        <article className="relative w-full flex items-center justify-between rounded-3xl border border-dark dark:border-light dark:bg-dark bg-light hover:bg-dark shadow-2xl p-12 lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
            <div className="absolute top-2 -right-2 -z-10 w-[100%] h-[100%] rounded-3xl bg-dark dark:bg-light"/>
            <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
                <Image
                    src={img}
                    alt={title}
                    className="w-full h-auto"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </Link>
            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-8">
                <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
                <div className="mt-2 flex items-center">
                    <Link href={github} target="_blank" className="w-10">
                        <GithubIcon/>
                    </Link>
                    <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold">Visit Projects</Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({ type, title, img, link, github }) => {
    return (
        <article className="w-full flex flex-col items-center justify-between rounded-2xl border border-dark dark:border-light bg-light dark:bg-dark shadow-2xl p-6 relative xs:p-4">
            <div className="absolute top-2 -right-2 -z-10 w-full h-full rounded-3xl bg-dark dark:bg-light" />
            <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
                <Image
                    src={img}
                    alt={title}
                    className="w-full h-auto"
                />
            </Link>
            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-2xl font-bold lg:text-2xl">{title}</h2>
                </Link>
                <div className="mt-2 flex w-full items-center justify-between">
                    <Link href={link} target="_blank" className="text-dark text-lg font-semibold underline sm:px-4 sm:text-base">Visit</Link>
                    <Link href={github} target="_blank" className="w-8 md:w-6">
                        <GithubIcon />
                    </Link>
                </div>
            </div>
        </article>
    )
}

const Projects = () => {
    return (
        <main className="w-full mb-16 flex flex-col items-center justify-center">
            <Layout className="pt-16">
                <AnimatedText text="Imagination Trumps Knowledge!" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />
                <div className="grid grid-cols-12 gap-16 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gapy-24 dm:gap-x-8">
                    <div className="col-span-12">
                        <FeaturedProjects
                            title={"Crypto Screener Application"}
                            summary={`A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                            local currency.`}
                            img={project1}
                            link={"/"}
                            github={"/"}
                            type={"Featured Project"}
                        />
                    </div>
                    <div className="col-span-6 sm:col-span-12">
                        <Project
                            title={"Crypto Screener Application"}
                            img={project2}
                            link={"/"}
                            github={"/"}
                            type={"Featured Project"}
                        />
                    </div>
                    <div className="col-span-6 sm:col-span-12">
                        <Project
                            title={"Crypto Screener Application"}
                            img={project4}
                            link={"/"}
                            github={"/"}
                            type={"Featured Project"}
                        />
                    </div>
                    <div className="col-span-12">
                        <FeaturedProjects
                            title={"Crypto Screener Application"}
                            summary={`A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                            local currency.`}
                            img={project3}
                            link={"/"}
                            github={"/"}
                            type={"Featured Project"}
                        />
                    </div>
                    <div className="col-span-6 sm:col-span-12">
                        <Project
                            title={"Crypto Screener Application"}
                            img={project1}
                            link={"/"}
                            github={"/"}
                            type={"Featured Project"}
                        />
                    </div>
                    <div className="col-span-6 sm:col-span-12">
                        <Project
                            title={"Crypto Screener Application"}
                            img={project4}
                            link={"/"}
                            github={"/"}
                            type={"Featured Project"}
                        />
                    </div>
                </div>
            </Layout>
        </main>
    )
}

export default Projects;