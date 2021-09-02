import gql from 'graphql-tag';
import Head from 'next/head';
import React from 'react';
import Layout from '~/components/Layout';
import Markdown from '~/components/text/Markdown';
import { fetchAPI } from '~/lib/graphql';

const ArticlePage = ({ article }) => {
  return (
    <Layout>
      <Head>
        <title>NucleOeiras</title>
        <meta name='description' content='NucleOeiras' />
      </Head>

      <Markdown>{article?.content || ''}</Markdown>
    </Layout>
  );
};

const ARTICLE_PAGE_QUERY = gql`
  query ARTICLE_PAGE_QUERY($id: ID!) {
    article(id: $id) {
      id
      title
      description
      created_at
      slug
      image {
        url
      }
      content
    }
  }
`;

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { slug } = context.params;

  const { article } = await fetchAPI(ARTICLE_PAGE_QUERY, {
    variables: {
      id: slug,
    },
  });

  return {
    revalidate: 30,
    props: {
      article,
    },
  };
};

export default ArticlePage;
