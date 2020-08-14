import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { fetchUser, fetchRepos, fetchUserFollowers } from "../../actions";

const FollowerCard = ({ follower }) => {
  const dispatch = useDispatch();

  const searchUser = async (username) => {
    dispatch(fetchUser(username));
    dispatch(fetchRepos(username));
    dispatch(fetchUserFollowers(username));
  };

  return (
    <Card onClick={() => searchUser(follower.login)}>
      <Overlay>
        <Username>{follower.login}</Username>
      </Overlay>
      <Avatar src={follower.avatar_url}></Avatar>
    </Card>
  );
};

export default FollowerCard;

const Card = styled.div`
  position: relative;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  transition: 0.15s ease-out all;

  :hover img {
    transform: scale(1.1);
    filter: grayscale(0);
  }

  :hover div {
    max-height: 100%;
  }

  :hover {
    transform: translateY(-10px);
    cursor: pointer;
  }
`;

const Overlay = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  justify-content: center;
  height: 1000px;
  background-color: rgba(255, 255, 255, 0.5);
  max-height: 35px;
  transition: 0.2s ease-out all;
`;

const Username = styled.h4`
  font-size: 1rem;
  margin: 0;
`;

const Avatar = styled.img`
  width: 100%;
  border-radius: 3px;
  transition: 0.25s ease-out all;
  filter: grayscale(0.85);
  z-index: -100;
`;
