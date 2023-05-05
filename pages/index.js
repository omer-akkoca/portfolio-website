import { AnimatedText, Footer, HireMe, Layout, LinkArrow } from "@/src/components";
import Image from "next/image";
import profilePic from "../public/images/developer-pic-1.png"
import Link from "next/link";

const cv = "https://firebasestorage.googleapis.com/v0/b/omer-akkoca.appspot.com/o/omer_akkoca-cv-en.pdf?alt=media"

const Home = () => {
    return (
        <main className="w-full min-h-screen">
            <div className="flex items-center text-dark w-full min-h-screen">
                <Layout className="pt-0">
                    <div className="flex items-center justify-between w-full">
                        <div className="w-1/2">
                            <Image
                                src={profilePic} alt="profile-photo"
                                className="w-full h-auto"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                            />
                        </div>
                        <div className="w-1/2 flex flex-col items-center self-center">
                            <AnimatedText
                                text={"Turning Vision Into Reality With Code And Design"}
                                className="!text-6xl !text-left"
                            />
                            <p className="my-4 text-base font-medium dark:text-light">
                                As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
                                Explore my latest projects and articles, showcasing my expertise in React.js and web development.
                            </p>
                            <div className="flex items-center self-start mt-2">
                                <Link
                                    href={cv} target="_blank"
                                    className="
                                    flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                                    border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                                    hover:dark:border-light
                                    "
                                    download={true}
                                >
                                    Resume
                                    <LinkArrow className={"w-6 ml-1"}/>
                                </Link>
                                <Link
                                    href={"mailto:omerakkoca11042@gmail.com"} target="_blank"
                                    className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light"
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </Layout>
            </div>
            <HireMe/>
        </main>
    )
}

export default Home;