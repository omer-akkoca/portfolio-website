import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import { LiIcon } from "@/src/components";

const Details = ({ position, compnay, companyLink, time, adress, work }) => {

    const ref = useRef(null)

    return(
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
            <LiIcon reference={ref}/>
            <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: "spring" }}>
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{position}&nbsp;<a href={companyLink} target="_blank" className="text-primary dark:text-primaryDark capitalize">@{compnay}</a></h3>
                <span className="capitalize font-medium text-dark/70 xs:text-sm">{time} | {adress}</span>
                <p className="font-medium w-full md:text-sm">{work}</p>
            </motion.div>
        </li>
    )
}

const Experience = () => {

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center start"] })

    return(
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Experience</h2>
            <div ref={ref} className="w-[75%] mx-auto relative lg:-w[90%] md:w-full">
                <motion.div style={{ scaleY: scrollYProgress }} className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"/>
                <ul className="w-full flex flex-col items-start justify-between ml-4 xd:ml-2">
                    <Details
                        position={"Software Engineer"} compnay={"Google"}
                        time={"2022-Present"} adress={"Mountain View, CA"}
                        work={"Worked as a team responsible for developing new fatures for Google's search engine,, including the accuaryand releavnce of search results and developing new tools for data analysis and visialization."}
                    />
                    <Details
                        position={"Software Engineer"} compnay={"Google"}
                        time={"2022-Present"} adress={"Mountain View, CA"}
                        work={"Worked as a team responsible for developing new fatures for Google's search engine,, including the accuaryand releavnce of search results and developing new tools for data analysis and visialization."}
                    />
                    <Details
                        position={"Software Engineer"} compnay={"Google"}
                        time={"2022-Present"} adress={"Mountain View, CA"}
                        work={"Worked as a team responsible for developing new fatures for Google's search engine,, including the accuaryand releavnce of search results and developing new tools for data analysis and visialization."}
                    />
                </ul>
            </div>
        </div>
    )
}

export { Experience };