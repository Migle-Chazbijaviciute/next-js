/* eslint-disable no-shadow */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable arrow-body-style */
import React from 'react';
import Link from 'next/dist/client/link';
import { server } from '../../../config';
import Meta from '../../../components/Meta';
// import { useRouter } from 'next/router';

const article = ({ article }) => {
  // const router = useRouter();
  // const { id } = router.query;

  return (
    <>
      <Meta title={article.title} description={article.excerpt} />
      <h1>
        {article.title}
      </h1>
      <p>
        {article.body}
      </p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);

  const articles = await res.json();

  const ids = articles.map((art) => art.id);

  const paths = ids.map((x) => ({ params: { id: x.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

// export const getStaticProps = async (context) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);

//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');

//   const articles = await res.json();

//   const ids = articles.map((art) => art.id);

//   const paths = ids.map((x) => ({ params: { id: x.toString() } }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

export default article;
