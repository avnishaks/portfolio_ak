import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ type, time, college, grade, board, place }) => {
    const ref = useRef(null);

    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between md:w-[80%]'>
        <LiIcon reference={ref} />
        <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: "spring" }}>
            <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
            {/* | {board} | {grade} | {college} | {place} */}
            <p className="capitalize font-medium text-dark dark:text-light"> {time}  </p>
            <p className="capitalize font-medium text-dark dark:text-light"> {grade}  </p>
            <p className="capitalize font-medium text-dark dark:text-light"> {board}  </p>
            <p className="capitalize font-medium text-dark dark:text-light"> {college}  </p>
            <p className="capitalize font-medium text-dark dark:text-light"> {place}  </p>


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
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:mb-16 md:text-6xl xs:text-4xl'>
                Educations
            </h2>
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-8 top-0 w-[4px] h-full bg-dark origin-top dark:bg-primaryDark
                    md:w-[2px] md:left-[30px] xs:left-[20px]' />
                <ul className='w-full flex flex-col items-start justify-between ml-10 xs:ml-2'>
                    <Details
                        type="Bachelor of Technology : Computer Science"
                        time="2018-2022"
                        place="Punjab, India"
                        grade="86%"
                        board="UNIVERSITY"
                        college="Lovely Professional University"
                    />

                    <Details
                        type="Higher Secondary Certificate : 10+2"
                        time="2015-2017"
                        place="Lalganj,Vaishali,Bihar,India"
                        grade="74.2%"
                        board="BSEB"
                        college="A.B.S College"
                    />


                    <Details
                        type="Secondary School Certificate"
                        time="2014-2015"
                        place="Lalganj,Vaishali,Bihar,India"
                        grade="95%"
                        board="CBSE"
                        college="St. Paul's High School"
                    />


                </ul>
            </div>
        </div>
    )
}
