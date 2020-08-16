import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";

interface Props {
  icon: IconProp;
  size: SizeProp;
}

const Icon: React.FC<Props> = ({ icon, size }) => {
  return <StyledIcon icon={icon} size={size}></StyledIcon>;
};

export default Icon;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: ${(props) => props.size};
`;
