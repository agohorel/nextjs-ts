import React from "react";
import styled from "styled-components";
import { faGitAlt } from "@fortawesome/free-brands-svg-icons";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

import { clearCurrentUser } from "../../actions";

import Search from "./Search";
import ThemeToggle from "./ThemeToggle";
import Icon from "../library/Icon";

interface Props {
  toggleTheme: () => void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const path = router.query;

  const goHome = () => {
    dispatch(clearCurrentUser());
    router.push("/");
  };

  return (
    <Container>
      <Title onClick={goHome}>
        <Icon icon={faGitAlt} size={"8x"}></Icon>
        <h1>git_explorer</h1>
      </Title>
      <RightPanel>
        {path.username && <Search></Search>}
        <ThemeToggle toggleTheme={toggleTheme}></ThemeToggle>
      </RightPanel>
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
    transition: 0.1s ease-out;
  }

  svg {
    transition: 0.2s ease-out;
  }

  :hover {
    cursor: pointer;

    h1 {
      letter-spacing: 0.25px;
      color: ${({ theme: { colors } }) => colors.info};
    }

    svg {
      transform: scale(1.1);
    }
  }
`;

const RightPanel = styled.div`
  display: flex;
  align-items: center;
`;
