import { Container, Typography } from '@material-ui/core';
import gql from 'graphql-tag';
import Head from 'next/head';
import React from 'react';
import Layout from '~/components/Layout';
import { fetchAPI } from '~/lib/graphql';

const AthletePage = ({ athlete }) => {
  return (
    <Layout backUrl='/athletes'>
      <Head>
        <title>NucleOeiras</title>
        <meta name='description' content='NucleOeiras' />
      </Head>

      <Container sx={{ textAlign: 'justify' }}>
        <Typography variant='h3' component='h1'>
          {athlete?.slug || 'confused'}
        </Typography>
        <Typography variant='h5' component='h2' color='text.secondary' gutterBottom>
          {athlete?.name || 'Sem nome'}
        </Typography>
      </Container>
    </Layout>
  );
};

const ATHLETE_PAGE_QUERY = gql`
  query ATHLETE_PAGE_QUERY($id: ID!) {
    athlete(id: $id) {
      name
      slug
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

  const { athlete } = await fetchAPI(ATHLETE_PAGE_QUERY, {
    variables: {
      id: slug,
    },
  });

  console.log(athlete);

  return {
    revalidate: 30,
    props: {
      athlete,
    },
  };
};

export default AthletePage;
