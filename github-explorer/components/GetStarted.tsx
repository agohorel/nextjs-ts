import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useRouter, NextRouter } from 'next/router';

import { fetchRandomUser } from '../actions';

import Search from './layout/Search';
import Button from './library/Button';

const GetStarted: React.FC = () => {
  const dispatch = useDispatch();
  const router: NextRouter = useRouter();

  return (
    <Container>
      <Banner>
        <CTA>git started by searching for a github user by name</CTA>
        <Search></Search>
        <SubHeader>or select a user at random:</SubHeader>
        <div onClick={() => dispatch(fetchRandomUser(router))}>
          <Button>search random user</Button>
        </div>
      </Banner>
    </Container>
  );
};

export default GetStarted;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20rem;
`;

const Banner = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme: { colors } }) => colors.scale_5};
  border-radius: ${({ theme: { measurements } }) => measurements.borderRadius};
  box-shadow: 0px 2px 4px ${({ theme: { colors } }) => colors.boxShadow};
  padding: 4rem;
`;

const CTA = styled.h1`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xl};
`;

const SubHeader = styled.h3`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.large};
  margin-bottom: 0;
`;
