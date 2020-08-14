import React from "react";
import styled from "styled-components";

import ExtLink from "./library/ExtLink";

const UserCard = ({ user }) => {
  if (user.avatar_url) {
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
  } else return null;
};

export default UserCard;

const CardContainer = styled.div`
  padding: ${({ theme: { measurements } }) => measurements.layoutPadding};
`;

const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  align-items: baseline;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 200px;
  grid-column: span 4;
`;

const Nametag = styled.div`
  display: flex;
  align-items: baseline;
`;

const Name = styled.h2`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.large};
`;

const Username = styled.h4`
  margin-left: 0.5rem;
  color: #777;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};
`;

const Block = styled.div`
  display: flex;

  a:not(:last-of-type) {
    margin-right: 1rem;
  }
`;

const Text = styled.p`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};

  :not(:last-child) {
    margin-right: 1rem;
  }
`;
