import React, { useEffect } from 'react';
import Head from 'next/head';

import Layout from '../components/layout/Layout';
import GetStarted from '../components/GetStarted';
import { fetchToken } from '../utils/fetchToken';

interface Props {
  toggleTheme: () => void;
}

const github: React.FC<Props> = ({ toggleTheme }) => {
  useEffect(() => {
    fetchToken();
  }, []);

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
