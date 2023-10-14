import { useState } from "react";
import { connect } from "react-redux";
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
} from "./StyledComponents";

function Task(props) {
  const { id, name, description, updateTaskList } = props;
  const [isChecked, setIsChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false); // Adiciona um estado para controlar o modal de edição

  const handleCheckboxChange = async () => {
    try {
      await api.patch(
        "/task",
        { id: id, done: !isChecked },
        {
          headers: {
            Authorization: `Bearer ${props.token}`,
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
        Tem certeza que deseja <b>excluir</b> essa tarefa?
        <div>
          <button
            onClick={() => {
              handleDelete(t);
            }}
          >
            Excluir
          </button>
          <button onClick={() => toast.dismiss(t.id)}>Não</button>
        </div>
      </span>
    ));
  };

  const handleDelete = async (t) => {
    try {
      await api.delete(`/task/${id}`, {
        headers: {
          Authorization: `Bearer ${props.token}`,
        },
      });

      updateTaskList(id);

      toast.dismiss(t.id);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true); // Abre o modal de edição
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
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </TaskListField>
        <TaskListField>
          <EditBtn onClick={handleEditClick} />{" "}
          {/* Adiciona um evento de clique */}
          <DeleteBtn onClick={handleToast} />
        </TaskListField>
      </Content>

      {/* Modal de edição */}
      {isEditing && (
        <div>
          <EditTask
            taskId={id} // Passe o ID da tarefa ao componente de edição
            onClose={() => setIsEditing(false)} // Fornece uma função para fechar o modal
          />
        </div>
      )}
    </StyledContainer>
  );
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

export default connect(mapStateToProps)(Task);
