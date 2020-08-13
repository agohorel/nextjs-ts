import React from "react";
import styled from "styled-components";

import ExtLink from "./library/ExtLink";

const UserCard = ({ user }) => {
  return (
    <CardContainer>
      <Card>
        <Avatar src={user.avatar_url}></Avatar>
        <Nametag>
          <Name>{user.name}</Name>
          <Username>{`(${user.login})`}</Username>
        </Nametag>
        <Block>
          <ExtLink href={user.blog}>website</ExtLink>
          <ExtLink href={`https://twitter.com/${user.twitter_username}`}>
            {`@${user.twitter_username}`}
          </ExtLink>
        </Block>
        <Block>
          <Text>{`${user.followers} followers`}</Text>
          <Text>{`${user.following} following`}</Text>
        </Block>
        <Block>
          <Text>{`${user.public_repos} public repos`}</Text>
        </Block>
      </Card>
    </CardContainer>
  );
};

export default UserCard;

const CardContainer = styled.div`
  padding: 3rem;
`;

const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  align-items: baseline;
`;

const Avatar = styled.img`
  border-radius: 50%;
  grid-column: span 4;
`;

const Nametag = styled.div`
  display: flex;
  align-items: baseline;
`;

const Name = styled.h2``;

const Username = styled.h4`
  margin-left: 0.5rem;
  color: #777;
`;

const Block = styled.div`
  display: flex;

  a:not(:last-of-type) {
    margin-right: 1rem;
  }
`;

const Text = styled.p`
  :not(:last-child) {
    margin-right: 1rem;
  }
`;
