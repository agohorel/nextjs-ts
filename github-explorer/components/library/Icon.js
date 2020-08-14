import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ icon, size = "1 rem" }) => {
  return <StyledIcon icon={icon} size={size}></StyledIcon>;
};

export default Icon;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: ${(props) => props.size};
`;
