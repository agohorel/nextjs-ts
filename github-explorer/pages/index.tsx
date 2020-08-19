import React, { useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';

import Layout from '../components/layout/Layout';
import GetStarted from '../components/GetStarted';

interface Props {
  toggleTheme: () => void;
}

const github: React.FC<Props> = ({ toggleTheme }) => {
  useEffect(() => {
    async function getToken() {
      if (!sessionStorage.getItem('github')) {
        const response = await axios.get('/api/githubAuth');
        sessionStorage.setItem('github', response.data.github_token);
      }
    }

    getToken();
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
