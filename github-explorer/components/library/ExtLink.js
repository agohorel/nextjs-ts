import React from "react";
import styled from "styled-components";

const ExtLink = ({ href, children }) => {
  return (
    <ExternalLink href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </ExternalLink>
  );
};

export default ExtLink;

const ExternalLink = styled.a`
  text-decoration: none;
  color: ${({ theme: { colors } }) => colors.blackish};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.medium};

  :visited {
    color: ${({ theme: { colors } }) => colors.midgrey};
  }

  :hover {
    color: ${({ theme: { colors } }) => colors.info};
  }
`;
