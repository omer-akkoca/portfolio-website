import Link from "next/link";
import { Logo } from "../../components/Logo";
import { useRouter } from "next/router";
import { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon } from "../../components/Icons";
import { motion } from "framer-motion";
import useTheme from "@/src/hooks/useTheme";

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

const Navbar = () => {

    const [mode,setMode] = useTheme()

    return (
        <header className="relative w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light">
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

            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    )
}

export { Navbar };