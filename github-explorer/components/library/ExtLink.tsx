import React from "react";
import styled from "styled-components";

interface Props {
  href: string;
  children: JSX.Element;
}

const ExtLink: React.FC<Props> = ({ href, children }) => {
  return (
    <ExternalLink href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </ExternalLink>
  );
};

export default ExtLink;

const ExternalLink = styled.a`
  text-decoration: none;
  color: ${({ theme: { colors } }) => colors.scale_0};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};

  :visited {
    color: ${({ theme: { colors } }) => colors.scale_3};
  }

  :hover {
    color: ${({ theme: { colors } }) => colors.info};
  }
`;
