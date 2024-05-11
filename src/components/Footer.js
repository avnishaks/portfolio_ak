import Link from 'next/link'
import React from 'react'
import Layout from './Layout'

export const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base'>
            <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
                    <span>&copy; {new Date().getFullYear()} All Rights Reserved.</span>
                    <div className="flex items-center">
                        <span className="text-primary text-2xl px-1"></span>
                        Build With <span className="text-primary dark:text-primaryDark text-2xl px-1">&#9825;</span>
                        by&nbsp;<Link href="https://www.linkedin.com/in/avnishaks/" className="underline underline-offset-2" target="_blank">AKS</Link>
                    </div>
                    {/* <Link href="https://www.linkedin.com/in/avnishaks/" target="_blank" className="underline">Say hello</Link> */}
            </Layout>
        </footer>

    )
}
