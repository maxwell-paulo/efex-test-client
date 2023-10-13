import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 500px;
  gap: 100px;
`;

export const Button = styled.a`
  background-color: #59adea;
  max-width: 400px;
  padding: 10px 20px;
  color: white;
  font-weight: 400;
  border-radius: 10px;
  text-decoration: none;
  cursor: pointer;
  color: black;

  transition: background-color 0.3s;

  &:hover {
    background-color: lightgreen;
    text-decoration: underline;
  }
`;

export const Title = styled.p`
  font-weight: 800;
  font-size: 9vw;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  max-width: 500px;
  gap: 40px;
`;

export const FormFiedls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Label = styled.label`
  color: black;
`;

export const FormButton = styled.button`
  background-color: #59adea;
  max-width: 400px;
  padding: 10px 20px;
  margin-top: 20px;
  font-weight: 400;
  border-radius: 10px;
  text-decoration: none;
  border: none;
  color: black;
  transition: background-color 0.3s;

  &:hover {
    background-color: lightgreen;
    color: black;
    text-decoration: underline;
  }
`;
