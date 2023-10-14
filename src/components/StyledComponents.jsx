import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 70vw;
  border-top: black solid 1.25px;
  border-bottom: black solid 1.25px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const TaskListField = styled.div`
  width: 20vw;
  height: 100%;
  border-right: black solid 1.25px;
  border-left: black solid 1.25px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const TaskText = styled.p`
  font-weight: 600;
  font-size: 1.5vw;
  text-align: center;
`;

export const EditBtn = styled.button`
  width: 30px;
  height: 30px;
  background-image: url("../../src/assets/Edit_icon.png");
  background-size: cover;
  border: none;
  cursor: pointer;
  background-color: lightgreen;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #59adea;
  }
`;

export const DeleteBtn = styled.button`
  width: 30px;
  height: 30px;
  background-image: url("../../src/assets/trash_icon.png");
  background-size: cover;
  border: none;
  cursor: pointer;
  background-color: #ff4c4c;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #59adea;
  }
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
