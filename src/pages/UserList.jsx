import { useEffect, useState } from "react";
import {
  StyledContainer,
  TasksListContent,
  Title,
  TaskTitleText,
  TaskTitleContent,
  TaskTitleField,
} from "./StyledComponents";
import { api } from "../api/api";
import { useSelector } from "react-redux";
import { Task } from "../components/";

function UserList() {
  const token = useSelector((state) => state.auth.token);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const response = await api.get("/task", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const sortedTasks = response.data.sort((a, b) => a.id - b.id);
        setTasks(sortedTasks);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTasks();
  }, [token, tasks]);

  const updateTaskList = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <StyledContainer>
      <Title>TO-DO LIST</Title>
      <TasksListContent>
        <TaskTitleContent>
          <TaskTitleField>
            <TaskTitleText>NAME</TaskTitleText>
          </TaskTitleField>
          <TaskTitleField>
            <TaskTitleText>DESCRIPTION</TaskTitleText>
          </TaskTitleField>
          <TaskTitleField>
            <TaskTitleText>DONE</TaskTitleText>
          </TaskTitleField>
          <TaskTitleField>
            <TaskTitleText>DEL / EDIT</TaskTitleText>
          </TaskTitleField>
        </TaskTitleContent>
        {tasks.map((task) => {
          return (
            <Task
              key={task.id}
              name={task.name}
              description={task.description}
              id={task.id}
              updateTaskList={updateTaskList}
            />
          );
        })}
      </TasksListContent>
    </StyledContainer>
  );
}

export default UserList;
