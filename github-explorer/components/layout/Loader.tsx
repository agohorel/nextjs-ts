import React from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";

interface Props {
  type: string;
  height: string;
}

const LoaderComponent: React.FC<Props> = ({ type, height }) => {
  return (
    <LoaderContainer height={height}>
      <Loader type={type} color="#23db57" height={100} width={100} />
    </LoaderContainer>
  );
};

export default LoaderComponent;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.height};
`;
