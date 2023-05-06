import React from 'react'
import { motion } from 'framer-motion';

const Skill = ({ name, x, y }) => {
    return (
        <motion.div
            className='
            absolute cursor-pointer flex items-center justify-center rounded-full font-semibold bg-dark
            dark:bg-light text-light dark:text-dark py-4 px-8 shadow-dark lg:py-2 lg:px-4 md:text-sm md:my-1.5 md:px-3
            xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold xs:text-xs
            '
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x, y, transition: { duration: 1.5 } }}
            viewport={{ once: true }}
        >
            {name}
        </motion.div>
    )
}

const Skills = () => {
    return (
        <>
            <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32 mb-16 lg:mb-5'>Skills</h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight lg:bg-circularLightLg lg:dark:bg-circularDarkLg dark:bg-circularDark xs:text-xs lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]'>
                <Skill name={"Css"} x={"-5vw"} y={"-18vw"}/>
                <Skill name={"Javascript"} x={"-18vw"} y={"15vw"}/>
                <Skill name={"TypeScript"} x={"25vw"} y={"15vw"}/>
                <Skill name={"React Js"} x={"19vw"} y={"2vw"}/>
                <Skill name={"React Native"} x={"-25vw"} y={"-17.5vw"}/>
                <Skill name={"Next Js"} x={"17.5vw"} y={"-17.5vw"}/>
                <Skill name={"Html"} x={"-30vw"} y={"0"}/>
                <Skill name={"Web"} x={"0"} y={"-4vw"}/>
                <Skill name={"Mobil"} x={"0"} y={"4vw"}/>
            </div>
        </>
    )
}

export { Skills };