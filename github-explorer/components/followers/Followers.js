import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import FollowerCard from "./FollowerCard";
import { oscillate } from "../../styles/animations";

const Followers = ({ followers }) => {
  const github_data = useSelector((state) => state.github);

  if (github_data.loading) {
    return (
      <FollowersContainer>
        {Array(16)
          .fill(0)
          .map((card, idx) => {
            return <TempCard key={idx} />;
          })}
      </FollowersContainer>
    );
  } else {
    return (
      <FollowersContainer>
        {followers.map((follower) => (
          <FollowerCard key={follower.id} follower={follower}></FollowerCard>
        ))}
      </FollowersContainer>
    );
  }
};

export default Followers;

const FollowersContainer = styled.div`
  display: grid;
  max-width: 100vw;
  padding: ${({ theme: { measurements } }) => measurements.layoutPadding};
  grid-gap: ${({ theme: { measurements } }) => measurements.gridGap};
  grid-template-columns: repeat(8, 1fr);
`;

const TempCard = styled.div`
  display: inline-block;
  width: 100%;
  height: calc(100vw / 10);
  background: #333;
  animation: ${oscillate} 0.3s ease-in-out infinite alternate;
`;
