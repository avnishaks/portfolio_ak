import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref=useRef(null);

    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between'>
        <LiIcon reference={ref} />
        <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5,type:"spring"}}>
            <h3 className="capitalize font-bold text-2xl">{position}&nbsp;<a href={companyLink} target="_blank" className="capitalize text-primary dark:text-primaryDark">@{company}</a></h3>
            <span className="capitalize font-medium text-dark/75">{time} | {address}</span>
            <p className="font-medium w-full">{work}</p>
        </motion.div>
    </li>
}



export const Experience = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center'>
                Experience
            </h2>
            <div ref={ref} className='w-[75%] mx-auto relative'>
                <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-8 top-0 w-[4px] h-full bg-dark origin-top' />
                <ul className='w-full flex flex-col items-start justify-between ml-10'>
                    <Details
                        position={"Software Engineer"}
                        company={"ACKO"}
                        companyLink={"https://www.acko.com/"}
                        time={"June,2022 - Present"}
                        address={"Bangalore, Karnataka"}
                        work={`
                            At Acko, I spearheaded the development of a common Mobile App Framework for the Central App team,
                            which is used across all Lines of Business (LOB) to automate their use cases. This framework integrates 
                            both Flutter Driver and UiAutomator2 Driver to support native Android and Flutter components. In addition, 
                            I managed the automation of mobile, web, and backend APIs, incorporating over 800 test cases using Katalon 
                            Studio for dynamic UI components and UIAutomator2 for static pages, along with web UI and recurring payment 
                            backend API automation. I also created the QA-One Automation Dashboard, a user-friendly and maintainable central 
                            test hub that provides critical insights into the automation coverage's health and efficacy across various services. 
                            Furthermore, I established an in-house Mobile Device Lab as an alternative to BrowserStack. This lab supports remote 
                            automation suite execution, device sharing, and parallel test execution through a distributed Appium setup, allowing 
                            seamless script execution via Jenkins and providing complete control over the testing environment, with scalability to 
                            include new devices.
                        `}
                    />

                    <Details
                        position={"Mentor"}
                        company={"The 10x Academy"}
                        companyLink={"https://www.the10xacademy.com/"}
                        time={"Apr 2022 - May 2022 "}
                        address={"Remote"}
                        work={"Training coach for Web development and DSA."}
                    />

                    <Details
                        position={"Software Engineer Intern"}
                        company={"ACKO"}
                        companyLink={"www.acko.com"}
                        time={"Aug,2021 - May,2022"}
                        address={"Bangalore, Karnataka"}
                        work={`Automation of app test cases with 100% coverage has made the release cycle faster by two days and reduced manual effort to zero.`}
                    />

                    <Details
                        position={"Computer Programmer"}
                        company={"Chegg"}
                        companyLink={"https://www.chegg.com/"}
                        time={"Aug 2019 - Jun 2022"}
                        address={"Remote"}
                        work={"Doubts Related to Computer science"}
                    />

                    <Details
                        position={"Algorithm Engineer"}
                        company={"Newton School"}
                        companyLink={"https://www.newtonschool.co/"}
                        time={"Nov 2021 - Dec 2021"}
                        address={"Remote"}
                        work={"Articles Related to Data Structure and Algorithm"}
                    />

                    <Details
                        position={"Teaching Assistant"}
                        company={"Coding Ninjas"}
                        companyLink={"https://www.codingninjas.com/"}
                        time={"Mar 2021 - Jul 2021"}
                        address={"Remote"}
                        work={"Solve the Doubts of students releated to Data Structure and Algorithm"}
                    />

                </ul>
            </div>
        </div>
    )
}
