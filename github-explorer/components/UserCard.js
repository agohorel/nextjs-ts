import React from "react";
import styled from "styled-components";

import {
  faUserFriends,
  faUsers,
  faCodeBranch,
  faWindowMaximize,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import ExtLink from "./library/ExtLink";
import Icon from "./library/Icon";

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
            {user.blog && (
              <ExtLink href={user.blog}>
                <Icon icon={faWindowMaximize} size={"1.4rem"} /> website
              </ExtLink>
            )}

            {user.twitter_username && (
              <ExtLink href={`https://twitter.com/${user.twitter_username}`}>
                <Icon icon={faTwitterSquare} size={"1.4rem"} />{" "}
                {`@${user.twitter_username}`}
              </ExtLink>
            )}
          </Block>
          <Block>
            <Text>
              {" "}
              <Icon icon={faUsers} size={"1.4rem"} />{" "}
              {`${user.followers} followers`}
            </Text>
            <Text>
              <Icon icon={faUserFriends} size={"1.4rem"} />{" "}
              {`${user.following} following`}
            </Text>
          </Block>
          <Block>
            <Text>
              <Icon icon={faCodeBranch} size={"1.4rem"} />{" "}
              {`${user.public_repos} public repos`}
            </Text>
          </Block>
        </Card>
      </CardContainer>
    );
  } else return null;
};

export default UserCard;

const CardContainer = styled.div`
  padding: ${({ theme: { measurements } }) => measurements.layoutPadding};
  padding-bottom: 0;
`;

const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: ${({ theme: { measurements } }) => measurements.gridGap};
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
