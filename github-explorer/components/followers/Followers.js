import React from "react";
import styled from "styled-components";

import FollowerCard from "./FollowerCard";

const Followers = ({ followers }) => {
  return (
    <FollowersContainer>
      {followers.map((follower) => (
        <FollowerCard follower={follower}></FollowerCard>
      ))}
    </FollowersContainer>
  );
};

export default Followers;

const FollowersContainer = styled.div`
  display: grid;
  max-width: 100vw;
  padding: ${({ theme: { measurements } }) => measurements.layoutPadding};
  grid-gap: ${({ theme: { measurements } }) => measurements.gridGap};
  grid-template-columns: repeat(8, 1fr);
`;
