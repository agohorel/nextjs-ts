import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import FollowerCard from "./FollowerCard";
import { oscillate } from "../../styles/animations";

interface Follower {
  id: number;
  login: string;
  avatar_url: string;
}

interface Props {
  followers: Array<Follower>;
}

const Followers: React.FC<Props> = ({ followers }) => {
  const github_data = useSelector((state) => state.github);

  if (github_data.loading) {
    return (
      <FollowersContainer>
        {Array(16)
          .fill(0)
          .map((card, idx) => {
            return <TempCard src={"/temp_grid_item.png"} key={idx} />;
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
  grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));
`;

const TempCard = styled.img`
  width: 100%;
  border-radius: 3px;
  animation: ${oscillate} 0.3s ease-in-out infinite alternate;
`;
