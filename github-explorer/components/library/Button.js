import React from "react";
import styled from "styled-components";

const FormButton = ({ children, theme }) => {
  return <Button>{children}</Button>;
};

export default FormButton;

const Button = styled.button`
  background-color: ${({ theme: { colors } }) => colors.blackish};
  color: ${({ theme: { colors } }) => colors.offwhite};
  border: none;
  padding: ${({ theme: { measurements } }) => measurements.buttonPadding};
  margin: 1rem;
  border-radius: 3px;
  };
`;
