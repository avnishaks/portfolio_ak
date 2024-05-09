import React from 'react'
import { motion } from 'framer-motion'


const Skill = ({ name, x, y }) => {
    return (
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-white py-3 px-6
        shadow-dark cursor-pointer absolute'
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y }}
            transition={{ duration: 1.5 }}
        >
            {name}
        </motion.div>
    )
}

export const Skills = () => {
    return (
        <>
            <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
                <motion.div className='flex items-center justify-center rounded-full font-semibold  bg-red-600 text-white p-8
                 shadow-dark cursor-pointer' whileHover={{ scale: 1.05 }} >
                    Tech-Stack
                </motion.div>
               
                <Skill name="HTML" x="-20vw" y="2vw" />
                <Skill name="Git" x="-10vw" y="2vw" />
                <Skill name="Express" x="-10vw" y="8vw" />
                <Skill name="CSS" x="-1vw" y="-12vw" />
                <Skill name="Javascript" x="22vw" y="6vw" />
                <Skill name="TypeScript" x="14vw" y="-1vw" />
                <Skill name="Node JS" x="14vw" y="-8vw" />
                <Skill name="ReactJS" x="0vw" y="12vw" />
                <Skill name="NextJS" x="-24vw" y="-10vw" />
                <Skill name="JWT" x="-14vw" y="-8vw" />
                <Skill name="Appium" x="-12vw" y="-20vw" />
                <Skill name="Selenium" x="-34vw" y="-14vw" />
                <Skill name="Rest-Assured" x="-36vw" y="0vw" />
                <Skill name="Generative AI" x="30vw" y="-5vw" />
                <Skill name="Java-Spring" x="24vw" y="-15vw" />
                <Skill name="Hibernate" x="34vw" y="-12vw" />
                <Skill name="Postgres-SQL" x="10vw" y="-23vw" />
                <Skill name="MongoDB" x="12vw" y="-16vw" />
                <Skill name="Firebase" x="-25vw" y="18vw" />
                <Skill name="Tailwind CSS" x="18vw" y="18vw" />
                <Skill name="Framer Motion" x="-12vw" y="16vw" />
                <Skill name="Prisma" x="28vw" y="12vw" />


                

            </div>
        </>
    )
}
