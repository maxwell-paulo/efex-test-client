import { useState } from "react";
import { api } from "../api/api";
import { useNavigate } from "react-router-dom";
import {
  FormButton,
  Form,
  StyledContainer,
  FormFiedls,
  Label,
  Title,
} from "./StyledComponents";

function CreateUser() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await api.post("/user", user);

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <StyledContainer>
      <Title>JOIN NOW</Title>
      <Form onSubmit={handleSubmit}>
        <FormFiedls>
          <Label htmlFor="email">name:</Label>
          <input
            id="name"
            name="name"
            type="text"
            value={user.name}
            onChange={handleChange}
            required
          ></input>
        </FormFiedls>
        <FormFiedls>
          <Label htmlFor="email">email:</Label>
          <input
            id="email"
            name="email"
            type="text"
            value={user.email}
            onChange={handleChange}
            required
          ></input>
        </FormFiedls>
        <FormFiedls>
          <Label htmlFor="password">password:</Label>
          <input
            id="password"
            name="password"
            type="password"
            value={user.password}
            onChange={handleChange}
          ></input>
        </FormFiedls>

        <FormButton type="submit">CREATE ACCOUNT</FormButton>
      </Form>
    </StyledContainer>
  );
}

export default CreateUser;
