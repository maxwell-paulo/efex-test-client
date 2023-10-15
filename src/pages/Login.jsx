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
import { useDispatch } from "react-redux";
import { login } from "../redux/auth/actions.js";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      const response = await api.post("/login", user);
      const token = response.data.token;

      dispatch(login(token));

      navigate("/user-list");
    } catch (error) {
      console.error("Erro ao analisar o token JSON:", error);
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
