/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import itemStyle from '../styles/Article.module.css';

function ArticleItem({ article }) {
  return (
    <Link href={`/article/${article.id}`}>
      <a className={itemStyle.card}>
        <h3>
          {article.title}
          &rarr;
        </h3>
        <p>{article.excerpt}</p>
      </a>
    </Link>
  );
}

export default ArticleItem;
