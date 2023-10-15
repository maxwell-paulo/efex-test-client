import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { api } from "../api/api";
import toast from "react-hot-toast";
import { EditTask } from "./index.js";
import {
  StyledContainer,
  Content,
  TaskListField,
  TaskText,
  EditBtn,
  DeleteBtn,
  ToastContainer,
  YesButton,
  NoButton,
} from "./StyledComponents";
import { updateTaskDetails } from "../redux/tasks/actions.js";

function Task({ id, name, description, updateTaskList }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const [isChecked, setIsChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleCheckboxChange = async () => {
    try {
      await api.patch(
        "/task",
        { id: id, done: !isChecked },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setIsChecked(!isChecked);
    } catch (error) {
      console.log(error);
    }
  };

  const handleToast = () => {
    toast((t) => (
      <span>
        Are you sure you want to <b>delete</b> this task?
        <ToastContainer>
          <YesButton
            onClick={() => {
              handleDelete(t);
            }}
          >
            YES
          </YesButton>
          <NoButton onClick={() => toast.dismiss(t.id)}>NO</NoButton>
        </ToastContainer>
      </span>
    ));
  };

  const handleDelete = async (t) => {
    try {
      await api.delete(`/task/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      updateTaskList(id);

      toast.dismiss(t.id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);

    dispatch(updateTaskDetails(id, name, description));
  };

  return (
    <StyledContainer>
      <Content>
        <TaskListField>
          <TaskText
            style={{ textDecoration: isChecked ? "line-through" : "none" }}
          >
            {name}
          </TaskText>
        </TaskListField>
        <TaskListField>
          <TaskText>{description}</TaskText>
        </TaskListField>
        <TaskListField>
          <input
            id={id}
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </TaskListField>
        <TaskListField>
          <EditBtn onClick={handleEditClick} />
          <DeleteBtn onClick={handleToast} />
        </TaskListField>
      </Content>

      {isEditing && (
        <div>
          <EditTask taskId={id} onClose={() => setIsEditing(false)} />
        </div>
      )}
    </StyledContainer>
  );
}

export default Task;
