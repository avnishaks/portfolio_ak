import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import profilePics from '../../public/images/profile/profile.png'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import {Skills}  from '@/components/Skills'
import { Experience}  from '@/components/Experience'
import  {Educations}  from '@/components/Educations'
import HireMe from '@/components/HireMe'

const AnimateNumber = ({value}) =>{
    const ref= useRef(null);
    const motionValue = useMotionValue(0);
    const springValue= useSpring(motionValue,{duration:3000});
    const isInView = useInView(ref);

    useEffect(()=>{
        if(isInView){
            motionValue.set(value)
        }
    },[isInView,value,motionValue])

    useEffect(()=>{
        springValue.on("change",(latest)=>{
            if(ref.current && latest.toFixed(0)<=value){
                ref.current.textContent= latest.toFixed(0)
            }
        })
    },[springValue,value])

    return <span ref={ref}></span>

}




export default function About(){

    const [years, setYears] = useState(0);

    useEffect(() => {
      const currentDate = new Date();
      const startDate = new Date('2022-06-01'); 
      const timeDifference = currentDate - startDate;
      const yearsDifference = timeDifference / (1000 * 60 * 60 * 24 * 365);
      setYears(Math.ceil(yearsDifference));
    }, []);

    
    return (
        <>
            <Head>
                <title>Avnish Kumar | About </title>
                <meta name="description" content="any description" />
            </Head>
            <main className="flex flex-col items-center justify-center pt-16 dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText text="Passion Fuels Purpose!" className="mb-16 lg:!text-7xl sm:!text-5xl xs:!text-3xl sm:mb-8" />
                    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                        <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">Biography</h2>
                            <p className="font-medium">
                                Hi, I&apos;m Avnish, an adventurous soul exploring the world on my trusty bike,
                                always in search of the unexplored. From remote mountain trails to bustling city
                                streets&sbquo; I thrive on the excitement of discovery and the opportunity to connect
                                with people from diverse cultures.
                            </p>
                            <p className="my-4 font-medium">
                                With a passion for gaming&sbquo; coding&sbquo; and software engineering, I&apos;m constantly seeking
                                new challenges in both virtual and real	&ndash;life environments. Whether it&apos;s developing
                                a website&sbquo; crafting a mobile app&sbquo; or tackling complex Backend system design&sbquo; I bring a
                                dedication to design excellence and user&ndash;centered thinking to every endeavor.
                            </p>
                            <p className="font-medium">
                                When I&apos;m not immersed in coding or exploring new horizons, you&apos;ll often find me on the
                                sports field. Football&sbquo; badminton&sbquo; cricket these outdoor activities not only keep me
                                physically active but also foster camaraderie and friendly competition with fellow
                                enthusiasts. I believe in the balance between mind and body&sbquo; finding inspiration and
                                rejuvenation through both intellectual and physical pursuits.
                            </p>
                        </div>




                        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:bg-dark  dark:border-light 
                        p-8 xl:col-span-4 md:order-1 md:col-span-8">
                        <div className="absolute top-0 -right-4 -z-10 w-[102%] h-[103%] rounded-[3rem] bg-dark dark:bg-light"/>
                            <Image src={profilePics} alt="Avnish" className="w-full h-auto rounded-2xl" 
                                 priority sizes='(max-width:768px) 100vw, (max-height:1200px) 50vw 33vw'
                            />
                        </div>
                        <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl"><AnimateNumber value={4}/>*</span>
                                <h2 className="text-xl font-medium capitalize text-dark dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">CodeChef</h2>
                            </div>
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl"><AnimateNumber value={600}/>+</span>
                                <h2 className="text-xl font-medium capitalize text-dark dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">LeetCode</h2>
                            </div>
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimateNumber value={years}/>+</span>
                                <h2 className="text-xl font-medium capitalize text-dark dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">Y.O.E</h2>
                            </div>
                        </div>
                    </div>
                    <Skills/>
                    <Experience/>
                    <Educations/>
                </Layout>
            </main>

        </>
    )
}
