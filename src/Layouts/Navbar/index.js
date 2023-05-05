import Link from "next/link";
import { Logo } from "../../components/Logo";
import { useRouter } from "next/router";
import { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon } from "../../components/Icons";
import { motion } from "framer-motion";
import useTheme from "@/src/hooks/useTheme";
import { useState } from "react";

const CustomLink = ({ href, title, className = "" }) => {

    const router = useRouter()

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`
                absolute left-0 -bottom-1 h-[2px] bg-dark group-hover:w-full transition-[width] ease-linear duration-200
                ${router.asPath === href ? "w-full" : "w-0"} dark:bg-light
            `}>&nbsp;</span>
        </Link>
    )
}

const CustomMobileLink = ({ href, title, className = "", toggle }) => {

    const router = useRouter()

    const handleClick = () => {
        toggle()
        router.push(href)
    }

    return (
        <button onClick={handleClick} className={`${className} relative group text-light dark:text-dark my-2`}>
            {title}
            <span className={`
                absolute left-0 -bottom-1 h-[2px] bg-light group-hover:w-full transition-[width] ease-linear duration-200
                ${router.asPath === href ? "w-full" : "w-0"} dark:bg-dark
            `}>&nbsp;</span>
        </button>
    )
}

const Navbar = () => {

    const [mode,setMode] = useTheme()
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(curr => !curr)
    }

    return (
        <header className="relative w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light z-10 lg:px-16 md:px12 sm:px-8">
            <button onClick={handleClick} className="flex-col items-center justify-center hidden lg:flex">
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-1"}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"}`}></span>
            </button>
            
            <div className="w-full flex justify-between items-center lg:hidden">
                <nav className="space-x-5">
                    <CustomLink href={"/"} title={"Home"} />
                    <CustomLink href={"/about"} title={"About"} />
                    <CustomLink href={"/projects"} title={"Projects"} />
                    <CustomLink href={"/articles"} title={"Articles"} />
                </nav>
                <nav className="flex items-center justify-center space-x-5 flex-wrap">
                    <motion.a
                        href={"https://twitter.com"} target="_blank"
                        whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}
                        className="w-6"
                    >
                        <TwitterIcon />
                    </motion.a>
                    <motion.a
                        href={"https://github.com"} target="_blank"
                        whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}
                        className="w-6"
                    >
                        <GithubIcon />
                    </motion.a>
                    <motion.a
                        href={"https://linkedin.com"} target="_blank"
                        whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}
                        className="w-6"
                    >
                        <LinkedInIcon />
                    </motion.a>
                    <motion.a
                        href={"https://pinterest.com"} target="_blank"
                        whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}
                        className="w-6 bg-light rounded-full"
                    >
                        <PinterestIcon />
                    </motion.a>
                    <motion.a
                        href={"https://dribbble.com"} target="_blank"
                        whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}
                        className="w-6"
                    >
                        <DribbbleIcon />
                    </motion.a>
                    <button
                        className={`
                            ml-3 flex items-center justify-center rounded-full p-1
                            ${mode === "light" ? "bg-dark text-light": "bg-light text-dark"}
                        `}
                        onClick={() => setMode(mode === "light" ? "dark" : "light")}
                    >
                        {
                            mode === "dark"
                            ?   <SunIcon className="fill-dark"/>
                            :   <MoonIcon className="fill-dark"/>
                        }
                </button>
                </nav>
            </div>

            {
                isOpen
                    ? (
                        <motion.div initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }} animate={{ scale: 1, opacity: 1 }} className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32">
                            <nav className="flex flex-col items-center justify-center">
                                <CustomMobileLink href={"/"} title={"Home"} toggle={handleClick} />
                                <CustomMobileLink href={"/about"} title={"About"} toggle={handleClick} />
                                <CustomMobileLink href={"/projects"} title={"Projects"} toggle={handleClick} />
                                <CustomMobileLink href={"/articles"} title={"Articles"} toggle={handleClick} />
                            </nav>
                            <nav className="flex items-center justify-center space-x-5 sm:space-x-2 flex-wrap mt-2">
                                <motion.a
                                    href={"https://twitter.com"} target="_blank"
                                    whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}
                                    className="w-6"
                                >
                                    <TwitterIcon />
                                </motion.a>
                                <motion.a
                                    href={"https://github.com"} target="_blank"
                                    whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}
                                    className="w-6 bg-light dark:bg-dark rounded-full"
                                >
                                    <GithubIcon />
                                </motion.a>
                                <motion.a
                                    href={"https://linkedin.com"} target="_blank"
                                    whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}
                                    className="w-6"
                                >
                                    <LinkedInIcon />
                                </motion.a>
                                <motion.a
                                    href={"https://pinterest.com"} target="_blank"
                                    whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}
                                    className="w-6 bg-light rounded-full"
                                >
                                    <PinterestIcon />
                                </motion.a>
                                <motion.a
                                    href={"https://dribbble.com"} target="_blank"
                                    whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}
                                    className="w-6"
                                >
                                    <DribbbleIcon />
                                </motion.a>
                                <button
                                    className={`
                            ml-3 flex items-center justify-center rounded-full p-1
                            ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
                        `}
                                    onClick={() => setMode(mode === "light" ? "dark" : "light")}
                                >
                                    {
                                        mode === "dark"
                                            ? <SunIcon className="fill-dark" />
                                            : <MoonIcon className="fill-dark" />
                                    }
                                </button>
                            </nav>
                        </motion.div>
                    )
                    : null
            }

            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    )
}

export { Navbar };