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

function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
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
      const responde = await api.post("/login", user);
      console.log(responde);

      navigate("/user-list");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <StyledContainer>
      <Title>WELCOME BACK</Title>
      <Form onSubmit={handleSubmit}>
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

        <FormButton type="submit">LOGIN NOW</FormButton>
      </Form>
    </StyledContainer>
  );
}

export default Login;
