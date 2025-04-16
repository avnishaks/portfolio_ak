import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg dark:text-light">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="capitalize text-primary dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 xs:text-sm dark:text-light">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

export const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:mb-16 md:text-6xl xs:text-4xl">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-8 top-0 w-[4px] h-full bg-dark origin-top dark:bg-primaryDark
                    md:w-[2px] md:left-[30px] xs:left-[20px]
                "
        />
        <ul className="w-full flex flex-col items-start justify-between ml-10 xs:ml-2">
          <Details
            position={"Software Engineer"}
            company={"Zepto"}
            companyLink={"https://www.zeptonow.com/"}
            time={"Oct,2024 - Present"}
            address={"Bangalore, Karnataka"}
            work={
              <>
                <p className="capitalize font-medium text-dark/75 dark:text-light">
                  <span className="text-black font-medium dark:text-white">
                    {" "}
                    1. Involve in development of inhouse internal tools Sherpa Frontend [React Js] and Backend [Go-Land]
                    both.
                    {" "}
                  </span>
                </p>
                <p className="capitalize font-medium text-dark/75 dark:text-light">
                  <span className=" text-black  font-medium dark:text-white">
                    {" "}
                    2. Optimised Daily Automation Run for ShopX from 4 hr to 15 minutes  {" "}
                  </span>
                </p>
                <p className="capitalize font-medium text-dark/75 dark:text-light">
                  <span className="text-black  font-medium dark:text-white">
                    {" "}
                    3. Pentesting for Zepto App to find Security Flaws
                  </span>
                </p>
                <p className="capitalize font-medium text-dark/75 dark:text-light">
                  <span className="text-black  font-medium dark:text-white">
                    {" "}
                    4. Created Github Actions workflow for Running the Automation Suites{" "}
                  </span>
                </p>
                <p className="capitalize font-medium text-dark/75 dark:text-light">
                  <span className="text-black  font-medium dark:text-white">
                    {" "}
                    5. POC for proxymock and wiremock{" "}
                  </span>
                </p>
              </>
            }
          />
          <Details
            position={"Software Engineer"}
            company={"ACKO"}
            companyLink={"https://www.acko.com/"}
            time={"June,2022 - Oct,2024"}
            address={"Bangalore, Karnataka"}
            work={
              <>
                <p className="capitalize font-medium text-dark/75 dark:text-light">
                  <span className="text-black font-medium dark:text-white">
                    {" "}
                    1. Mobile App Automation Framework Development{" "}
                  </span>
                </p>
                <p className="capitalize font-medium text-dark/75 dark:text-light">
                  <span className=" text-black  font-medium dark:text-white">
                    {" "}
                    2. Automation of Mobile , Web and Backend API{" "}
                  </span>
                </p>
                <p className="capitalize font-medium text-dark/75 dark:text-light">
                  <span className="text-black  font-medium dark:text-white">
                    {" "}
                    3. Automation Dashboard ( Design : Frontend & Backend )
                  </span>
                </p>
                <p className="capitalize font-medium text-dark/75 dark:text-light">
                  <span className="text-black  font-medium dark:text-white">
                    {" "}
                    4. In House Mobile Device Lab{" "}
                  </span>
                </p>
                <p className="capitalize font-medium text-dark/75 dark:text-light">
                  <span className="text-black  font-medium dark:text-white">
                    {" "}
                    5. Mocking of External Third Party Services{" "}
                  </span>
                </p>
                <p className="capitalize font-medium text-dark/75 dark:text-light">
                  <span className="text-black  font-medium dark:text-white">
                    {" "}
                    6. Building In-House GPT (GenAI model) of Acko - Jankari Hub{" "}
                  </span>
                </p>
              </>
            }
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
            companyLink={"https://www.acko.com/"}
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
            work={
              "Solve the Doubts of students releated to Data Structure and Algorithm"
            }
          />
        </ul>
      </div>
    </div>
  );
};
