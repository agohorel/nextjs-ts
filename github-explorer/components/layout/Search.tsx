import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../actions";
import { useRouter } from "next/router";

import Button from "../library/Button";

const Search: React.FC<any> = () => {
  const [username, setUsername] = useState<string>("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    dispatch(fetchUser(username));
    router.push(`/users/[username]`, `/users/${username}`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>search for github user by username</Label>
      <Input
        id="username"
        onChange={handleInput}
        value={username}
        placeholder="search for github user"
      ></Input>
      <Button>
        search <Icon icon={faSearch} />
      </Button>
    </Form>
  );
};

export default Search;

const Form = styled.form``;

const Input = styled.input`
  border: 1px solid ${({ theme: { colors } }) => colors.scale_2};
  background-color: ${({ theme: { colors } }) => colors.scale_6};
  color: ${({ theme: { colors } }) => colors.scale_1};
  padding: ${({ theme: { measurements } }) => measurements.inputPadding};
  font-family: "Roboto";
`;

const Label = styled.label`
  display: none;
`;

const Icon = styled(FontAwesomeIcon)``;
