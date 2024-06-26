import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../../public/images/profile/avnish.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe  from '@/components/HireMe'


export default function Home() {
  return (
    <>
      <Head>
        <title>Avnish | Portfolio</title>
        <meta name="description" content="Made by Avnish Kumar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center justify-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 -ml-5 md:w-full">
              <Image src={profilePic} alt="Avnish" className="w-full h-auto rounded-full lg:hidden md:inline-block md:w-full" 
                priority sizes='(max-width:768px) 100vw, (max-height:1200px) 50vw 33vw'
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center mt-4">
              <AnimatedText text="Blending Code and Design to Build the Future." className="!text-6xl !text-left
                xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl
              " />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                  As a skilled problem-solving software engineer, I am dedicated to transforming ideas into innovative web applications. With expertise in React.js and extensive experience in backend development, I craft robust solutions that power seamless user experiences. My portfolio highlights my capabilities in automation and generative AI, showcasing cutting-edge projects that leverage advanced technologies. Explore my latest work and articles to see how I blend technical proficiency with creative innovation to deliver exceptional digital products.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link href="Avnish_Resume.pdf" target="_blank" className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                 dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base 
                " download={true}>
                  Resume <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link href="mailto:cse.avnish@gmail.com" target="_blank" className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base">
                  Contact
                </Link>
              </div>

            </div>
          </div>
        </Layout>
        <HireMe/>
      </main>

    </>
  )
}
