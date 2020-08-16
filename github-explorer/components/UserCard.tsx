import React from "react";
import styled from "styled-components";

import {
  faUserFriends,
  faUsers,
  faCodeBranch,
  faWindowMaximize,
  faKeyboard,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitterSquare, faGitAlt } from "@fortawesome/free-brands-svg-icons";
import ExtLink from "./library/ExtLink";
import Icon from "./library/Icon";

interface Props {
  user: {
    avatar_url: string;
    blog: string;
    twitter_username: string;
    followers: number;
    login: string;
    public_repos: number;
    following: number;
  };
  commits: {
    repos: number;
    commits: number;
  };
}

const UserCard: React.FC<Props> = ({ user, commits }) => {
  const commit_count = commits.repos ? Object.keys(commits.repos).length : 0;

  if (user.avatar_url) {
    return (
      <CardContainer>
        <Card>
          <Avatar src={user.avatar_url}></Avatar>

          <Name>{user.login}</Name>

          {user.blog && (
            <ExtLink href={user.blog}>
              <Icon icon={faWindowMaximize} size={"1x"} /> website
            </ExtLink>
          )}

          {user.twitter_username && (
            <ExtLink href={`https://twitter.com/${user.twitter_username}`}>
              <Icon icon={faTwitterSquare} size={"1x"} />{" "}
              {`@${user.twitter_username}`}
            </ExtLink>
          )}

          <Text>
            {" "}
            <Icon icon={faUsers} size={"1x"} /> {`${user.followers} followers`}
          </Text>

          <Text>
            <Icon icon={faUserFriends} size={"1x"} />{" "}
            {`${user.following} following`}
          </Text>

          <Text>
            <Icon icon={faCodeBranch} size={"1x"} />{" "}
            {`${user.public_repos} public repos`}
          </Text>

          <Text>
            <Icon icon={faKeyboard} size={"1x"} />{" "}
            {`${commits.commits} recent commits`}
          </Text>

          <Text>
            <Icon icon={faGitAlt} size={"1x"} /> {`in ${commit_count} repos`}
          </Text>
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
  grid-template-columns: repeat(8, 1fr);
  grid-gap: ${({ theme: { measurements } }) => measurements.gridGap};
  align-items: baseline;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 200px;
  grid-column: span 8;
  box-shadow: 0px 2px 4px ${({ theme: { colors } }) => colors.boxShadow};
`;

const Name = styled.h2`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.large};
`;

const Text = styled.p`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};

  :not(:last-child) {
    margin-right: 1rem;
  }
`;
