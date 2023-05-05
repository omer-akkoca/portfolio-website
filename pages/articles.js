import { AnimatedText, Layout } from "@/src/components";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import article1 from "../public/images/project-2.jpg"
import article2 from "../public/images/project-4.jpg"
import article3 from "../public/images/article-3.png"
import article4 from "../public/images/article-4.jpg"

import { motion, useMotionValue } from "framer-motion";

const FramerImage = motion(Image)

const MovingImage = ({ title, img, link }) => {
    
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const imgRef = useRef(null)

    const handleMouse = (e) => {
        imgRef.current.style.display = "inline-block"
        x.set(e.pageX)
        y.set(-10)
    }

    const handleMouseLeave = (e) => {
        imgRef.current.style.display = "none"
        x.set(0)
        y.set(0)
    }

    return (
        <Link href={link} target="_blank"
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
        >
            <h2 className="capitalize text-xl font-semibold hover:underline dark:text-light">{title}</h2>
            <FramerImage
                style={{ x, y }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: {duration:  0.2 } }}
                ref={imgRef}
                src={img}
                alt={title}
                className="w-96 h-auto hidden absolute rounded-lg"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
        </Link>
    )
}

const Article = ({ img, title, date, link }) => {
    return(
        <motion.li
            initial={{ y: 200 }}
            whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut"} }}
            viewport={{ once: true }}
            className="w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light dark:bg-dark dark:border-light text-dark first:mt-0 border border-dark border-r-4 border-b-4">
            <MovingImage img={img} link={link} title={title}/>
            <span className="text-primary  dark:text-primaryDark font-semibold pl-4">{date}</span>
        </motion.li>
    )
}

const FeaturedArticle = ({ img, title, time, summary, link }) => {
    return (
        <li className="relative w-full p-4 bg-light dark:bg-dark border border-dark dark:border-light rounded-2xl">
            <div className="absolute w-full h-full bg-dark/75 top-2 left-2 -z-10 rounded-2xl"/>
            <Link href={link} target="_blank" className="w-full inline-block cursor-pointer overflow-hidden rounded-lg">
                <FramerImage
                    src={img}
                    alt={title}
                    className="w-full h-auto"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </Link>
            <Link href={link} target="_blank" className="dark:text-light">
                <h2 className="capitalize text-2xl font-bold my-2 hover:underline mt-4 dark:text-light">{title}</h2> 
            </Link>
            <p className="text-sm mb-2">{summary}</p>
            <span className="text-primary dark:text-primaryDark font-semibold">{time}</span>
        </li>
    )
}

const Articles = () => {
    return (
        <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
            <Layout className="pt-16">
                <AnimatedText text="Words Can Change The World!" className="mb-16" />
                <ul className="grid grid-cols-2 gap-16">
                    <FeaturedArticle
                        link={"/"}
                        title={"Crypto Screener Application"}
                        summary={`A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency.`}
                        time={"9 min read"}
                        img={article1}
                    />
                    <FeaturedArticle
                        link={"/"}
                        title={"Crypto Screener Application"}
                        summary={`A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency.`}
                        time={"9 min read"}
                        img={article2}
                    />
                </ul>
                <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">All Articles</h2>
                <ul>
                    <Article
                        title={"Form Validation In ReactJs"}
                        img={article1}
                        date={"March 22, 2023"}
                        link={"/"}
                    />
                    <Article
                        title={"Form Validation In ReactJs"}
                        img={article3}
                        date={"March 22, 2023"}
                        link={"/"}
                    />
                    <Article
                        title={"Form Validation In ReactJs"}
                        img={article4}
                        date={"March 22, 2023"}
                        link={"/"}
                    />
                    <Article
                        title={"Form Validation In ReactJs"}
                        img={article2}
                        date={"March 22, 2023"}
                        link={"/"}
                    />
                </ul>
            </Layout>
        </main>
    )
}

export default Articles;