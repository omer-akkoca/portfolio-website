import { AnimatedText, Layout } from "@/src/components";
import Image from "next/image";
import profileImage from "../public/images/developer-pic-2.jpg"
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { Skills, Experience } from "@/src/layouts";

const AnimatedNumbers = ({ value }) => {
    
    const ref = useRef(null)
    
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])

    useEffect(()=>{
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [springValue, value])

    return(
        <span className="inline-block text-7xl font-bold" ref={ref}></span>
    )
}

const About = () => {
    return(
        <>
            <div className="flex w-full flex-col items-center justify-center">
                <Layout className="pt-16">
                    <AnimatedText text="Passion Fuels Purpose!" className="mb-16"/>
                    <div className="grid w-full grid-cols-8 gap-16">
                        <div className="col-span-3 flex flex-col items-start justify-start">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">Biography</h2>
                            <p className="font-medium ">
                                Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional,
                                and user-centered digital experiences. With 4 years of experience in the field. I am always looking for
                                new and innovative ways to bring my clients' visions to life.
                            </p>
                            <p className="my-4 font-medium">
                                I believe that design is about more than just making things look pretty – it's about solving problems and
                                creating intuitive, enjoyable experiences for users.
                            </p>
                            <p className="font-medium">
                                Whether I'm working on a website, mobile app, or
                                other digital product, I bring my commitment to design excellence and user-centered thinking to
                                every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                            </p>
                        </div>
                        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark p-8 bg-white">
                            <div className="absolute top-1 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark"/>
                            <Image
                                src={profileImage} alt="profile-image"
                                className="w-full h-auto rounded-2xl"
                            />
                        </div>
                        <div className="col-span-2 flex flex-col items-end justify-between">
                            <div className="flex flex-col items-end justify-center text-right">
                                <AnimatedNumbers value={50}/>
                                <h2 className="text-xl font-medium capitalize text-dark/75 text-right">satisfied clients</h2>
                            </div>
                            <div className="flex flex-col items-end justify-center">
                            <AnimatedNumbers value={40}/>
                                <h2 className="text-xl font-medium capitalize text-dark/75">project completed</h2>
                            </div>
                            <div className="flex flex-col items-end justify-center">
                                <AnimatedNumbers value={4}/>
                                <h2 className="text-xl font-medium capitalize text-dark/75">years of experience</h2>
                            </div>
                        </div>
                    </div>
                    <Skills/>
                    <Experience/>
                </Layout>
            </div>
        </>
    )
}

export default About;