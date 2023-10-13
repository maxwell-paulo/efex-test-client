import { useEffect, useState } from "react";
import { StyledContainer, Content, Button, Title } from "./StyledComponents";
import { api } from "../api/api";

function UserList() {
  const [tasks, setTaks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const response = api.get("/task");

        setTaks([...response.data]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTasks();
  }, []);
  return (
    <StyledContainer>
      <Title>TO-DO LIST</Title>
      <Content>
        {tasks.map((task) => {
          return <p key={task.id}>{task.name}</p>;
        })}
        <Button href="/login">LOGIN</Button>
        <Button href="/new-user">NEW USER</Button>
      </Content>
    </StyledContainer>
  );
}

export default UserList;
