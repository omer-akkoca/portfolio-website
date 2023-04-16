import Link from "next/link";
import { Logo } from "../Logo";
import { useRouter } from "next/router";
import { DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon } from "../Icons";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {

    const router = useRouter()

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`
                absolute left-0 -bottom-1 h-[2px] bg-dark group-hover:w-full transition-[width] ease-linear duration-200
                ${router.asPath === href ? "w-full" : "w-0"}
            `}>&nbsp;</span>
        </Link>
    )
}

const Navbar = () => {
    return (
        <header className="relative w-full px-32 py-8 font-medium flex items-center justify-between">
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
                    className="w-6"
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
            </nav>
            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    )
}

export { Navbar };