import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin-bottom: 50px;
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
  color: white;
  transition: background-color 0.3s;

  &:hover {
    background-color: lightgreen;
    color: black;
    text-decoration: underline;
  }
`;

export const TasksListContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.1px;
`;

export const TaskTitleText = styled.p`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: 900;
  font-size: 2vw;
  text-align: center;
`;

export const TaskTitleContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  border-top: black solid 1.25px;
  border-bottom: black solid 1.25px;
`;

export const TaskTitleField = styled.div`
  width: 50%;
  height: 100%;
  border-right: black solid 1.25px;
  border-left: black solid 1.25px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const InfoButton = styled.button`
  width: 30px;
  height: 30px;
  background-image: url("../../src/assets/circle-info-solid.svg");
  background-size: cover;
  border: none;
  cursor: pointer;
  background-color: white;
  border-radius: 100px;
  transition: 0.3s;

  &:hover {
    width: 40px;
    height: 40px;
  }
`;
