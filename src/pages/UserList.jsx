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
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Task } from "../components/";

function UserList(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const response = await api.get("/task", {
          headers: {
            Authorization: `Bearer ${props.token}`,
          },
        });

        setTasks([...response.data]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTasks();
  }, [props.token]);

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

UserList.propTypes = {
  token: PropTypes.string,
};

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

export default connect(mapStateToProps)(UserList);
