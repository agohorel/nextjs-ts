import React from "react";
import styled from "styled-components";
import { faGitAlt } from "@fortawesome/free-brands-svg-icons";

import Search from "./Search";
import Icon from "../library/Icon";

const Header = () => {
  return (
    <Container>
      <Title>
        <Icon icon={faGitAlt} size={"4rem"}></Icon>
        <h1>git_explorer</h1>
      </Title>
      <Search></Search>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme: { measurements } }) => measurements.layoutPadding};
  padding-bottom: 0;
`;

const Title = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-size: 3rem;
    margin: 0 0 0 1rem;
  }
`;
