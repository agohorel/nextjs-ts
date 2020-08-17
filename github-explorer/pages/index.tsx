import React from 'react';
import Head from 'next/head';

import Layout from '../components/layout/Layout';
import GetStarted from '../components/GetStarted';

interface Props {
  toggleTheme: () => void;
}

const github: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <Layout toggleTheme={toggleTheme}>
      <Head>
        <title>git_explorer</title>
      </Head>
      <GetStarted></GetStarted>
    </Layout>
  );
};

export default github;
