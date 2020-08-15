import React from "react";
import styled from "styled-components";

const FormButton = ({ children }) => {
  return <Button>{children}</Button>;
};

export default FormButton;

const Button = styled.button`
  background-color: ${({ theme: { colors } }) => colors.scale_0};
  color: ${({ theme: { colors } }) => colors.scale_5};
  border: none;
  padding: ${({ theme: { measurements } }) => measurements.buttonPadding};
  margin: 1rem;
  border-radius: 3px;
  transition: 0.2s ease-out all;
  font-family: "Roboto";

  :hover {
    cursor: pointer;
    background-color: ${({ theme: { colors } }) => colors.scale_2};
  }
`;
