import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import React from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';
import axios from 'axios';
import Image from 'next/image';
import { extractThumbnail, formatDate } from '@/components/Utils';


const FramerImage = motion(Image);

const FeaturedArticle = ({ img, title, time, link }) => {
  console.log('Image URL:', img); 

  return (
    <li className="col-span-1 w-full p-4 bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl overflow-hidden">
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          width={600} 
          height={400} 
          className="w-full h-48 object-cover" 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 hover:underline dark:text-light">
          {title}
        </h2>
      </Link>
      <span className=" text-primary dark:text-primaryDark font-bold">{time}</span>
    </li>
  );
};



export async function getServerSideProps() {
  try {
    const username = 'avnishaks';
    const rssUrl = `https://medium.com/feed/@${username}`;
    const response = await axios.get(
      `https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`
    );

    const articles = response.data.items.map((item) => ({
      title: item.title,
      summary: item.description,
      pubDate: formatDate(item.pubDate),
      link: item.link,
      thumbnail: extractThumbnail(item.description),
    }));

    return {
      props: {
        articles,
      },
    };
  } catch (error) {
    console.error('Error fetching Medium articles:', error);
    return {
      props: {
        articles: [],
      },
    };
  }
}

export default function Articles({ articles }) {
  return (
    <>
      <Head>
        <title>Avnish | Articles Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden pt-16 dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Speak Your Mind, Change the World"
            className="mb-16 lg:!text-7xl sm:!text-5xl xs:!text-3xl sm:mb-8"
          />
          <ul className="grid grid-cols-2 gap-16 md:grid-cols-1">
            {articles.map((article, index) => (
              <FeaturedArticle
                key={index}
                img={article.thumbnail}
                title={article.title}
                time={article.pubDate}
                link={article.link}
              />
            ))}
          </ul>
        </Layout>
      </main>
    </>
  );
}
