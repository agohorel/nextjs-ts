import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchUser,
  fetchUserRepos,
  fetchUserFollowers,
  fetchUserCommits,
  fetchRandomUser,
} from "../actions";

import Search from "./layout/Search";
import Button from "./library/Button";

const GetStarted = () => {
  const dispatch = useDispatch();
  const random_user = useSelector((state) => state.github.random_user);

  const searchRandomUser = async () => {
    dispatch(fetchRandomUser());
  };

  useEffect(() => {
    async function searchUser() {
      dispatch(fetchUser(random_user.login));
      dispatch(fetchUserRepos(random_user.login));
      dispatch(fetchUserFollowers(random_user.login));
      dispatch(fetchUserCommits(random_user.login));
    }
    if (random_user.login) {
      searchUser();
    }
  }, [random_user]);

  return (
    <Container>
      <Banner>
        <CTA>Get started by searching for a GitHub user by name!</CTA>
        <Search></Search>
        <SubHeader>Or select a user at random:</SubHeader>
        <div onClick={searchRandomUser}>
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
  margin-top: 12rem;
`;

const Banner = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme: { colors } }) => colors.offwhite};
  border: 1px solid ${({ theme: { colors } }) => colors.blackish};
  border-radius: ${({ theme: { measurements } }) => measurements.borderRadius};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  padding: 3rem;
`;

const CTA = styled.h1`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xl};
`;

const SubHeader = styled.h3`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.large};
`;
