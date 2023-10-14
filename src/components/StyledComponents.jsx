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

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: relative;
  width: 50vw;
  height: 50vh;
  background-image: url("/src/assets/d25138s-e3948312-7432-452e-bf7e-5fd4ad352115.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1001;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
`;

export const ModalField = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const YesButton = styled.button`
  background-size: cover;
  padding: 6px;
  color: black;
  border: none;
  cursor: pointer;
  background-color: lightgreen;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #59adea;
    color: white;
    text-decoration: underline;
  }
`;

export const NoButton = styled.button`
  background-size: cover;
  padding: 6px;
  color: black;
  border: none;
  cursor: pointer;
  background-color: #ff4c4c;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #59adea;
    color: white;
    text-decoration: underline;
  }
`;

export const ToastContainer = styled.div`
  margin-top: 10px;
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
