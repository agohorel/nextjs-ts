import React from "react";
import styled from "styled-components";

const UserCard = ({ user }) => {
  return (
    <CardContainer>
      <Card>
        <Avatar src={user.avatar_url}></Avatar>
        <Name>{user.name}</Name>
      </Card>
    </CardContainer>
  );
};

export default UserCard;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
`;

const Card = styled.div``;

const Avatar = styled.img`
  border-radius: 50%;
`;

const Name = styled.h2``;
