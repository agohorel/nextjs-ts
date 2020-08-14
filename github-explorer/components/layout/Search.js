import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { fetchUser, fetchRepos, fetchUserFollowers } from "../../actions";

import Button from "../library/Button";

const Search = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setUsername(e.target.value);
  };

  const searchUser = async (username) => {
    dispatch(fetchUser(username));
    dispatch(fetchRepos(username));
    dispatch(fetchUserFollowers(username));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchUser(username);
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
  border: 1px solid ${({ theme: { colors } }) => colors.blackish};
  padding: ${({ theme: { measurements } }) => measurements.inputPadding};
`;

const Label = styled.label`
  display: none;
`;

const Icon = styled(FontAwesomeIcon)``;
