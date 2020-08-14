import React from "react";
import styled from "styled-components";

const FormButton = ({ children }) => {
  return <Button>{children}</Button>;
};

export default FormButton;

const Button = styled.button``;
