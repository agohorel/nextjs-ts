import React from "react";
import styled from "styled-components";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

interface Props {
  icon: any;
  size: string;
}

const Icon: React.FC<any> = ({ icon, size }) => {
  return <StyledIcon icon={icon} size={size}></StyledIcon>;
};

export default Icon;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: ${(props) => props.size};
`;
