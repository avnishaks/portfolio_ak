import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ type, time, address, grade,board }) => {
    const ref = useRef(null);

    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between'>
        <LiIcon reference={ref} />
        <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: "spring" }}>
            <h3 className="capitalize font-bold text-2xl">{type}</h3>
            <span className="capitalize font-medium text-dark/75">{time} | {board} | {grade} </span>
        </motion.div>
    </li>
}



export const Educations = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center'>
                Educations
            </h2>
            <div ref={ref} className='w-[75%] mx-auto relative'>
                <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-8 top-0 w-[4px] h-full bg-dark origin-top' />
                <ul className='w-full flex flex-col items-start justify-between ml-10'>
                    <Details
                        type="Bachelor of Technology : Computer Science"
                        time="2018-2022"
                        place="Punjab, India"
                        grade={"CGPA: 8.6"}
                        board="CBSE"
                    />

                    <Details
                        type="PCM : Pre University "
                        time="2015-2017"
                        place="Vaishali,Bihar, India"
                        grade={"74.2%"}
                        board="BSEB"
                    />


                    <Details
                        type="Matriculation"
                        time="2014-2015"
                        place="Vaishali,Bihar, India"
                        grade={"CGPA: 10"}
                        board="CBSE"
                    />


                </ul>
            </div>
        </div>
    )
}
