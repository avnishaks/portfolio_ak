import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import profilePics from '../../public/images/profile/bike.png'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';

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
                <title>Avnish Kumar | About us</title>
                <meta name="description" content="any description" />
            </Head>
            <main className="flex flex-col items-center justify-center pt-16">
                <Layout className="pt-16">
                    <AnimatedText text="Passion Fuels Purpose!" className="mb-16" />
                    <div className="grid w-full grid-cols-8 gap-16">
                        <div className="col-span-3 flex flex-col items-start justify-start">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">Biography</h2>
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




                        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
                        <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[-2rem] bg-dark"/>
                            <Image src={profilePics} alt="Avnish" className="w-full h-auto rounded-2xl" />
                        </div>
                        <div className="col-span-2 flex flex-col items-end justify-between">
                            <div className="flex flex-col items-end justify-center">
                                <span className="inline-block text-7xl font-bold">4*</span>
                                <h2 className="text-xl font-medium capitalize text-dark">CodeChef</h2>
                            </div>
                            <div className="flex flex-col items-end justify-center">
                                <span className="inline-block text-7xl font-bold">650+</span>
                                <h2 className="text-xl font-medium capitalize text-dark">LeetCode Problem Solved</h2>
                            </div>
                            <div className="flex flex-col items-end justify-center">
                                <span className="inline-block text-7xl font-bold">{years > 0 ? `${years}+` : '0+'}</span>
                                <h2 className="text-xl font-medium capitalize text-dark">years of experience</h2>
                            </div>
                        </div>
                    </div>
                </Layout>
            </main>

        </>
    )
}
